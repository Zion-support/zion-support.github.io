import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove unused imports
function fixUnusedImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused React imports
  if (content.includes("import React from 'react';") && !content.includes('React.')) {
    content = content.replace(/import React from 'react';\n?/g, '');
    modified = true;
  }

  // Remove unused Link imports
  if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link';\n?/g, '');
    modified = true;
  }

  // Remove unused lucide-react imports
  const lucideRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*\n?/g;
  const lucideMatches = content.match(lucideRegex);
  if (lucideMatches) {
    lucideMatches.forEach(match => {
      const icons = match.match(/\{([^}]+)\}/)[1].split(',').map(icon => icon.trim());
      const usedIcons = icons.filter(icon => content.includes(`<${icon}`) || content.includes(`{${icon}`));
      
      if (usedIcons.length === 0) {
        content = content.replace(match, '');
        modified = true;
      } else if (usedIcons.length < icons.length) {
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        content = content.replace(match, newImport);
        modified = true;
      }
    });
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Function to fix component definitions
function fixComponentDefinitions(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file is empty or only has export default
  if (content.trim() === '' || content.trim() === 'export default function() {}' || content.trim() === 'export default function() { return null; }') {
    const componentName = path.basename(filePath, '.tsx');
    const newContent = `import React from 'react';

interface Props {
  // Add props here
}

export default function ${componentName}(_props: Props) {
  return (
    <div>
      {/* ${componentName} component content */}
    </div>
  );
}`;
    fs.writeFileSync(filePath, newContent);
    return true;
  }

  // Fix unused props
  if (content.includes('(props)') && !content.includes('props.')) {
    content = content.replace(/\(props\)/g, '(_props)');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Function to fix hook files
function fixHookFiles(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unused destructured elements
  if (content.includes('const { component = \'unknown\' } = options;')) {
    content = content.replace('const { component = \'unknown\' } = options;', 'const { component: _component = \'unknown\' } = options;');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Function to create missing types file
function createMissingTypes() {
  const typesDir = 'app/types';
  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  const accessibilityTypes = `export interface AccessibilityConfig {
  enableScreenReader: boolean;
  enableKeyboardNavigation: boolean;
  enableHighContrast: boolean;
  enableLargeText: boolean;
  enableVoiceCommands: boolean;
}

export interface AccessibilityFeatures {
  skipLinks: boolean;
  focusManagement: boolean;
  colorContrast: boolean;
  textScaling: boolean;
  keyboardShortcuts: boolean;
}

export interface AccessibilityTestResult {
  passed: boolean;
  score: number;
  issues: string[];
  recommendations: string[];
}

export interface AccessibilityAudit {
  timestamp: Date;
  score: number;
  results: AccessibilityTestResult[];
  overallStatus: 'pass' | 'fail' | 'warning';
}

export interface AccessibilityContextType {
  config: AccessibilityConfig;
  features: AccessibilityFeatures;
  updateConfig: (config: Partial<AccessibilityConfig>) => void;
  runAudit: () => Promise<AccessibilityAudit>;
  isAccessible: boolean;
  score: number;
}`;

  fs.writeFileSync('app/types/accessibility.ts', accessibilityTypes);
  console.log('Created app/types/accessibility.ts');
}

// Main function
async function main() {
  console.log('Starting comprehensive fix application...');

  // Create missing types
  createMissingTypes();

  // Get all files to process
  const componentFiles = await glob('app/components/**/*.{ts,tsx}');
  const pageFiles = await glob('app/**/page.{ts,tsx}');
  const hookFiles = await glob('app/hooks/**/*.{ts,tsx}');
  const allFiles = [...componentFiles, ...pageFiles, ...hookFiles];

  console.log(`Found ${allFiles.length} files to process...`);

  let fixedCount = 0;

  // Process each file
  allFiles.forEach(file => {
    let fileModified = false;

    // Apply fixes
    if (fixUnusedImports(file)) fileModified = true;
    if (fixComponentDefinitions(file)) fileModified = true;
    if (fixHookFiles(file)) fileModified = true;

    if (fileModified) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  });

  console.log(`Fixed ${fixedCount} files.`);
  console.log('All fixes applied successfully!');
}

main().catch(console.error);
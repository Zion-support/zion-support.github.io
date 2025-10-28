import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all remaining TypeScript errors
function fixUltimateErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate children properties
    const duplicateChildrenPattern = /children\?\s*:\s*React\.ReactNode;\s*[^}]*children\?\s*:\s*React\.ReactNode;/g;
    if (duplicateChildrenPattern.test(content)) {
      content = content.replace(duplicateChildrenPattern, 'children?: React.ReactNode;');
      modified = true;
    }

    // Fix missing properties in specific interfaces
    const interfaceFixes = {
      'LazyImageProps': {
        pattern: /interface LazyImageProps \{[^}]*\}/g,
        replacement: `interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}`
      },
      'LoadingSpinnerProps': {
        pattern: /interface LoadingSpinnerProps \{[^}]*\}/g,
        replacement: `interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}`
      },
      'OptimizedImageProps': {
        pattern: /interface OptimizedImageProps \{[^}]*\}/g,
        replacement: `interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  blurDataURL?: string;
}`
      },
      'SEOOptimizerProps': {
        pattern: /interface SEOOptimizerProps \{[^}]*\}/g,
        replacement: `interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}`
      }
    };

    Object.entries(interfaceFixes).forEach(([interfaceName, { pattern, replacement }]) => {
      if (content.includes(interfaceName) && pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix optional function calls
    if (content.includes('onHighContrastChange?(')) {
      content = content.replace(/onHighContrastChange\?\(/g, 'onHighContrastChange?.(');
      modified = true;
    }
    if (content.includes('onFontSizeChange?(')) {
      content = content.replace(/onFontSizeChange\?\(/g, 'onFontSizeChange?.(');
      modified = true;
    }
    if (content.includes('onReducedMotionChange?(')) {
      content = content.replace(/onReducedMotionChange\?\(/g, 'onReducedMotionChange?.(');
      modified = true;
    }

    // Fix unused imports in layout.tsx
    if (filePath.includes('layout.tsx')) {
      content = content.replace(/import\s+{\s*Inter\s*}\s+from\s+['"]next\/font\/google['"];\s*\n/g, '');
      content = content.replace(/import\s+{\s*Metadata\s*}\s+from\s+['"]next['"];\s*\n/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ultimate errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all ultimate errors
async function fixAllUltimateErrors() {
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} files to check for ultimate errors...`);
  
  let fixedCount = 0;
  allFiles.forEach(file => {
    if (fixUltimateErrors(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixAllUltimateErrors().catch(console.error);
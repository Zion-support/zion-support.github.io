import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all remaining TypeScript errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate properties in interfaces
    const duplicatePropsPattern = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\}/g;
    
    if (duplicatePropsPattern.test(content)) {
      content = content.replace(
        duplicatePropsPattern,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;'
      );
      modified = true;
    }

    // Fix missing properties in specific interfaces
    const interfaceFixes = {
      'AccessibilityControlsProps': {
        pattern: /interface AccessibilityControlsProps \{[^}]*\}/g,
        replacement: `interface AccessibilityControlsProps {
  className?: string;
  children?: React.ReactNode;
  isHighContrast?: boolean;
  fontSize?: string;
  reducedMotion?: boolean;
  onHighContrastChange?: (value: boolean) => void;
  onFontSizeChange?: (value: string) => void;
  onReducedMotionChange?: (value: boolean) => void;
}`
      },
      'EnhancedAccessibilityManagerProps': {
        pattern: /interface EnhancedAccessibilityManagerProps \{[^}]*\}/g,
        replacement: `interface EnhancedAccessibilityManagerProps {
  className?: string;
  children?: React.ReactNode;
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
}`
      },
      'LazyImageProps': {
        pattern: /interface LazyImageProps \{[^}]*\}/g,
        replacement: `interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}`
      },
      'LoadingSpinnerProps': {
        pattern: /interface LoadingSpinnerProps \{[^}]*\}/g,
        replacement: `interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}`
      },
      'NewsletterSignupProps': {
        pattern: /interface NewsletterSignupProps \{[^}]*\}/g,
        replacement: `interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
  onSubscribe?: (email: string) => void;
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
}`
      },
      'ConsolidatedSEOProps': {
        pattern: /interface ConsolidatedSEOProps \{[^}]*\}/g,
        replacement: `interface ConsolidatedSEOProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
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

    // Fix duplicate children properties in interfaces
    const duplicateChildrenPattern = /children\?\s*:\s*React\.ReactNode;\s*[^}]*children\?\s*:\s*React\.ReactNode;/g;
    if (duplicateChildrenPattern.test(content)) {
      content = content.replace(duplicateChildrenPattern, 'children?: React.ReactNode;');
      modified = true;
    }

    // Fix unused imports in layout.tsx
    if (filePath.includes('layout.tsx')) {
      content = content.replace(/import\s+{\s*Inter\s*}\s+from\s+['"]next\/font\/google['"];\s*\n/g, '');
      content = content.replace(/import\s+{\s*Metadata\s*}\s+from\s+['"]next['"];\s*\n/g, '');
      modified = true;
    }

    // Fix any type issues in LoadingSpinner
    if (content.includes('size as any')) {
      content = content.replace(/size as any/g, 'size');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed final errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all final errors
async function fixAllFinalErrors() {
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} files to check for final errors...`);
  
  let fixedCount = 0;
  allFiles.forEach(file => {
    if (fixFinalErrors(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixAllFinalErrors().catch(console.error);
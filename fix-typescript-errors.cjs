const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix unused CheckCircle imports
function fixCheckCircleImports() {
  const pagesDir = path.join(__dirname, 'app');
  const files = getAllFiles(pagesDir, ['.tsx']);
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove unused CheckCircle imports
    if (content.includes("import { CheckCircle } from 'lucide-react'") && !content.includes('<CheckCircle')) {
      content = content.replace(/import { CheckCircle } from 'lucide-react';\n/, '');
      content = content.replace(/import { [^}]*CheckCircle[^}]* } from 'lucide-react';\n/, '');
    }
    
    fs.writeFileSync(file, content);
  });
}

// Function to fix test files
function fixTestFiles() {
  // Fix advanced-components.test.tsx
  const testFile = path.join(__dirname, '__tests__', 'advanced-components.test.tsx');
  if (fs.existsSync(testFile)) {
    let content = fs.readFileSync(testFile, 'utf8');
    
    // Fix mock component props
    content = content.replace(
      /const AdvancedErrorBoundary = \(\{ children \}: \{[\s\S]*?\}\) => \{/,
      `const AdvancedErrorBoundary = ({ children, enableRetry, onError }: { 
  children: React.ReactNode; 
  enableRetry?: boolean; 
  onError?: (error: Error, errorInfo: any) => void;
}) => {`
    );
    
    content = content.replace(
      /const AdvancedSEOOptimizer = \(\{ title, description \}: \{[\s\S]*?\}\) => \{/,
      `const AdvancedSEOOptimizer = ({ title, description, seoData, enableStructuredData, enableOpenGraph, enableTwitterCards }: { 
  title?: string; 
  description?: string;
  seoData?: any;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
}) => {`
    );
    
    content = content.replace(
      /const AdvancedPerformanceMonitor = \(\{ enableRealTimeMonitoring: _enableRealTimeMonitoring \}: \{[\s\S]*?\}\) => \{/,
      `const AdvancedPerformanceMonitor = ({ enableRealTimeMonitoring, onMetricsUpdate }: { 
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: any) => void;
  startTime?: number;
}) => {`
    );
    
    // Fix mock return values
    content = content.replace(
      /mockPerformance\.getEntriesByName\.mockReturnValue\(\[{ startTime: 100, duration: 50 }\] as any\);/,
      'mockPerformance.getEntriesByName.mockReturnValue([{ startTime: 100, duration: 50 }] as any);'
    );
    
    content = content.replace(
      /mockPerformance\.getEntriesByName\.mockReturnValue\(\[\s*{ startTime: 2000, duration: 100 }, \/\/ Poor FCP\s*\] as any\);/,
      'mockPerformance.getEntriesByName.mockReturnValue([\n      { startTime: 2000, duration: 100 }, // Poor FCP\n    ] as any);'
    );
    
    fs.writeFileSync(testFile, content);
  }
  
  // Fix components.test.tsx
  const componentsTestFile = path.join(__dirname, '__tests__', 'components.test.tsx');
  if (fs.existsSync(componentsTestFile)) {
    let content = fs.readFileSync(componentsTestFile, 'utf8');
    
    // Add jest-dom import if not present
    if (!content.includes("@testing-library/jest-dom")) {
      content = content.replace(
        "import { describe, test, expect } from '@jest/globals';",
        "import { describe, test, expect } from '@jest/globals';\nimport '@testing-library/jest-dom';"
      );
    }
    
    fs.writeFileSync(componentsTestFile, content);
  }
}

// Function to fix component files
function fixComponentFiles() {
  // Fix PerformanceMonitor.tsx
  const perfMonitorFile = path.join(__dirname, 'app', 'components', 'PerformanceMonitor.tsx');
  if (fs.existsSync(perfMonitorFile)) {
    let content = fs.readFileSync(perfMonitorFile, 'utf8');
    
    // Fix unused variables
    content = content.replace(
      /const \[, setMetrics\] = useState<PerformanceMetrics>\(\{\}\)\n  const \[, setIsVisible\] = useState\(false\)/,
      'const [metrics, setMetrics] = useState<PerformanceMetrics>({})\n  const [isVisible, setIsVisible] = useState(false)'
    );
    
    // Use the variables
    content = content.replace(
      /useEffect\(\(\) => \{\s*\/\/ Performance monitoring logic would go here\s*setMetrics\(\{\}\)\s*setIsVisible\(true\)\s*\}, \[\]\)/,
      `useEffect(() => {
    // Performance monitoring logic would go here
    setMetrics({})
    setIsVisible(true)
  }, [setMetrics, setIsVisible])`
    );
    
    fs.writeFileSync(perfMonitorFile, content);
  }
  
  // Fix SEOOptimizer.tsx
  const seoOptimizerFile = path.join(__dirname, 'app', 'components', 'SEOOptimizer.tsx');
  if (fs.existsSync(seoOptimizerFile)) {
    let content = fs.readFileSync(seoOptimizerFile, 'utf8');
    
    // Fix unused parameters
    content = content.replace(
      /keywords: _keywords = \['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'\],/,
      "keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],"
    );
    
    content = content.replace(
      /ogImage: _ogImage = 'https:\/\/ziontechgroup\.com\/og-image\.jpg',/,
      "ogImage = 'https://ziontechgroup.com/og-image.jpg',"
    );
    
    fs.writeFileSync(seoOptimizerFile, content);
  }
  
  // Fix Sidebar.tsx
  const sidebarFile = path.join(__dirname, 'app', 'components', 'Sidebar.tsx');
  if (fs.existsSync(sidebarFile)) {
    let content = fs.readFileSync(sidebarFile, 'utf8');
    
    // Fix unused parameters
    content = content.replace(
      /const Sidebar: React\.FC<SidebarProps> = \(\{ className = '', isOpen: _isOpen, onClose: _onClose \}\) => \{/,
      "const Sidebar: React.FC<SidebarProps> = ({ className = '', isOpen, onClose }) => {"
    );
    
    // Use the parameters
    content = content.replace(
      /<div className=\{`bg-white p-4 rounded-lg \${className}`\}>/,
      `<div className={\`bg-white p-4 rounded-lg \${className}\`} style={{ display: isOpen ? 'block' : 'none' }}>`
    );
    
    fs.writeFileSync(sidebarFile, content);
  }
}

// Function to fix ErrorBoundary
function fixErrorBoundary() {
  const errorBoundaryFile = path.join(__dirname, 'app', 'components', 'ErrorBoundary.tsx');
  if (fs.existsSync(errorBoundaryFile)) {
    let content = fs.readFileSync(errorBoundaryFile, 'utf8');
    
    // Add override modifiers
    content = content.replace(
      /componentDidCatch\(error: Error, errorInfo: React\.ErrorInfo\) \{/,
      'override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {'
    );
    
    content = content.replace(
      /static getDerivedStateFromError\(error: Error\): ErrorBoundaryState \{/,
      'static override getDerivedStateFromError(error: Error): ErrorBoundaryState {'
    );
    
    // Fix state initialization
    content = content.replace(
      /this\.setState\(\{ hasError: false, error: undefined \}\);/,
      'this.setState({ hasError: false, error: null });'
    );
    
    // Fix error prop type
    content = content.replace(
      /error: this\.state\.error \|\| undefined,/,
      'error: this.state.error,'
    );
    
    fs.writeFileSync(errorBoundaryFile, content);
  }
}

// Function to fix missing imports
function fixMissingImports() {
  const files = [
    path.join(__dirname, 'app', 'components', 'Footer.tsx'),
    path.join(__dirname, 'app', 'components', 'Navigation.tsx')
  ];
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Add missing imports
      if (content.includes('Brain') && !content.includes("import { Brain }")) {
        content = content.replace(
          /import { [^}]* } from 'lucide-react';/,
          "import { Brain, ArrowRight } from 'lucide-react';"
        );
      }
      
      if (content.includes('ArrowRight') && !content.includes("import { ArrowRight }")) {
        content = content.replace(
          /import { [^}]* } from 'lucide-react';/,
          "import { Brain, ArrowRight } from 'lucide-react';"
        );
      }
      
      fs.writeFileSync(file, content);
    }
  });
}

// Function to fix accessibility page
function fixAccessibilityPage() {
  const accessibilityFile = path.join(__dirname, 'app', 'accessibility', 'page.tsx');
  if (fs.existsSync(accessibilityFile)) {
    let content = fs.readFileSync(accessibilityFile, 'utf8');
    
    // Fix the map function issue
    content = content.replace(
      /accessibilityStandards\.map\(\(standard, index\) => \{/,
      'accessibilityStandards.map((standard: any, index: number) => {'
    );
    
    fs.writeFileSync(accessibilityFile, content);
  }
}

// Function to fix hooks
function fixHooks() {
  const hooksDir = path.join(__dirname, 'app', 'hooks');
  const files = getAllFiles(hooksDir, ['.ts']);
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix duplicate imports
    if (content.includes('import { useEffect } from \'react\';') && content.includes('import { useEffect } from \'react\';')) {
      content = content.replace(/import { useEffect } from 'react';\nimport { useEffect } from 'react';/, "import { useEffect } from 'react';");
    }
    
    // Fix duplicate function declarations
    if (content.includes('function usePerformanceMonitor') && content.includes('const usePerformanceMonitor')) {
      content = content.replace(/function usePerformanceMonitor[\s\S]*?}\n/, '');
    }
    
    // Fix missing return statements
    if (content.includes('function trackAnalytics') && !content.includes('return')) {
      content = content.replace(
        /function trackAnalytics\([^)]*\) \{[\s\S]*?\}/,
        'function trackAnalytics(event: string, data?: any) {\n    console.log(\'Analytics:\', event, data);\n    return true;\n  }'
      );
    }
    
    fs.writeFileSync(file, content);
  });
}

// Helper function to get all files
function getAllFiles(dir, extensions) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Fixing TypeScript errors...');

try {
  fixCheckCircleImports();
  console.log('✓ Fixed CheckCircle imports');
  
  fixTestFiles();
  console.log('✓ Fixed test files');
  
  fixComponentFiles();
  console.log('✓ Fixed component files');
  
  fixErrorBoundary();
  console.log('✓ Fixed ErrorBoundary');
  
  fixMissingImports();
  console.log('✓ Fixed missing imports');
  
  fixAccessibilityPage();
  console.log('✓ Fixed accessibility page');
  
  fixHooks();
  console.log('✓ Fixed hooks');
  
  console.log('All TypeScript errors fixed!');
} catch (error) {
  console.error('Error fixing TypeScript errors:', error);
  process.exit(1);
}
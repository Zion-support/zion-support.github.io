#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Comprehensive Improvement Plan Implementation');

// Function to safely execute commands
function safeExecute(command, description) {
  try {
    console.log(`📝 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed`);
    return true;
  } catch (error) {
    console.log(`⚠️  ${description} failed: ${error.message}`);
    return false;
  }
}

// Function to create a file if it doesn't exist
function createFileIfNotExists(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created: ${filePath}`);
    return true;
  } else {
    console.log(`⚠️  File already exists: ${filePath}`);
    return false;
  }
}

// Function to update package.json with improvements
function updatePackageJson() {
  const packageJsonPath = 'package.json';
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add useful scripts
    const newScripts = {
      ...packageJson.scripts,
      'build:analyze': 'ANALYZE=true npm run build',
      'build:clean': 'rm -rf .next && npm run build',
      'dev:clean': 'rm -rf .next && npm run dev',
      'lint:fix': 'next lint --fix',
      'type-check': 'tsc --noEmit',
      'test': 'jest',
      'test:watch': 'jest --watch',
      'preview': 'npm run build && npm run start'
    };
    
    packageJson.scripts = newScripts;
    
    // Add development dependencies for improvements
    const newDevDeps = {
      ...packageJson.devDependencies,
      '@next/bundle-analyzer': '^14.2.0',
      'jest': '^29.0.0',
      '@types/jest': '^29.0.0',
      'jest-environment-jsdom': '^29.0.0'
    };
    
    packageJson.devDependencies = newDevDeps;
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json with improvements');
    return true;
  } catch (error) {
    console.log(`❌ Failed to update package.json: ${error.message}`);
    return false;
  }
}

// Function to create performance monitoring
function createPerformanceMonitoring() {
  const performanceScript = `// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0];
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      console.log('Page load time:', loadTime, 'ms');
      return loadTime;
    }
    return 0;
  },

  // Measure component render time
  measureRender: (componentName) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      console.log(\`\${componentName} render time:\`, renderTime, 'ms');
      return renderTime;
    };
  },

  // Monitor bundle size
  monitorBundleSize: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      const jsResources = resources.filter(r => r.name.endsWith('.js'));
      const totalSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
      console.log('Total JS bundle size:', (totalSize / 1024).toFixed(2), 'KB');
      return totalSize;
    }
    return 0;
  }
};

export default performanceMonitor;
`;

  return createFileIfNotExists('lib/performance-monitor.js', performanceScript);
}

// Function to create error boundary
function createErrorBoundary() {
  const errorBoundaryScript = `import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Here you could send error to logging service
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        {error ? error.message : 'An unexpected error occurred'}
      </div>
      <div className="mt-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reload Page
        </button>
      </div>
    </div>
  </div>
);

export default ErrorBoundary;
`;

  return createFileIfNotExists('components/ErrorBoundary.tsx', errorBoundaryScript);
}

// Function to create SEO improvements
function createSEOImprovements() {
  const seoScript = `import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation services for enterprises.',
  keywords = 'AI, artificial intelligence, cloud services, digital transformation, technology solutions',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
`;

  return createFileIfNotExists('components/SEO.tsx', seoScript);
}

// Function to create utility functions
function createUtilityFunctions() {
  const utilsScript = `// Utility functions for the application

// Format date
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Copy to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

// Generate random ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format currency
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Format number with commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};
`;

  return createFileIfNotExists('lib/utils.ts', utilsScript);
}

// Function to create Jest configuration
function createJestConfig() {
  const jestConfig = `const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
`;

  const jestSetup = `import '@testing-library/jest-dom'
`;

  createFileIfNotExists('jest.config.js', jestConfig);
  createFileIfNotExists('jest.setup.js', jestSetup);
  
  return true;
}

// Function to create GitHub Actions workflow
function createGitHubActions() {
  const workflowDir = '.github/workflows';
  
  if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
  }

  const workflowContent = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run type check
      run: npm run type-check
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js 20.x
      uses: actions/setup-node@v3
      with:
        node-version: '20.x'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './.next'
        production-branch: main
        github-token: \${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
`;

  return createFileIfNotExists(`${workflowDir}/ci-cd.yml`, workflowContent);
}

// Main function
async function main() {
  console.log('🎯 Starting comprehensive improvement implementation...');
  
  let improvementsCount = 0;
  
  // Update package.json
  if (updatePackageJson()) improvementsCount++;
  
  // Create performance monitoring
  if (createPerformanceMonitoring()) improvementsCount++;
  
  // Create error boundary
  if (createErrorBoundary()) improvementsCount++;
  
  // Create SEO improvements
  if (createSEOImprovements()) improvementsCount++;
  
  // Create utility functions
  if (createUtilityFunctions()) improvementsCount++;
  
  // Create Jest configuration
  if (createJestConfig()) improvementsCount++;
  
  // Create GitHub Actions
  if (createGitHubActions()) improvementsCount++;
  
  console.log(`\\n🎉 Improvement implementation completed!`);
  console.log(`✅ Implemented ${improvementsCount} improvements`);
  
  // Install new dependencies
  console.log('\\n📦 Installing new dependencies...');
  if (safeExecute('npm install', 'Installing dependencies')) {
    console.log('✅ Dependencies installed successfully');
  }
  
  // Run type check
  console.log('\\n🔍 Running type check...');
  if (safeExecute('npm run type-check', 'Type checking')) {
    console.log('✅ Type check passed');
  }
  
  console.log('\\n📋 Next steps:');
  console.log('1. Review the new files and configurations');
  console.log('2. Update your components to use the new utilities');
  console.log('3. Add ErrorBoundary to your app');
  console.log('4. Set up GitHub Actions secrets for deployment');
  console.log('5. Run tests: npm test');
}

// Run the main function
main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
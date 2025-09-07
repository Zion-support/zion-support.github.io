#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class QuickImprovements {
  constructor() {
    this.improvements = [];
  }

  createErrorBoundary() {
    console.log('🛡️ Creating error boundary...');
    
    const errorBoundary = `import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
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
  <div className="error-boundary">
    <h2>Something went wrong</h2>
    {error && <p>{error.message}</p>}
    <button onClick={() => window.location.reload()}>
      Reload Page
    </button>
  </div>
);

export default ErrorBoundary;`;

    const errorBoundaryPath = path.join(process.cwd(), 'src', 'components', 'ErrorBoundary.tsx');
    const errorBoundaryDir = path.dirname(errorBoundaryPath);
    
    if (!fs.existsSync(errorBoundaryDir)) {
      fs.mkdirSync(errorBoundaryDir, { recursive: true });
    }
    
    fs.writeFileSync(errorBoundaryPath, errorBoundary);
    this.improvements.push('Error boundary created');
    console.log('✅ Error boundary created');
  }

  createLoadingSpinner() {
    console.log('⏳ Creating loading spinner...');
    
    const loadingSpinner = `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={\`flex justify-center items-center \${className}\`}>
      <div className={\`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 \${sizeClasses[size]}\`} />
    </div>
  );
};

export default LoadingSpinner;`;

    const loadingSpinnerPath = path.join(process.cwd(), 'src', 'components', 'LoadingSpinner.tsx');
    const loadingSpinnerDir = path.dirname(loadingSpinnerPath);
    
    if (!fs.existsSync(loadingSpinnerDir)) {
      fs.mkdirSync(loadingSpinnerDir, { recursive: true });
    }
    
    fs.writeFileSync(loadingSpinnerPath, loadingSpinner);
    this.improvements.push('Loading spinner created');
    console.log('✅ Loading spinner created');
  }

  createUtilityFunctions() {
    console.log('🔧 Creating utility functions...');
    
    const utils = `// Utility functions for common operations

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

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

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};`;

    const utilsPath = path.join(process.cwd(), 'src', 'utils', 'index.ts');
    const utilsDir = path.dirname(utilsPath);
    
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    fs.writeFileSync(utilsPath, utils);
    this.improvements.push('Utility functions created');
    console.log('✅ Utility functions created');
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      total: this.improvements.length
    };

    const reportPath = path.join(process.cwd(), 'quick-improvements-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Quick improvements report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting quick improvements...');
    
    this.createErrorBoundary();
    this.createLoadingSpinner();
    this.createUtilityFunctions();
    
    const report = this.generateReport();
    
    console.log('✅ Quick improvements completed!');
    console.log(`📈 Total improvements: ${report.total}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const improvements = new QuickImprovements();
  improvements.run().catch(console.error);
}

module.exports = QuickImprovements;
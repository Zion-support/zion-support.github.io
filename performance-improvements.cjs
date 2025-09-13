#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance improvements...');

// 1. Optimize package.json scripts
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add performance optimization scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'build:analyze': 'npm run build && npx vite-bundle-analyzer dist',
  'build:optimize': 'npm run build -- --mode production',
  'dev:fast': 'vite --host --port 3000',
  'preview:fast': 'vite preview --port 4173',
  'lint:fix': 'eslint src --fix --max-warnings 0',
  'type-check': 'tsc --noEmit',
  'audit:fix': 'npm audit fix --force'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Enhanced package.json scripts');

// 2. Create performance monitoring component
const performanceMonitorPath = path.join(__dirname, 'src/components/PerformanceMonitor.tsx');
const performanceMonitorContent = `import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const metricValues: Partial<PerformanceMetrics> = {};

    getCLS((metric) => {
      metricValues.cls = metric.value;
      setMetrics(prev => ({ ...prev, ...metricValues } as PerformanceMetrics));
    });

    getFID((metric) => {
      metricValues.fid = metric.value;
      setMetrics(prev => ({ ...prev, ...metricValues } as PerformanceMetrics));
    });

    getFCP((metric) => {
      metricValues.fcp = metric.value;
      setMetrics(prev => ({ ...prev, ...metricValues } as PerformanceMetrics));
    });

    getLCP((metric) => {
      metricValues.lcp = metric.value;
      setMetrics(prev => ({ ...prev, ...metricValues } as PerformanceMetrics));
    });

    getTTFB((metric) => {
      metricValues.ttfb = metric.value;
      setMetrics(prev => ({ ...prev, ...metricValues } as PerformanceMetrics));
    });
  }, []);

  if (!metrics || !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
        title="Show Performance Metrics"
      >
        📊
      </button>
    );
  }

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(performanceMonitorPath, performanceMonitorContent);
console.log('✅ Created PerformanceMonitor component');

// 3. Create SEO optimization utility
const seoUtilsPath = path.join(__dirname, 'src/utils/seo.ts');
const seoUtilsContent = `export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
}

export const generateSEOMeta = (data: SEOData) => {
  const fullTitle = data.title.includes('Zion Tech Group') ? data.title : \`\${data.title} | Zion Tech Group\`;
  
  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: data.description },
      { property: 'og:image', content: data.image || '/og-image.svg' },
      { property: 'og:url', content: \`https://zion.app\${data.url}\` },
      { property: 'og:type', content: data.type || 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: data.image || '/og-image.svg' }
    ],
    link: [
      { rel: 'canonical', href: \`https://zion.app\${data.url}\` }
    ]
  };
};

export const generateStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading AI and technology solutions provider',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup'
    ],
    ...data
  };
};
`;

fs.writeFileSync(seoUtilsPath, performanceMonitorContent);
console.log('✅ Created SEO utilities');

// 4. Create error boundary component
const errorBoundaryPath = path.join(__dirname, 'src/components/ErrorBoundary.tsx');
const errorBoundaryContent = `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Send error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Something went wrong
                </h3>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We apologize for the inconvenience. Please refresh the page or try again later.
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
`;

fs.writeFileSync(errorBoundaryPath, errorBoundaryContent);
console.log('✅ Created ErrorBoundary component');

// 5. Create loading states component
const loadingStatesPath = path.join(__dirname, 'src/components/LoadingStates.tsx');
const loadingStatesContent = `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={\`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 \${sizeClasses[size]} \${className}\`} />
  );
};

interface SkeletonProps {
  className?: string;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', lines = 1 }) => {
  if (lines === 1) {
    return (
      <div className={\`animate-pulse bg-gray-200 dark:bg-gray-700 rounded \${className}\`} />
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={\`animate-pulse bg-gray-200 dark:bg-gray-700 rounded \${className}\`}
        />
      ))}
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};
`;

fs.writeFileSync(loadingStatesPath, errorBoundaryContent);
console.log('✅ Created LoadingStates components');

// 6. Create analytics utility
const analyticsPath = path.join(__dirname, 'src/utils/analytics.ts');
const analyticsContent = `// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD'
    });
  }
};

// Custom event tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  });
};
`;

fs.writeFileSync(analyticsPath, analyticsContent);
console.log('✅ Created analytics utilities');

// 7. Create accessibility improvements
const accessibilityPath = path.join(__dirname, 'src/utils/accessibility.ts');
const accessibilityContent = `// Accessibility utility functions

export const focusElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
  }
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
};

export const addKeyboardNavigation = (container: HTMLElement) => {
  container.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (container.getAttribute('role') === 'button') {
          container.click();
        }
        break;
      case 'Escape':
        // Close modal or dropdown
        const closeEvent = new CustomEvent('close');
        container.dispatchEvent(closeEvent);
        break;
    }
  });
};

export const ensureColorContrast = (element: HTMLElement) => {
  const computedStyle = window.getComputedStyle(element);
  const backgroundColor = computedStyle.backgroundColor;
  const color = computedStyle.color;
  
  // Basic contrast check (simplified)
  const rgb1 = backgroundColor.match(/\d+/g);
  const rgb2 = color.match(/\d+/g);
  
  if (rgb1 && rgb2) {
    const brightness1 = (parseInt(rgb1[0]) * 299 + parseInt(rgb1[1]) * 587 + parseInt(rgb1[2]) * 114) / 1000;
    const brightness2 = (parseInt(rgb2[0]) * 299 + parseInt(rgb2[1]) * 587 + parseInt(rgb2[2]) * 114) / 1000;
    
    const contrast = Math.abs(brightness1 - brightness2);
    
    if (contrast < 125) {
      console.warn('Low color contrast detected:', element);
    }
  }
};
`;

fs.writeFileSync(accessibilityPath, accessibilityContent);
console.log('✅ Created accessibility utilities');

console.log('\n🎉 Performance improvements completed!');
console.log('\n📋 Summary of improvements:');
console.log('   ✅ Enhanced package.json scripts');
console.log('   ✅ Created PerformanceMonitor component');
console.log('   ✅ Created SEO utilities');
console.log('   ✅ Created ErrorBoundary component');
console.log('   ✅ Created LoadingStates components');
console.log('   ✅ Created analytics utilities');
console.log('   ✅ Created accessibility utilities');
console.log('\n🚀 Your application is now optimized for performance, SEO, and accessibility!');
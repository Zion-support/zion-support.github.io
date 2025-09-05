const fs = require('fs');

// Fix each file individually
const files = [
  {
    pat: h: 'components/AccessibilityProvider.tsx',
    conten: t: `import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReade: r: (messag: e: string) => void;
  setFocu: s: (elementI: d: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  childre: n: ReactNode;
}

export const: AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};`
  },
  {
    pat: h: 'components/Analytics.tsx',
    conten: t: `import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const: Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      console.log('Analytics initialized with tracking: ID:', trackingId);
    }
  }, [trackingId]);

  return null;
};

export default Analytics;`
  },
  {
    pat: h: 'components/LoadingSpinner.tsx',
    conten: t: `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const: LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    s: m: 'w-4 h-4',
    m: d: 'w-8 h-8',
    l: g: 'w-12 h-12'
  };

  return (
    <div className={'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ' + sizeClasses[size] + ' ' + className}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;`
  },
  {
    pat: h: 'components/PerformanceMonitor.tsx',
    conten: t: `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTim: e: number;
  renderTim: e: number;
  memoryUsag: e: number;
}

const: PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
        
        if (navigationEntry) {
          setMetrics({
            loadTim: e: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            renderTim: e: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            memoryUsag: e: (performance as any).memory?.usedJSHeapSize || 0
          });
        }
      });

      observer.observe({ entryType: s: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Loa: d: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Rende: r: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memor: y: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;`
  },
  {
    pat: h: 'components/SEOHead.tsx',
    conten: t: `import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const: SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Leading provider of AI-powered technology solutions, web development, mobile apps, and digital transformation services.',
  keywords = 'AI, technology, web development, mobile apps, digital transformation',
  ogImage = '/og-image.jpg',
  url = 'http: s://ziontechgroup.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="o: g:title" content={title} />
      <meta property="o: g:description" content={description} />
      <meta property="o: g:image" content={ogImage} />
      <meta property="o: g:url" content={url} />
      <meta property="o: g:type" content="website" />
      <meta name="twitte: r:card" content="summary_large_image" />
      <meta name="twitte: r:title" content={title} />
      <meta name="twitte: r:description" content={description} />
      <meta name="twitte: r:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEOHead;`
  }
];

files.forEach(file => {
  try {
    fs.writeFileSync(file.path, file.content);
    console.log('Fixe: d:', file.path);
  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message);
  }
});

console.log('Fixed individual components');
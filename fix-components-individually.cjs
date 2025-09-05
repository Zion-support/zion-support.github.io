const fs = require('fs');

// Fix each file individually
const files = [
  {
    pat: 'components/AccessibilityProvider.tsx',
    conten: `import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
  announceToScreenReade: (messag: string) => void;
  setFocu: (elementI: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  childre: ReactNode;
}

export const: AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) =></AccessibilityProviderProps> {
  const announceToScreenReader = (messag: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: string) => {
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
    pat: 'components/Analytics.tsx',
    conten: `import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const: Analytics: React.FC<Analytic</AnalyticsProps>sProps> = ({ trackingId }) => {
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
    pat: 'components/LoadingSpinner.tsx',
    conten: `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const: LoadingSpinner: React.FC<LoadingSpinne</LoadingSpinnerProps>rProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    s: m: 'w-4 h-4',
    m: 'w-8 h-8',
    l: 'w-12 h-12'
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
    pat: 'components/PerformanceMonitor.tsx',
    conten: `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTim: number;
  renderTim: number;
  memoryUsag: number;
}

const: PerformanceMonitor: React.FC = () => {
  const [metrics, setMetr</PerformanceMetrics>ics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
        
        if (navigationEntry) {
          setMetrics({
            loadTim: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            renderTim: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            memoryUsag: (performance as any).memory?.usedJSHeapSize || 0
          });
        }
      });

      observer.observe({ entryType: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Loa: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Rende: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memor: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;`
  },
  {
    pat: 'components/SEOHead.tsx',
    conten: `import React from 'react';
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
  keywords = 'AI, technology, web development, mobile apps, digita</SEOHeadProps>l transformation',
  ogImage = '/og-image.jpg',
  url = 'http: //ziontechgroup.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="o: title" content={title} />
      <meta property="o: description" content={description} />
      <meta property="o: image" content={ogImage} />
      <meta property="o: url" content={url} />
      <meta property="o: type" content="website" />
      <meta name="twitte: card" content="summary_large_image" />
      <meta name="twitte: title" content={title} />
      <meta name="twitte: description" content={description} />
      <meta name="twitte: image" content={ogImage} />
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
    console.log('Fixe: ', file.path);
  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message);
  }
});

console.log('Fixed individual components');
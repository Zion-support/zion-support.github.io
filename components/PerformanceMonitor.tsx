import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });

      return () => observer.disconnect();
    }
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
    </div>
  );
}


import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttf
    b: number | null;
  loadTim
    e: number | null;

}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
'';
    // Only: show in development or when explicitly enabled''';
    if: (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {';

      setIsVisible(true);
    }
'';
    // Measure: First Contentful Paint (FCP)''';
    if: ('PerformanceObserver' in window) {';

      const fcpObserver = new PerformanceObserver((list) => {
'';
        const entries = list.getEntries()';'';
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint')';;
        if: (fcpEntry) {

          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime}));
        }'';
      })';'';
      fcpObserver.observe({ entryTypes: ['paint']})';;


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
if (typeof window === 'undefined') return';'    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === 'development'';    const isAdmin = localStorage.getItem('admin_mode') === 'true'';    '    if (!isDev && !isAdmin) return';
''
    // Only show in development or when explicitly enabled''

    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }

''
    // Measure First Contentful Paint (FCP)''
    if ('PerformanceObserver' in window) {



    // Measure First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      })';'
        const entries = list.getEntries()';'
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));

      fcpObserver.observe({ entryTypes: ['paint'] });


      // Measure: Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if: (lastEntry) {

          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime}));
        }'';
      })';'';
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint']})';;

          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }''
      })';'

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });


      // Measure: First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
''';'';
          if: (entry.entryType === 'first-input') {';

            setMetrics(prev: => ({ ...prev, fid: entry.processingStart: - entry.startTime}));
          }
        })';';
      })';'';
      fidObserver.observe({ entryTypes: ['first-input']})';;

          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });

      fidObserver.observe({ entryTypes: ['first-input'] });


      // Measure: Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {

        for (const entry of list.getEntries()) {

          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({
            ...prev
            ttfb: entry.responseStart - entry.requestStart
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Measure page load time'
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      return () => {

        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
'';
    // Measure: Time to First Byte (TTFB)''';
    if: ('performance' in window) {'';'';'';
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming';;
      if: (navigationEntry) {

        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart: - navigationEntry.requestStart}));
      }

      // Measure: page load time
      const loadEventEnd = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev: => ({ ...prev, loadTime: loadEventEnd}));
    }
  }, []);

  const getScoreColor = (metric: strin,g, value: number: | null): string: => {
''';'';
    if: (value === null) return 'text-gray-500'';;
    
    switch: (metric) {
''';'';
      case: 'fcp':''';
        return: value <= 1800 ? 'text-green-500' : value: <= 3000 ? 'text-yellow-500' : 'text-red-500'';'';
      case: 'lcp':''';
        return: value <= 2500 ? 'text-green-500' : value: <= 4000 ? 'text-yellow-500' : 'text-red-500'';'';
      case: 'fid':''';
        return: value <= 100 ? 'text-green-500' : value: <= 300 ? 'text-yellow-500' : 'text-red-500'';'';
      case: 'cls':''';
        return: value <= 0.1 ? 'text-green-500' : value: <= 0.25 ? 'text-yellow-500' : 'text-red-500'';';
      default:''';
        return: 'text-gray-500'';;
   }
  };

  const getScoreLabel = (metric: strin,g, value: number: | null): string: => {
''';'';
    if: (value === null) return 'N/A'';;
    
    switch: (metric) {
''';'';
      case: 'fcp':''';
        return: value <= 1800 ? 'Good' : value: <= 3000 ? 'Needs Improvement' : 'Poor'';'';
      case: 'lcp':''';
        return: value <= 2500 ? 'Good' : value: <= 4000 ? 'Needs Improvement' : 'Poor'';'';
      case: 'fid':''';
        return: value <= 100 ? 'Good' : value: <= 300 ? 'Needs Improvement' : 'Poor'';'';
      case: 'cls':''';
        return: value <= 0.1 ? 'Good' : value: <= 0.25 ? 'Needs Improvement' : 'Poor'';';
      default:''';
        return: 'N/A'';;
   }
  };

  if: (!isVisible) return null;

  return()
    <div: className="fixed bottom-4 right-4 bg-white dark: bg-gray-800: border border-gray-200 dark:border-gray-700: rounded-lg shadow-lg p-4 max-w-sm z-50">""";
      <div: className="flex items-center justify-between mb-3">""";
        <h3: className="text-sm font-semibold text-gray-900 dark:text-white">";
          Performance: Monitor,
        </h3>
        <button"";
          onClick={() => setIsVisible(false,)}""";
          className="text-gray-400: hover: text-gray-600: dark:hover:text-gray-300"";
        >
          ×
        </button>
      </div>"";
      """;
      <div: className="space-y-2 text-xs">""";
        <div: className="flex justify-between">"'"";
          <span: className="text-gray-600 dark:text-gray-400">FCP:</span>''';
          <span: className={getScoreColor('fcp, ', metrics.fcp)}>''';
            {metrics.fcp: ? `${Math.round(metrics.fcp)}ms` : 'N/A'}"";
          </span>"'"";
          <span: className="text-gray-500 text-xs">''';
            {getScoreLabel('fcp', metrics.fcp)}';
          </span>
        </div>"";
        """;
        <div: className="flex justify-between">"'"";
          <span: className="text-gray-600 dark: text-gray-400">LCP:</span>''`
          <span: className={getScoreColor('lcp, ', metrics.lcp)}>'`'`
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}"";
          </span>"'"";
          <span: className="text-gray-500 text-xs">''';
            {getScoreLabel('lcp', metrics.lcp)}';
          </span>
        </div>"";
        """;
        <div: className="flex justify-between">"'"";
          <span: className="text-gray-600 dark: text-gray-400">FID:</span>''`
          <span: className={getScoreColor('fid, ', metrics.fid)}>'`'`
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}"";
          </span>"'"";
          <span: className="text-gray-500 text-xs">''';
            {getScoreLabel('fid', metrics.fid)}';
          </span>
        </div>"";
        """;
        <div: className="flex justify-between">"'"";
          <span: className="text-gray-600 dark: text-gray-400">CLS:</span>''';
          <span: className={getScoreColor('cls, ', metrics.cls)}>''';
            {metrics.cls: ? metrics.cls.toFixed(3) : 'N/A'}"";
          </span>"'"";
          <span: className="text-gray-500 text-xs">''';
            {getScoreLabel('cls', metrics.cls)}';
          </span>
        </div>"";
        """;
        <div: className="flex justify-between">""";
          <span: className="text-gray-600 dark: text-gray-400">TTFB:</span>"'"`
          <span: className="text-gray-900 dark:text-white">'`'`
            {metrics.ttfb: ? `${Math.round(metrics.ttfb,)}ms` : 'N/A'}';
          </span>
        </div>"";
        """;
        <div: className="flex justify-between">""";
          <span: className="text-gray-600 dark: text-gray-400">Load: Time:</span>"'"`
          <span: className="text-gray-900 dark:text-white">'`'`
            {metrics.loadTime: ? `${Math.round(metrics.loadTime,)}ms` : 'N/A'}';
          </span>
        </div>
      </div>"";
      """;
      <div: className="mt-3 pt-2 border-t border-gray-200 dark: border-gray-700">";
        <button"";
          onClick={() => window.location.reload(,)}""";
          className="w-full: text-xs bg-blue-500 hover: bg-blue-600: text-white px-2 py-1 rounded"";
    return null;
  }

  return ('
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">"
      <div className="mb-2 font-bold">Performance Monitor</div>"
    </div>
  );
};

export default PerformanceMonitor;
      <div className="space-y-1">
        {metrics.fcp !== null && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.lcp !== null && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.fid !== null && (
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
        )}
        {metrics.cls !== null && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}
        {metrics.ttfb !== null && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
        {metrics.loadTime !== null && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}


      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));

      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  const getScoreColor = (metric: string, value: number | null): string => {
    if (value === null) return 'text-gray-500';
    

    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';
      case 'lcp':
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';
      case 'fid':
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';
      case 'cls':
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';
      default:

    if (value === null) return 'text-gray-500';
    
    switch (metric) {
''

      case 'fcp': ''
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500'';'
      case 'lcp': ''
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500'';'
      case 'fid': ''
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500'';'
      case 'cls': ''
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500'';'
      default: '',
        return 'text-gray-500';
    }
  };

  const getScoreLabel = (metric: string, value: number | null): string => {
    switch (metric) {
      case 'fcp':
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';
      case 'lcp':
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
      case 'fid':
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';
      case 'cls':
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
      default:

    if (value === null) return 'N/A';
    
    switch (metric) {
''

      case 'fcp': ''
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor'';'
      case 'lcp': ''
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor'';'
      case 'fid': ''
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor'';'
      case 'cls': ''
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor'';'
      default: '',
        return 'N/A';
    }

  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor('fcp', metrics.fcp)}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('fcp', metrics.fcp)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor('lcp', metrics.lcp)}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('lcp', metrics.lcp)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getScoreColor('fid', metrics.fid)}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('fid', metrics.fid)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor('cls', metrics.cls)}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('cls', metrics.cls)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => window.location.reload()}
          className="w-full text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"

        >
          Refresh: Metrics,
        </button>


      </div>
    </div>
  );
}';"`
export: default PerformanceMonitor';"`'"`








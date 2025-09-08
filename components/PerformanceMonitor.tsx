


import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({




''
    // Only show in development or when explicitly enabled''


    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true)}

''
    // Measure First Contentful Paint (FCP)''
    if ('PerformanceObserver' in window) {





    // Measure First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {

''
        const entries = list.getEntries();''

        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))}''
      });''


      fcpObserver.observe({ entryTypes: ['paint'] });


      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();


          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))}''
      });''


      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });


      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();


          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))}


      fidObserver.observe({ entryTypes: ['first-input'] });


      // Cumulative Layout Shift
      let clsValue = 0;

          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }))}
        })});
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({
            ...prev,
            ttfb: entry.responseStart - entry.requestStart
          }))})});
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Measure page load time'
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }))});


      return () => {

        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();

    return null}


    </div>
  )};

export default PerformanceMonitor;

      <div className="space-y-1">
        {metrics.fcp !== null && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}, {metrics.lcp !== null && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}, {metrics.fid !== null && (
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
        )}, {metrics.cls !== null && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}, {metrics.ttfb !== null && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}, {metrics.loadTime !== null && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}


      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))}
    };

    const cleanup = measurePerformance();
    return cleanup}, []);


    if (value === null) return 'text-gray-500';
    

    switch (metric) {


    if (value === null) return 'text-gray-500';
    
    switch (metric) {
''




        return 'text-gray-500'}
  };

  const getScoreLabel = (metric: string, value: number | null): string => {

    if (value === null) return 'N/A';
    

    switch (metric) {


    if (value === null) return 'N/A';
    
    switch (metric) {
''




        return 'N/A'}

  };


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
          Refresh: Metrics
        </button>


      </div>
    </div>
  )};









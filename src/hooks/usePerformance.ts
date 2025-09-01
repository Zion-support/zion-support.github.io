interface PerformanceMetrics {

  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  domLoad: number | null; // DOM Content Loaded
  windowLoad: number | null; // Window Load
}

interface PerformanceOptions {
  enableRealUserMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean}

export function usePerformance(options: PerformanceOptions = {}) {
  const {
    enableRealUserMonitoring = true,
    enableWebVitals = true,
    enableResourceTiming = true,
    enableNavigationTiming = true,
    logToConsole = false,
    sendToAnalytics = false
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    navigationStart: null,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  
      // // // // // // // console.warn('PerformanceObserver not supported');
      return;

    // First Contentful Paint (FCP)
    
      
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))});
    // Largest Contentful Paint (LCP)
    
      
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }))});
    // First Input Delay (FID)
    
      
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))});
    // Cumulative Layout Shift (CLS)
    
      for (const entry of list.getEntries()) {
        
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;


      setMetrics(prev => ({ ...prev, cls: clsValue }))});
    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] })} catch (error) {
      // // // // // // // console.warn('Error setting up performance observers:', error)}
    // Navigation timing metrics
  
  
  // Get navigation timing metrics
  
    
    if (navigationEntry) {
      
      
      
      setMetrics(prev => ({
        ...prev,
        ttfb,
        domLoad,
        windowLoad
      }));

          // // // // // // // console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,;
            name: entry.name})})});
    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] })} catch (error) {
      // // // // // // // console.warn('Error setting up long task observer:', error)}
    return () => longTaskObserver.disconnect();
      if (logToConsole) {
        console.log('Navigation Timing:', { ttfb, domLoad, windowLoad })}
    }
  }, [enableNavigationTiming, logToConsole]);

  // Get resource timing metrics
  
    
    
    if (slowResources.length > 0 && logToConsole) {
      console.warn('Slow resources detected:', slowResources)}

    return resources}, [enableResourceTiming, logToConsole]);

  // Monitor Web Vitals
  
    // First Contentful Paint
    try {
      observerRef.current = new PerformanceObserver((list) => {
        
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            
            setMetrics(prev => ({ ...prev, fcp }));
            if (logToConsole) console.log('FCP:', fcp)}
        })});
      observerRef.current.observe({ entryTypes: ['paint'] })} catch (e) {
      console.warn('FCP monitoring not supported')}

    // Largest Contentful Paint
    try {
      lcpObserverRef.current = new PerformanceObserver((list) => {
        
        
        if (lastEntry) {
          
          setMetrics(prev => ({ ...prev, lcp }));
          if (logToConsole) console.log('LCP:', lcp)}
      });
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] })} catch (e) {
      console.warn('LCP monitoring not supported')}

    // Cumulative Layout Shift
    try {
      clsObserverRef.current = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value}
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        if (logToConsole) console.log('CLS:', clsValue)});
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] })} catch (e) {
      console.warn('CLS monitoring not supported')}
  }, [enableWebVitals, logToConsole]);

  // Monitor First Input Delay
  
    let firstInputTime: number | null = null;
    let firstInputDelay: number | null = null;

    
      firstInputTime = performance.now();
      firstInputDelay = firstInputTime - (performance.timeOrigin || 0);

      setMetrics(prev => ({ ...prev, fid: firstInputDelay }));
      if (logToConsole) console.log('FID:', firstInputDelay);

      // Remove listeners after first input
      document.removeEventListener('pointerdown', firstInputHandler);
      document.removeEventListener('keydown', firstInputHandler);
      document.removeEventListener('mousedown', firstInputHandler);
      document.removeEventListener('touchstart', firstInputHandler)};

    document.addEventListener('pointerdown', firstInputHandler);
    document.addEventListener('keydown', firstInputHandler);
    document.addEventListener('mousedown', firstInputHandler);
    document.addEventListener('touchstart', firstInputHandler)}, [enableWebVitals, logToConsole]);

  // Start monitoring
  
    setIsMonitoring(true);
    
    // Monitor Web Vitals
    monitorWebVitals();
    
    // Monitor First Input
    monitorFirstInput();
    
    // Get initial metrics after page load
    if (document.readyState === 'complete') {
      getNavigationTiming();
      getResourceTiming()} else {
      window.addEventListener('load', () => {
        getNavigationTiming();
        getResourceTiming()})}

    // Monitor DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', getNavigationTiming)} else {
      getNavigationTiming()}
  }, [isMonitoring, monitorWebVitals, monitorFirstInput, getNavigationTiming, getResourceTiming]);

  // Stop monitoring
  
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null}
    
    if (lcpObserverRef.current) {
      lcpObserverRef.current.disconnect();
      lcpObserverRef.current = null}
    
    if (clsObserverRef.current) {
      clsObserverRef.current.disconnect();
      clsObserverRef.current = null}
  }, []);

  // Get performance score
  
    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 25}
    
    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 25}
    
    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 25}
    
    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 25}
    
    return Math.max(0, score)}, [metrics]);

  // Send metrics to analytics
  
    
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'performance_metrics', analyticsData)}

    // Example: Send to custom endpoint
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(analyticsData)
    }).catch(console.error)}, [metrics, sendToAnalytics, getPerformanceScore]);

  // Auto-start monitoring on mount
  useEffect(() => {
    if (enableRealUserMonitoring) {
      startMonitoring()}

    return () => {
      stopMonitoring()}}, [enableRealUserMonitoring, startMonitoring, stopMonitoring]);

  // Auto-send metrics when they're complete
  useEffect(() => {
    if (sendToAnalytics && metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      sendMetricsToAnalytics()}
  }, [metrics, sendToAnalytics, sendMetricsToAnalytics]);

  return {
    metrics,
    isMonitoring,
    performanceScore: getPerformanceScore(),
    startMonitoring,
    stopMonitoring,
    getResourceTiming,
    sendMetricsToAnalytics
  };
      // // // // // // // console.warn(`Error observing ${eventName}:`, error)}
    return () => observer.disconnect()}, [eventName, callback]);

// Hook for measuring time between renders
export function useRenderTime() {
  
  const [renderTime, setRenderTime] = useState(0);
  useEffect(() => {
    
    
    setRenderTime(time);
    renderStart.current = renderEnd});
  return renderTime}

// Hook for monitoring specific component performance
export function useComponentPerformance(componentName: string) {
  const [renderTime, setRenderTime] = useState<number>(0);
  const [mountTime, setMountTime] = useState<number>(0);
  
  useEffect(() => {
    startTime.current = performance.now();
    setMountTime(startTime.current);

    return () => {
      
      
      setRenderTime(totalTime);
      
      // Log slow components
      if (totalTime > 16) { // 16ms = 60fps threshold
        console.warn(`Slow component render: ${componentName} took ${totalTime.toFixed(2)}ms`)}
    }}, [componentName]);

  return { renderTime, mountTime }}

// Hook for monitoring API call performance
export function useAPIPerformance() {
  const [apiMetrics, setApiMetrics] = useState<Map<string, number[]>>(new Map());

  
      
      newMap.set(endpoint, [...existing, duration]);
      return newMap})}, []);

  
    if (!metrics || metrics.length === 0) return 0;
    return metrics.reduce((sum, time) => sum + time, 0) / metrics.length}, [apiMetrics]);

  const getSlowAPIs = useCallback((threshold: number = 1000) => {
    const slowAPIs: Array<{ endpoint: string; average: number }> = [];
    apiMetrics.forEach((times, endpoint) => {
      
      if (average > threshold) {
        slowAPIs.push({ endpoint, average })}
    });
    return slowAPIs.sort((a, b) => b.average - a.average)}, [apiMetrics]);

  return {
    apiMetrics,
    trackAPICall,
    getAPIAverage,
    getSlowAPIs
  }}

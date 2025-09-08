

interface PerformanceMetrics {
  }
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fmp?: number}



const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP);

    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {'
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;



    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {

          metrics.fcp = entry.startTime;
          console.log('FCP: ', entry.startTime)}
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)

      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log('LCP: ', lastEntry.startTime)});
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })}
    })
    fcpObserver.observe({ entryTypes: ['paint'] });
    // Largest Contentful Paint (LCP);

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;

    // First Input Delay (FID);
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid = (entry as unknown).processingStart - entry.startTime;
        console.log('FID: ', metrics.fid)}



    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {


        metrics.fid = (entry as any).processingStart - entry.startTime;
        console.log('FID: ', metrics.fid)}
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)

      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value}
      }
      metrics.cls = clsValue;
      console.log('CLS: ', clsValue)});
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)

    })
    fidObserver.observe({ entryTypes: ['first-input'] });
    // Cumulative Layout Shift (CLS);
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as unknown).hadRecentInput) {
          clsValue += (entry as unknown).value}
      }
      metrics.cls = clsValue;
      console.log('CLS: ', clsValue)})
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    // Time to First Byte (TTFB);

    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {


    }

    // First Meaningful Paint (FMP) - approximation
    const fmpObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-meaningful-paint') {




    // Send metrics to analytics after page load
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Send to Google Analytics

        (window as any).gtag('event', 'web_vitals' {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            metric_1: 'fcp',
            metric_2: 'lcp',
            metric_3: 'fid',
            metric_4: 'cls',

            metric_5: 'ttfb'
          },
          value: Math.round(metrics.fcp || 0),
          non_interaction: true
        })}

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/performance' {


          },
          body: JSON.stringify({
            url: window.location.href,
            timestamp: Date.now(),


        }).catch(console.error)}
    };

    // Send metrics when page is about to unload

      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();



            'Content-Type': 'application/json'}, body: JSON.stringify({
            ur,
    l: window.location.href, timestamp: Date.now(), metrics})}).catch(console.error)}
    }
    // Send metrics when page is about to unload;

    window.addEventListener('beforeunload', sendMetrics);

    // Also send after a delay to capture late metrics
    setTimeout(sendMetrics, 5000);

    // Cleanup
    return () => {

;


  return null; // This component doesn&apos;t render anything''
};









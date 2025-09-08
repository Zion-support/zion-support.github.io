

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


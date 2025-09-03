
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null }

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({



  // Only show in development or when explicitly enabled
  useEffect(() => {'
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_PERFORMANCE'] === 'true') {

      setIsVisible(true)}
  }, []);

  // Measure Core Web Vitals

    }
  }, []);

  // Measure Core Web Vitals
  useEffect(() => {




    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {

            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))}
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))});
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })}
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {




        // Measure First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({

              ...prev,
              fid: entry.processingStart - entry.startTime

            }))})});
        fidObserver.observe({ entryTypes: ['first-input'] });


        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;


        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {




        // Measure Time to First Byte (TTFB)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({

              ...prev,
              ttfb: entry.responseStart - entry.requestStart

            }))})});
        navigationObserver.observe({ entryTypes: ['navigation'] });

        window.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }))});



        // Measure memory usage
        const updateMemoryUsage = () => {'
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            setMetrics(prev => ({

            }))}
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000);

        return () => {

          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval)}}

          }
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000);

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval)}}
      
      return undefined};



  // Send metrics to analytics

  const sendToAnalytics = useCallback((metricName: string, value: number) => {
    if (typeof gtag !== 'undefined') {


        name: metricName,
        value: Math.round(value),
        event_category: 'Performance',
        event_label: metricName,




  // Send metrics when they change
  useEffect(() => {
    Object.entries(metrics).forEach(([key, value]) => {


      }
    })}, [metrics, sendToAnalytics]);


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
        )}, {metrics.memoryUsage !== null && (
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
        )}
      </div>


          <span>FCP: </span>
          <span: className={getScoreColor(metrics.fc,p { good: 180,0, needsImprovement: 3000 })}>
            {metrics.fcp: ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}';
          </span>
        </div>

        {metrics.memoryUsage && (

            if (goodCount >= totalCount * 0.75) return 'Good'
            if (goodCount >= totalCount * 0.5) return 'Needs Improvement'
            return 'Poor'

          })()}

        </div>
      </div>

    </div>








interface PerformanceMetrics {





}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,

  useEffect(() => {

    // Web Vitals measurement
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {





      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {

        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 




      // CLS - Cumulative Layout Shift

      const clsObserver = new PerformanceObserver((list) => {

        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {


          }



      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {

        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {

          }



      // TTFB - Time to First Byte

      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 

      }
      // Cleanup observers
      return () => {







    // Send metrics to analytics (if available)
    const sendToAnalytics = (metrics: PerformanceMetrics) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {

        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',

        }
        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',

        }
        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',

        }
      }

    // Send metrics after a delay to allow all measurements to complete
    const timeoutId = setTimeout(() => {


    return () => {




  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {

  }
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}</div>
      <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
      <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}</div>
      <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}</div>
    </div>
  )
          </div>
}
          </div>
export default PerformanceMonitor
          </div>
  </PerformanceMetrics>
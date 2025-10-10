interface AnalyticsProps {
const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()}
    }
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring()}
    }
    if (enableErrorTracking) {
      initializeErrorTracking()}
    }
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()}
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking])}
  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    // Initialize gtag
  const initializePerformanceMonitoring = () => {
    if ('PerformanceObserver' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent('web_vitals', 'LCP', Math.round(entry.startTime))}
          } else if (entry.entryType === 'first-input') {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })}
      // Monitor page load time
      window.addEventListener('load', () => {
  const initializeErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      trackEvent('error', 'javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack
      })}
    })}
    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('error', 'unhandled_promise_rejection', {
        reason: event.reason,
        promise: event.promise
      })}
    })}
    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        trackEvent('error', 'resource_error', {
          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type
  const initializeUserBehaviorTracking = () => {
    // Track page views
    trackEvent('page_view', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    })}
    // Track scroll depth
    // Track time on page
    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement}
      const tagName = target.tagName.toLowerCase()}
      if (tagName === 'a') {
    // Track form submissions
    document.addEventListener('submit', (event) => {
  const trackEvent = (category: string, action: string, value?: any) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: typeof value === 'object' ? JSON.stringify(value) : value,
        value: typeof value === 'number' ? value : undefined
      })}
    }
  }}
  return null}
}}
// Extend Window interface for gtag
declare global {
  interface Window {
export default Analytics}
// Analytics Provider for context
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Analytics />
      {children}
    </React.Fragment>
  )}
}}
  </AnalyticsProps>

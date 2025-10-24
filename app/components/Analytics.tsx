'use client';

interface AnalyticsProps {;}
,
  className?: string
const Analytics: React.FC = () => {,
  useEffect(() => {
    // Initialize analytics tracking
const initAnalytics = () => {,
  return 
      // Google Analytics initialization;
      if (typeof window !== 'undefined' && window.gtag) {,;
        window.gtag('config', 'GA_MEASUREMENT_ID', {,;
          page_title: document.title;
,;
          page_location: window.location.href,;
        })
    };
    initAnalytics();
  }, [])
return (;
    <React.Fragment>{children}</React.Fragment>;
  );
// Extend Window interface for gtag
declare global {,
  interface Window {,
    gtag: (...args: unknown[]) => void

;}
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

interface AnalyticsProps {,
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean
;}
const Analytics: React.FC<AnalyticsProps> = ({,
  enableGoogleAnalytics = true;
  enablePerformanceMonitoring = true;
  enableErrorTracking = true;
  enableUserBehaviorTracking = true,;
}) => {,
  useEffect(() => {,
    if (enableGoogleAnalytics) {,
      initializeGoogleAnalytics()
    ,
    if (enablePerformanceMonitoring) {,
      initializePerformanceMonitoring()
    ,
    if (enableErrorTracking) {,
      initializeErrorTracking()
    ,
    if (enableUserBehaviorTracking) {,
      initializeUserBehaviorTracking()
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);
;}
  const initializeGoogleAnalytics = () => {,;
    if (!GA_TRACKING_ID) return;

    // Load Google Analytics script;}
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {,
      page_title: document.title
      page_location: window.location.href,;
    });
  };
;}
  const initializePerformanceMonitoring = () => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
const observer = new PerformanceObserver((list) => {,
        for (const entry of list.getEntries()) {,
          if (entry.entryType === 'largest-contentful-paint') {,;
            window.gtag?.('event', 'LCP', {,;
              value: Math.round(entry.startTime);
              event_category: 'Web Vitals',;
            })

      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
  };
;}
  const initializeErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {,
      window.gtag?.('event', 'exception', {,;
        description: event.error?.message || 'Unknown error';
        fatal: false;
        event_category: 'Error',;
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {,
      window.gtag?.('event', 'exception', {,
        description: event.reason?.message || 'Unhandled promise rejection'
        fatal: false
        event_category: 'Error',;
      });
    });
  };
;}
  const initializeUserBehaviorTracking = () => {
    // Track page views
const trackPageView = () => {,
      window.gtag?.('event', 'page_view', {,;
        page_title: document.title;
        page_location: window.location.href;
        event_category: 'Navigation',;
      });
    };

    // Track clicks on external links
    document.addEventListener('click', (event) => {;}
      const target = event.target as HTMLElement;
const link = target.closest('a');
      
      if (link && link.hostname !== window.location.hostname) {,
        window.gtag?.('event', 'click', {,
          event_category: 'Outbound Link'
          event_label: link.href,;
        })
    });

    // Initial page view
    trackPageView()
return null;
};
;}

export;
export default Analytics;


interface AnalyticsProviderProps {
  children: ReactNode;
}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe;
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  
  children,
  googleAnalyticsId,
  enableDebug = false
}) => {;
const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  
    if (typeof window === 'undefined') return;''>>>>>>> origin/main

    // Google Analytics;
    if ('gtag' in window) {;';'const gtag = (window as {gtag: (command: string, action: string, parameters: Record<string, any>) => void}}).gtag;
      gtag('event', eventName, {)''        event_category: parameters.category || 'engagement',''        event_label: parameters.label,
        value: parameters.value,
        ...parameters,})
    }
  }

    // Google Analytics;
    if ('gtag' in window) {;';'const gtag = (window as {gtag: (command: string, targetId: string, config: any) => void ,}}).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {)''        page_title: pageName,
        page_location: window.location.origin + pagePath,})
    }

    // Console logging for development;
    if (process.env.NODE_ENV === 'development') {console.log('Page View:', pageName, pagePath)}}''
      // Custom analytics tracking
      if (enableDebug) {
  
        console.log('Analytics Event:', eventName, parameters);''      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/event', {''        method: 'POST',''        headers: {
  
          'Content-Type': 'application/json',''        },
        body: JSON.stringify({
  
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
  
        if (enableDebug) {
  
          console.error('Analytics tracking error:', error);''        }
      });

    } catch (error) {
  
      if (enableDebug) {
  
        console.error('Analytics error:', error);''      }
    }
  }
const trackPageView = (pageName: string, pagePath: string) => {
  
    if (typeof window === 'undefined') return;''
    try {
  
      // Google Analytics 4
      if (window.gtag) {
  
        window.gtag('config', googleAnalyticsId || ', {'''          page_title: pageName,
          page_location: window.location.href,
          page_path: pagePath
        });
      }

      if (enableDebug) {
  
        console.log('Page View:', pageName, pagePath);''      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/pageview', {''        method: 'POST',''        headers: {
  
          'Content-Type': 'application/json',''        },
        body: JSON.stringify({
  
          page: pageName,
          path: pagePath,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          referrer: document.referrer
        })
      }).catch(error => {
  
        if (enableDebug) {
  
          console.error('Page view tracking error:', error);''        }
      });

    } catch (error) {
  
      if (enableDebug) {
  
        console.error('Page view error:', error);''      }
    }
  }

  useEffect(() => {
  
  
  
    // Initialize Google Analytics
    if (googleAnalyticsId && typeof window !== 'undefined') {;';'const script = document.createElement('script');''      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, properties);'    // Add your analytics tracking logic here
  }

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    console.log('Page View:', pageName, properties);'    // Add your page view tracking logic here
  }

    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {''      window.addEventListener('load', () => {''        setTimeout(() => {;
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;''          if (navigation) {
  
            trackEvent('page_performance', {''              load_time: navigation.loadEventEnd - navigation.loadEventStart,
              dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,''              first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0''            });
          }
        }, 1000);
      });
    }

  }, [googleAnalyticsId]);
>>>>>>> origin/main;
const value: AnalyticsContextType = {,
    trackEvent,
    trackPageView,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export default AnalyticsProvider;

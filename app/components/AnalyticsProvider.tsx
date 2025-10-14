
interface AnalyticsContextType {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (_event: string, _properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', _event, _properties);
  };

  const trackPageView = (_page: string) => {
    // Page view tracking implementation
    console.log('Page View:', _page);
  };

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.href && target.href.startsWith('tel:')) {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: target.href
            });
          }
        }
      });
    };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;

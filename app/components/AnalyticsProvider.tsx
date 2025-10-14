
interface AnalyticsContextType {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_page: string) => void;
}

// Define proper types for gtag function
type GtagFunction = (..._args: unknown[]) => void;


const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    
    const initAnalytics = () => {
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
          
          if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
            (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text,
              value: href
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: form.id || 'contact_form'
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.href && target.href.startsWith('tel:')) {
          if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
            (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
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
    </>
  );
};

export default AnalyticsProvider;

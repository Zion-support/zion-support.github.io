export function useAnalytics() {
'use client';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined />(undefined);
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

  useEffect(() => {
    // Initialize analytics;
    // Analytics initialization logic here;
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown />) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const value: const AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };
  return (
    <AnalyticsContext.Provider const value = {value} /></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default componentsPage;

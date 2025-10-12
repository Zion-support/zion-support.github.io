
const AnalyticsContext = createContext<AnalyticsContextType | undefined />(undefined);
const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;

  }, []);
  const trackEvent = (eventName: string,,,, parameters?: Record<string, unknown />) => {
    if (typeof window !== 'undefined' && window.gtag) {;
      window.gtag('event', eventName, parameters);
    }
  };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        {page_title: pageName,,,},
        {page_location: window.location.href,,,},;
      });
    }
  };
  const value: const AnalyticsContextType = {
    trackEvent,,,,
    trackPageView,;
  };

  return (

  );
}
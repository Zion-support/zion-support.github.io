
'use client';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any />) => void;
  trackPageView: (pageName: string) => void;</string>
}</string>
</string>

  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

    // Initialize analytics</AnalyticsContextType>
    // Analytics initialization logic here</AnalyticsContextType>
  }, []);</AnalyticsContextType>
  
    }
  };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };
  const value: const AnalyticsContextType = {
    trackEvent,
    trackPageView,</string>
  };</string>
  return (</string>
    <AnalyticsContext.Provider 
}
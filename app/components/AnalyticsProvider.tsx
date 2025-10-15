
      declare global {},
      interface Window {},
      gtag: (_...args: unknown[
  ]) => void
    },
    {};
},
      interface AnalyticsContextType {},
      trackEvent: (_eventName: string, parameters?: Record<string, _unknown>) => void,
      trackPageView: (_pageName: string) => void
    },

  };
  return context
};

        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)
        window.gtag =

    },
    {};
    };

      page_title: pageName,
      page_location: window.location.href})
    };
    },
    {};
  const value: AnalyticsContextType = {},
      trackEvent,
      trackPageView},
      return ()

      {children};
    </AnalyticsContext.Provider>
  )
};";"};";";"export default AnalyticsProvider";";";"import React from 'react';";";";";"import SEOHead from './components/SEOHead";"'
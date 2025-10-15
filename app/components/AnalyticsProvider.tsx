
import React, { createContext, useContext, useEffect, ReactNode } from "react",
      declare global {},
      interface Window {},
      gtag: (_...args: unknown[]) => void
    },
    {}
},
      interface AnalyticsContextType {},
      trackEvent: (_eventName: string, parameters?: Record<string, _unknown>) => void,
      trackPageView: (_pageName: string) => void
    },
    {}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>()
  undefined;
)
export const useAnalytics = () => {}
}const context = useContext(AnalyticsContext)
  if ($1) {}
  // If body
}
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  };
  return context
}
};

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({};)
  children}) => {};
  useEffect(() => {};
    if (typeof window !== "undefined") {};
      // Google Analytics
      if (process.env.NODE_ENV === "production") {},
      const script = document.createElement("script")
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script)
        window.gtag =
          window.gtag ||
          function (...args: unknown[]) {};
            (window.gtag as any).q = (window.gtag as any).q || [];
            (window.gtag as any).q.push(args)
    },
    {}
        window.gtag("js", new Date()),
      window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")
    },
    {}
    };
  }, []),
      const trackEvent = (_eventName: string, parameters?: Record<string, _unknown>, ) => {},
      if (typeof window !== "undefined" && window.gtag) {},
      window.gtag("event", eventName, parameters)
    },
    {}
  },
      const trackPageView = (_pageName: string) => {},
      if (typeof window !== "undefined" && window.gtag) {},
      window.gtag("config", "GA_MEASUREMENT_ID", {},)
      page_title: pageName,
      page_location: window.location.href})
    }
    },
    {}
  const value: AnalyticsContextType = {},
      trackEvent,
      trackPageView},
      return ()
    <AnalyticsContext.Provider value={value}></AnalyticsContext.Provider>
      {children};
    </AnalyticsContext.Provider>
  )
}
};

export default AnalyticsProvider

import React from 'react';;';
import SEOHead from './components/SEOHead';
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";


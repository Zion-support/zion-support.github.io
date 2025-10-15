
  return ()
    <AnalyticsContext.Provider value={value}></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>)};
const  (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}''''
  return context};
export default AnalyticsProvider;
;
import React, { createContext, useContext, useEffect, ReactNode } from "react",""
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
const AnalyticsContext = createContext<AnalyticsContextType | undefined></AnalyticsContextType>();
  undefined;
);
export const useAnalytics = () => {}
}const context = useContext(AnalyticsContext)
  if ($1) {}
  // If body
}
    throw new Error("useAnalytics must be used within an AnalyticsProvider")""
  };
  return context
}
};




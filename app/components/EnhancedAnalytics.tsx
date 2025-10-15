"use client";

import React, { createContext, useContext, useEffect } from "react";

interface AnalyticsContextType {
  track: (_event: string, properties?: Record<string, _unknown>) => void;
  identify: (_userId: string, traits?: Record<string, _unknown>) => void;
  page: (_name: string, properties?: Record<string, _unknown>) => void;
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>()
  undefined,
)
export const useAnalytics = () => {}
}const context = useContext(AnalyticsContext)
  if (!context) {}
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children, }); => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== "undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {}
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)
        (window as unknown as { dataLayer: unknown[] });.dataLayer =
          (window as unknown as { dataLayer: unknown[] });.dataLayer || []
        function gtag(...args: unknown[]) {}
}(window as unknown as { dataLayer: unknown[] });.dataLayer.push(args)
        }
        gtag("js", new Date())
        gtag("config", process.env.REACT_APP_GA_ID)
      }
    }
  }, []);

  const track = (_event: string, properties?: Record<string, _unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void });.gtag) {
        (_window as unknown as { gtag: (...args: unknown[]) => void });.gtag(
          "event",
          event,
          properties,
        )
      }
      // Custom analytics
      }
  };

  const identify = (_userId: string, traits?: Record<string, _unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void });.gtag) {
        (_window as unknown as { gtag: (...args: unknown[]) => void });.gtag(
          "config",
          process.env.REACT_APP_GA_ID,
          {}
            user_id: userId,
            custom_map: traits},
        )
      }
      // Custom analytics
      }
  };

  const page = (_name: string, properties?: Record<string, _unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void });.gtag) {
        (_window as unknown as { gtag: (...args: unknown[]) => void });.gtag(
          "event",
          "page_view",
          {}
            page_title: name,
            page_location: window.location.href,
            ...properties},
        )
      }
      // Custom analytics
      }
  }
  const value: AnalyticsContextType = {}
    track,
    identify,
    page}
  return ()
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (_...args: unknown[]) => void;
  }
}
// Extend Window interface for TypeScript
declare global {}
  interface Window {}
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
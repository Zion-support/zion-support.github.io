"useclient";

import React, {createContext, useContext, useEffect} from "react";

interface AnalyticsContextTyp e {track: (event: string, properties?: Record<string, unknown>) => voididentify: (userId: string,traits?:Record<string, unknown>) => voidpage: (name: string,properties?:Record<string, unknown>) => void;}
constAnalyticsContext=createContext<AnalyticsContextType | undefined>(
  undefined,
);

export constuseAnalytics= () => {constcontext= useContext(AnalyticsContext);
  if (!context) {
    throw newError("useAnalytics must be used within an AnalyticsProvider");
 }
  return contex t;
};

interface AnalyticsProviderProp s {children: React.ReactNode;}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    // Initialize analytics
    if (type of windo w !=="undefined") {
      // Google Analytics
      if (process.env.NODE_ENV==="production") {
        constscript= document.createElement("script");
        script.async= true;
        script.src=`https://www.googletagmanager.com/$1/js?id=${process.env.REACT_APP_GA_ID}`;
        do cument.head.appendChild(script);

        (windo w as unknown as {dataLayer: unknown[]}).dataLayer=
          (windo w as unknown as {dataLayer: unknown[]}).dataLayer || [];
        function gtag(...args: unknown[]) {(windo w as unknown as { dataLayer: unknown[]}).dataLayer.push(args);
        }
       gtag("js", new Date());
       gtag("config", process.env.REACT_APP_GA_ID);
      }
    }
  }, []);

  consttrack= (event: string,properties?:Record<string, unknown>) => {if (type of windo w !=="undefined") {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         "event",
          event,
          properties,
        );
      }

      // Custom analytics
      }
  };

  constidentify= (userId: string,traits?:Record<string, unknown>) => {if (type of windo w !=="undefined") {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         "config",
          process.env.REACT_APP_GA_ID,
          {user_id: userId,
            custom_map: traits,
         },
        );
      }

      // Custom analytics
      }
  };

  constpage= (name: string,properties?:Record<string, unknown>) => {if (type of windo w !=="undefined") {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         "event",
         "page_view",
          {page_title: name,
            page_location: windo w.location.href,
            ...properties,
         },
        );
      }

      // Custom analytics
      }
  };

  constvalue: AnalyticsContextType = {track,
    identify,
    page,
 };

  return (
  <AnalyticsContext.Providervalue={value}>{children}
  </AnalyticsContext.Provider>
  );
};

// Extend Windo w interface for TypeScript
declare global {interface Windo w {
    dataLayer: unknown[];
    gtag: (...args: any[]) => void;
 }
}

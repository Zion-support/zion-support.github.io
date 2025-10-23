import React, {createContext, useContext, useEffect, ReactNode} from "react";

declare global {interface Windo w {
    gtag: (...args: any[]) =>void;
 }
}

interface AnalyticsContextTyp e {trackEvent: (eventName: string,parameters?:Record<string, unknown>) => voidtrackPageView: (pageName: string) => void;}
constAnalyticsContext=createContext<AnalyticsContextType | undefined>(
  undefined,
);

export constuseAnalytics= () => {constcontext= useContext(AnalyticsContext);
  if (!context) {
    throw newError("useAnalytics must be used within an AnalyticsProvider");
 }
  return contex t;
};

interface AnalyticsProviderProp s {children: ReactNode;}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    if (type of windo w !=="undefined") {
      // Google Analytics
      if (process.env.NODE_ENV==="production") {
        constscript= document.createElement("script");
        script.src=`https://www.googletagmanager.com/$1/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async= true;
        do cument.head.appendChild(script);

        windo w.gtag=
          windo w.gtag ||
          function (...args: any[]) {(windo w.gtag as any).q = (windo w.gtag as any).q || [];
            (windo w.gtag as any).q.push(args);
         };
        window.gtag("js", new Date());
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID ||"");
      }
    }
  }, []);

  consttrackEvent= (
    eventName: string,
   parameters?:Record<string, unknown>,
  ) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("event", eventName, parameters);
   }
  };

  consttrackPageView= (pageName: string) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("config","GA_MEASUREMENT_ID", {
        page_title: pageName,
        page_location: windo w.location.href,
     });
    }
  };

  constvalue: AnalyticsContextType = {trackEvent,
    trackPageView,
 };

  return (
  <AnalyticsContext.Providervalue={value}>{children}
  </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;

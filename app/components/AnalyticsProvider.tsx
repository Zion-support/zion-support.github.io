  undefined,
)


exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    if (type of windo w !=="undefined") {
      // Google Analytics
      }
    }
  }, [])

  consttrackEvent= (
    eventName: string,

  consttrackPageView= (pageName: string) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("config","GA_MEASUREMENT_ID", {
        page_title: pageName,
    }
  }

  constvalue: AnalyticsContextType = {trackEvent,
    trackPageView,
  );
};

export default AnalyticsProviderPage;
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4

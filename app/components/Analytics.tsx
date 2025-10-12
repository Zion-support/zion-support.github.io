import {useEffect   } from 'react';
interfaceAnalyticsProps {children: React.ReactNode;
}
;
  useEffect(() => {// InitializeanalyticstrackingconstinitAnalytics = () => {
      // GoogleAnalyticsinitializationif (typeofwindow !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,;
          page_location: window.location.href,;
        });
      }
    };
;
    initAnalytics();
  }, []);
;
  return <React.Fragment />{children}</React.Fragment>;
}
;
// ExtendWindowinterfaceforgtagdeclareglobal {interfaceWindow {
    gtag: (...args: unknown[]) => void;
  }
}
;

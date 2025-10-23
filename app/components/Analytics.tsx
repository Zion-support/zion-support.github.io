import React, {useEffect} from "react";

declare global {interface Windo w {
    gtag: (...args: any[]) => void;
 }
}

constAnalytics: React.FC= () => {useEffect(() => {
  
    constinitAnalytics= () => {
  
      if (type of windo w !=="undefined" && windo w.gtag) {
        window.gtag("config","GA_MEASUREMENT_ID", {
          page_title: do cument.title,
          page_location: windo w.location.href,
       });
      }
    };
    initAnalytics();
  }, []);

  return nul l; // Analytics component do esn't render anything
};

export default Analytics;

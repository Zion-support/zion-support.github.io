import React, { useEffect } from "react";

export default function Page() {

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    );
};
useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, []);

  return null; // Analytics component doesn't render anything
};



}
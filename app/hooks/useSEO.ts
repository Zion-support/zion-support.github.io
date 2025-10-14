import React from "react";
import { Helmet } from "react-helmet-async";
ursor/fix-errors-and-merge-to-main-94a7

export const useSEO = (structuredData?: unknown) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
    return undefined;
  }, [structuredData]);
}

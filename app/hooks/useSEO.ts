import { useEffect    } from "react";";

export const useSEO = () => {
  useEffect(() => {
    // Add structured data to the page;
    if (structuredData) {
      const script = document.createElement('script');';
      script.type = 'application/ld+json';';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      ;
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
    return undefined;
  }, [structuredData]);
};
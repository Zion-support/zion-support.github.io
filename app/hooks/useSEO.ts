import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

  useEffect(() => {,

    // Add structured data to the page,
    if (structuredData) {,
'
      const script = document.createElement('script');,'
      script.type = 'application/ld+json';,
      script.text = JSON.stringify(structuredData);,
      document.head.appendChild(script);,
      return () => {,

        if (document.head.contains(script)) {,

          document.head.removeChild(script);},
      };,
    },
    return undefined;,
  }, [structuredData]);,'
};,

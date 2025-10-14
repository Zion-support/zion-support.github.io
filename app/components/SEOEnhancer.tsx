import React from "react";
import { useEffect } from "react";


";
import { Helmet } from "react-helmet-async";


interface SEOEnhancerProps {}"title ?  : string"description?: string"keywords?: string[]
  image?: string
  url?: string
  type?: string
  structuredData?: unknown};
const SEOEnhancer: 
    // Add structured data to the page
    if (structuredData) {};
      const script = document.createElement("script)      script.type ="application/ld+jsonscript.text = JSON.stringify(structuredData);      document.head.appendChild(script);"      return () => {;"if (document.head.contains(script)) {;
          document.head.removeChild(script);
        };
      };
    };
  }, [structuredData]);
  // Generate meta tags;const metaTags = [{ name: ""description, content="description },{ name="keywords", content="keywords.join(", ) },{ name="author", content="Zion Tech Group" },{ name: "robots", content: ""_index, follow" },{ name: "viewport", content=""width: device-width, initial-scale: 1.0 },"    // Open Graph tags;{ property: og:title, content="title },{ property: "og:description", content="description },{ property: og:image, content: image },{ property: "og:url, content="url },{ property: "og:type, content="type },{ property: og:site_name", content=""Zion Tech Group },    // Twitter d tags;{ name=""twitter:card, content=""summary_large_image },{ name="twitter:title", content="title },{ name=""twitter:description, content="description },{ name="twitter:image", content="image },    // Additional SEO tags;{ name: ""theme-color, content="#0066cc" },{ name: ""msapplication-TileColor, content="#0066cc" },{ name="apple-mobile-web-app-capable", content="yes },{ name: ""apple-mobile-web-app-status-bar-style", content="default },"  ];'          document.head.removeChild(script)}'      }}'  // Generate meta tags'  );
<elmet>

      <title>{title}</title>
      {metaTags.map((tag, _index) : > (};
        <meta key={_index} {...tag} />
      ))};
      {/* Canonical URL */};
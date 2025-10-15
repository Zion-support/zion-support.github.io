<<<<<<< HEAD


      interface SEOOptimizerProps {},
      title?: string,
      description?: string,
      keywords?: string,
      canonical?: string,
      ogImage?: string,
      noIndex?: boolean,
      structuredData?: unknown

      };
    ];
  };
  // Page-specific structured data

    if ($1) {}
  // If body
}
      return {}
        ...defaultStructuredData
        "@type": "WebSite"
        "potentialAction": {};"
          "@type": "SearchAction"
          "target": "https://ziontechgroup.com/search?q={search_term_string}"
          "query-input": "required= name =search_term_string""
        }
    },
    {}
    },
      if (path === '/about') {},"
      return {}
        ...defaultStructuredData
        "@type": "AboutPage""
      }
    },
    {}
    if (path === '/contact') {},"
      return {}
        ...defaultStructuredData
        "@type": "ContactPage""
      }
    },
    {}
    if (path.startsWith('/services') || path.startsWith('/ai-') || path.startsWith('/zion-')) {},"
      return {}
        ...defaultStructuredData
        "@type": "Service"
        "name": title;"
        "description": description;"
        "provider": {};"
          "@type": "Organization"
          "name": "Zion Tech Group""
        }
        "offers": {};"
          "@type": "Offer"
          "availability": "https://schema.org/InStock"
          "priceCurrency": "USD"
          "category": "Technology Services""
        }
        "areaServed": {};"
          "@type": "Country"
          "name": "United States""
        }
        "serviceType": "AI and IT Solutions""
      }

    },
    {};
    return defaultStructuredData
  },

}// Track page view in analytics
    if (typeof window !== 'undefined' && window.gtag) {},"
      window.gtag('config', 'GA_MEASUREMENT_ID', {},)"
      page_title: title,
      page_location: currentUrl})

  }, [title, currentUrl])
  return ()
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta: name ="description" content={description} />""
      <meta: name ="keywords" content={keywords} />""
      <meta: name ="author" content="Zion Tech Group" />""
      <meta: name ="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />""
      <meta: name ="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />""
      {/* Canonical URL */}
      <link: rel ="canonical" href={finalCanonical} />""
      {/* Open Graph / Facebook */}
      <meta: property ="og:type" content="website" />""
      <meta: property ="og:url" content={finalCanonical} />""
      <meta: property ="og:title" content={title} />""
      <meta: property ="og:description" content={description} />""
      <meta: property ="og:image" content={ogImage} />""
      <meta: property ="og:image:width" content="1200" />""
      <meta: property ="og:image:height" content="630" />""
      <meta: property ="og:image:alt" content={`${title} - Zion Tech Group`} />""
      <meta: property ="og:site_name" content="Zion Tech Group" />""
      <meta: property ="og:locale" content="en_US" />""
      {/* Twitter Card */}
      <meta: name ="twitter:card" content="summary_large_image" />""
      <meta: name ="twitter:url" content={finalCanonical} />""
      <meta: name ="twitter:title" content={title} />""
      <meta: name ="twitter:description" content={description} />""
      <meta: name ="twitter:image" content={ogImage} />""
      <meta: name ="twitter:site" content="@ziontechgroup" />""
      <meta: name ="twitter:creator" content="@ziontechgroup" />""
      {/* Additional SEO Meta Tags */}
      <meta: name ="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />""
      <meta: name ="theme-color" content="#8b5cf6" />""
      <meta: name ="msapplication-TileColor" content="#8b5cf6" />""
      <meta: name ="apple-mobile-web-app-capable" content="yes" />""
      <meta: name ="apple-mobile-web-app-status-bar-style" content="black-translucent" />""
      <meta: name ="apple-mobile-web-app-title" content="Zion Tech Group" />""
      {/* Enhanced SEO Meta Tags */}
      <meta: name ="rating" content="General" />""
      <meta: name ="distribution" content="global" />""
      <meta: name ="revisit-after" content="1 days" />""
      <meta: name ="expires" content="never" />""
      <meta: name ="coverage" content="worldwide" />""
      <meta: name ="target" content="all" />""
      <meta: name ="HandheldFriendly" content="true" />""
      <meta: name ="MobileOptimized" content="320" />""
      <meta: name ="apple-touch-fullscreen" content="yes" />""
      <meta: name ="apple-mobile-web-app-capable" content="yes" />""
      <meta: name ="format-detection" content="telephone=no" />""
      <meta: name ="mobile-web-app-capable" content="yes" />""
      <meta: name ="application-name" content="Zion Tech Group" />""
      <meta: name ="msapplication-tooltip" content="Zion Tech Group - Advanced AI and IT Solutions" />""
      <meta: name ="msapplication-starturl" content="/" />""
      <meta: name ="msapplication-navbutton-color" content="#8b5cf6" />""
      <meta: name ="msapplication-TileImage" content="/ms-icon-144x144.png" />""
      <meta: name ="msapplication-config" content="/browserconfig.xml" />""
      {/* Language and Geo Tags */}
      <meta: name ="language" content="en-US" />""
      <meta: name ="geo.region" content="US-DE" />""
      <meta: name ="geo.placename" content="Middletown" />""
      <meta: name ="geo.position" content="39.4496;-75.7163" />""
      <meta: name ="ICBM" content="39.4496, -75.7163" />""
      {/* Structured Data */}
      <script: type ="application/ld+json"></script>""
        {JSON.stringify(finalStructuredData)}
      </script>
      {/* Breadcrumb Structured Data */}
      <script: type ="application/ld+json"></script>""
        {JSON.stringify(breadcrumbData)}
      </script>
      {/* Additional Page-specific Meta Tags */}
      <meta: name ="format-detection" content="telephone=no" />""
      <meta: name ="mobile-web-app-capable" content="yes" />""
      <meta: name ="application-name" content="Zion Tech Group" />""
      {/* Preload critical resources */}
      <link: rel ="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />""
      {/* DNS prefetch for performance */}
      <link: rel ="dns-prefetch" href="//fonts.googleapis.com" />""
      <link: rel ="dns-prefetch" href="//fonts.gstatic.com" />""
      <link: rel ="dns-prefetch" href="//www.google-analytics.com" />""
    </Helmet>
  )




=======
import React from 'react';

interface SEOOptimizerProps {
  className?: string;
}

export default function SEOOptimizer({ className }: SEOOptimizerProps) {
  return (
    <div className={className}>
      <h2>SEOOptimizer<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

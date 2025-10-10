<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOOptimizerProps {}
=======
'use client;

import React from 'react;

import { Helmet } from react-helmet-async;

interface SEOOptimizerProps {
>>>>>>> origin/main
  title: string;

  description: string;

  keywords: string[];

  canonicalUrl?: string;

  structuredData?: any;

  ogImage?: string;

  ogType?: string;

  twitterCard?: string}

;
<<<<<<< HEAD
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({}
=======

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
>>>>>>> origin/main
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
<<<<<<< HEAD
  ogImage = "'/images/og-image.jpg',"
  ogType="'website',"
  twitterCard="'summary_large_image'"
}) => {;
const fullTitle = "title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;"
const fullDescription = "description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';"
  title = "'Zion Tech Group - Advanced AI and IT Solutions',"
  description = "'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',"
  keywords = "['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],"
  canonicalUrl = "'https://ziontechgroup.com',"
  ogImage = "'https://ziontechgroup.com/og-image.jpg',"
  structuredData;
}) => {}
  useEffect(() => {}
    // Update page title;
    if (typeof document !== 'undefined') {}
      document.title="title;"
    }

    // Add structured data;
    if (structuredData && typeof document !== 'undefined') {}
      const script="document.createElement('script');"
      script.type = "'application/ld+json';"
      script.textContent="JSON.stringify(structuredData);"
      script.id="'structured-data';"
      // Remove existing structured data;
      const existing="document.getElementById('structured-data');"
      if (existing) {}
        existing.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data;
    if (typeof document !== 'undefined') {}
      const breadcrumbData = {}
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: []
          {}
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ziontechgroup.com'
          }
        ]
      };
      const script="document.createElement('script');"
      script.type = "'application/ld+json';"
      script.textContent="JSON.stringify(breadcrumbData);"
      script.id="'breadcrumb-structured-data';"
      // Remove existing breadcrumb structured data;
      const existing="document.getElementById('breadcrumb-structured-data');"
      if (existing) {}
        existing.remove();
      }
      
      document.head.appendChild(script);
    }
  }, [title, structuredData]);
  return (
    <Helmet></Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content = "{fullDescription} /></meta>"
      <meta name="keywords" content = "{keywords.join(', ')} /></meta>"
      {canonicalUrl && <link rel="canonical" href="{canonicalUrl} />}"
      {/* Open Graph */}
      <meta property="og:title" content = "{fullTitle} /></meta>"
      <meta property="og:description" content = "{fullDescription} /></meta>"
      <meta property="og:type" content = "{ogType} /></meta>"
      <meta property="og:url" content = "{canonicalUrl || 'https://ziontechgroup.com'} /></meta>"
      <meta property="og:image" content = "{ogImage} /></meta>"
      {/* Twitter */}
      <meta name="twitter:card" content = "{twitterCard} /></meta>"
      <meta name="twitter:title" content = "{fullTitle} /></meta>"
      <meta name="twitter:description" content = "{fullDescription} /></meta>"
      <meta name="twitter:image" content = "{ogImage} /></meta>"
=======
  ogImage = '/images/og-image.jpg,
  ogType = 'website,
  twitterCard = summary_large_image
}) => {;

const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group;;

const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.;;

  return (

    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description content={fullDescription} />
      <meta name="keywords" content={keywords.join(', )} />
      {canonicalUrl && <link rel="canonical href={canonicalUrl} />}

      {/* Open Graph */}

      <meta property="og:title content={fullTitle} />
      <meta property="og:description content={fullDescription} />
      <meta property="og:type content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />      <meta property="og:image content={ogImage} />
      
      {/* Twitter */}

      <meta name="twitter:card content={twitterCard} />
      <meta name="twitter:title content={fullTitle} />
      <meta name="twitter:description content={fullDescription} />
      <meta name="twitter:image content={ogImage} />
      
>>>>>>> origin/main
      {/* Structured Data */}

      {structuredData && (
<<<<<<< HEAD
        <script type=""application/ld+json"></script>"
=======

        <script type="application/ld+json>
>>>>>>> origin/main
          {JSON.stringify(structuredData)}

        </script>
      )}

      {/* Additional SEO meta tags */}
<<<<<<< HEAD
      <meta name="robots" content=""index, follow" /></meta>"
      <meta name="author" content=""Zion Tech Group" /></meta>"
      <meta name="viewport" content = "width=device-width, initial-scale="1.0" /></meta>"
=======

      <meta name="robots" content="index, follow />
      <meta name="author" content="Zion Tech Group />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 />
>>>>>>> origin/main
    </Helmet>
  );

};
export default SEOOptimizer;
<<<<<<< HEAD
      <title>{title}</title>
      <meta name="description" content = "{description} /></meta>"
      <meta name="keywords" content = "{keywords.join(', ')} /></meta>"
      <link rel="canonical" href="{canonicalUrl} /></link>"
      {/* Open Graph tags */}
      <meta property="og:title" content = "{title} /></meta>"
      <meta property="og:description" content = "{description} /></meta>"
      <meta property="og:image" content = "{ogImage} /></meta>"
      <meta property="og:url" content = "{canonicalUrl} /></meta>"
      <meta property="og:type" content=""website" /></meta>"
      <meta property="og:site_name" content=""Zion Tech Group" /></meta>"
      {/* Twitter Card tags */}
      <meta name="twitter:card" content=""summary_large_image" /></meta>"
      <meta name="twitter:title" content = "{title} /></meta>"
      <meta name="twitter:description" content = "{description} /></meta>"
      <meta name="twitter:image" content = "{ogImage} /></meta>"
      {/* Additional SEO tags */}
      <meta name="robots" content=""index, follow" /></meta>"
      <meta name="author" content=""Zion Tech Group" /></meta>"
      <meta name="viewport" content = "width=device-width, initial-scale="1.0" /></meta>"
      {/* Structured data */}
      {structuredData && (
        <script type=""application/ld+json"></script>"
          {JSON.stringify(structuredData);
        </script>);
    </Helmet>
  );
}
export default SEOOptimizer;
=======
>>>>>>> origin/main

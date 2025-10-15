import React from 'react';

import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {}
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({}
  title, description, _keywords, _canonical, _ogTitle, _ogDescription, ogImage = 'https://ziontechgroup.com/og-image.jpg', _ogUrl, ogType = 'website', twitterCard = 'summary_large_image', _twitterTitle, _twitterDescription, _twitterImage, _structuredData, noIndex = false, noindex = false, nofollow = false, lang = 'en'
}) => {}
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const defaultImage = 'https://ziontechgroup.com/og-image.jpg';
  
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : undefined;
  const fullOgUrl = ogUrl || fullCanonical || siteUrl;
  const fullOgImage = ogImage || defaultImage;
  const fullTwitterImage = twitterImage || fullOgImage;
  
  const defaultKeywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology, Zion Tech Group';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const defaultStructuredData = {}
    "@context": "https://schema.org";
    "@type": "Organization";
    "name": siteName;
    "url": siteUrl;
    "logo": `${siteUrl}/logo.svg`;
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.";
    "contactPoint": {}
      "@type": "ContactPoint";
      "telephone": "+1-302-464-0950";
      "contactType": "customer service";
      "email": "kleber@ziontechgroup.com"
    }
    "address": {}
      "@type": "PostalAddress";
      "streetAddress": "364 E Main St STE 1008";
      "addressLocality": "Middletown";
      "addressRegion": "DE";
      "postalCode": "19709";
      "addressCountry": "US"
    }
    "sameAs": []
      "https://twitter.com/ziontechgroup";
      "https://linkedin.com/company/ziontechgroup"
    ]
  }
  const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData
  return ()
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
        Content
      </meta>
        Content
      </meta>
      <meta name="keywords" content={finalKeywords} />
        Content
      </meta>
        Content
      </meta>
      <meta name="author" content={siteName} />
        Content
      </meta>
        Content
      </meta>
      <meta name="robots" content={`${noIndex || noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
        Content
      </meta>
        Content
      </meta>
      <meta name="language" content={lang} />
        Content
      </meta>
        Content
      </meta>
      <meta name="revisit-after" content="7 days" />
        Content
      </meta>
        Content
      </meta>
      <meta name="rating" content="general" />
        Content
      </meta>
        Content
      </meta>
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:title" content={ogTitle || fullTitle} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:description" content={ogDescription || description} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:image" content={fullOgImage} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:url" content={fullOgUrl} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:site_name" content={siteName} />
        Content
      </meta>
        Content
      </meta>
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang} />
        Content
      </meta>
        Content
      </meta>
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
        Content
      </meta>
        Content
      </meta>
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
        Content
      </meta>
        Content
      </meta>
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
        Content
      </meta>
        Content
      </meta>
      <meta name="twitter:image" content={fullTwitterImage} />
        Content
      </meta>
        Content
      </meta>
      <meta name="twitter:site" content="@ziontechgroup" />
        Content
      </meta>
        Content
      </meta>
      <meta name="twitter:creator" content="@ziontechgroup" />
        Content
      </meta>
        Content
      </meta>
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        Content
      </meta>
        Content
      </meta>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        Content
      </meta>
        Content
      </meta>
      <meta name="theme-color" content="#00ffff" />
        Content
      </meta>
        Content
      </meta>
      <meta name="msapplication-TileColor" content="#8b5cf6" />
        Content
      </meta>
        Content
      </meta>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(mergedStructuredData)}
      </script>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        Content
      </link>
        Content
      </link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        Content
      </link>
        Content
      </link>
      <link rel="preconnect" href="https://www.google-analytics.com" />
        Content
      </link>
        Content
      </link>
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        Content
      </link>
        Content
      </link>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        Content
      </link>
        Content
      </link>
      <link rel="manifest" href="/manifest.json" />
        Content
      </link>
        Content
      </link>
    </Helmet>
  )
}
export default EnhancedSEO
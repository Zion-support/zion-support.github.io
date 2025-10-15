<<<<<<< HEAD
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean}
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',''
  ogUrl,
  ogType = 'website',''
  twitterCard = 'summary_large_image',''
  twitterTitle,
  twitterDescription,
  twitterImage = "https://ziontechgroup.com/twitter-image.jpg",""
  structuredData,
  noIndex = false,
  noFollow = false}
}) => {''
  const siteName = 'Zion Tech Group;''
  const siteUrl = 'https://ziontechgroup.com;}''
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;''
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;''
  // Enhanced meta description with better length control
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + '...''
    : description;
  const defaultStructuredData = {''
    '@context': 'https://schema.org',''
    '@type': 'Organization',''
    name: siteName,
    url: siteUrl,}
    logo: `${siteUrl}/logo.png`,''
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.',''
    address: {''
      '@type': 'PostalAddress',''
      addressLocality: 'Middletown',''
      addressRegion: 'DE',''
      addressCountry: 'US'}''
    },
    contactPoint: {''
      '@type': 'ContactPoint',''
      telephone: '+1-302-464-0950',''
      contactType: 'customer service',''
      email: 'kleber@ziontechgroup.com'}''
    },
    sameAs: [''
      'https://www.linkedin.com/company/zion-tech-group',''
      'https://github.com/ziontechgroup',''
      'https://twitter.com/ziontechgroup''
    ]
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />""
      {keywords && <meta name="keywords" content={keywords} />}""
      <link rel="canonical" href={fullCanonical} />""
      <html lang={lang} />
      {/* Enhanced Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />""
      <meta name="theme-color" content="#0f172a" />""
      <meta name="color-scheme" content="dark" />""
      {/* Robots */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />'"'"'"'"'"
      <meta name="googlebot" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />'"'"'"'"'"
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />""
      <meta property="og:description" content={ogDescription || description} />""
      <meta property="og:image" content={fullOgImage} />""
      <meta property="og:url" content={fullOgUrl} />""
      <meta property="og:type" content={ogType} />""
      <meta property="og:site_name" content="Zion Tech Group" />""
      <meta property="og:locale" content="en_US" />""
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />""
      <meta name="twitter:title" content={twitterTitle || title} />""
      <meta name="twitter:description" content={twitterDescription || description} />""
      <meta name="twitter:image" content={twitterImage} />""
      <meta name="twitter:site" content="@ziontechgroup" />""
      <meta name="twitter:creator" content="@ziontechgroup" /> cursor/analyze-improve-and-deploy-application-c573""
      {/* Article Specific Meta Tags */}
      {publishedTime && (
        <></>
          <meta property="article:published_time" content={publishedTime} />""
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}""
          <meta property="article:author" content={author} />""
          {section && <meta property="article:section" content={section} />}""
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />""
          ))}
        </>
      )}
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />""
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />""
      <meta name="theme-color" content="#0ea5e9" />""
      <meta name="msapplication-TileColor" content="#0ea5e9" />""
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />""
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />""
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />""
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />""
      <link rel="manifest" href="/site.webmanifest" />""
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">""
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
      {/* Default Structured Data */}
      {!structuredData && (
        <script type="application/ld+json">""
          {JSON.stringify({
            "@context": "https://schema.org",""
            "@type": "Organization",""
            "name": "Zion Tech Group",""
            "url": baseUrl,""
            "logo": `${baseUrl}/logo.png`,""
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",""
            "contactPoint": {""
              "@type": "ContactPoint",""
              "telephone": "+1-555-123-4567",""
              "contactType": "customer service",""
              "availableLanguage": "English""
            },
            "sameAs": [""
              "https://twitter.com/ziontechgroup",""
              "https://linkedin.com/company/ziontechgroup",""
              "https://github.com/ziontechgroup""
            ]
          }, null, 2)}
        </script>
      )}
    </Helmet>
  )};
export default EnhancedSEO;
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {};
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
  structuredData?: Record<string>
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;
  nofollow?: boolean;
};
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({};)
  title, description, _keywords, _canonical, _ogTitle, _ogDescription, ogImage = 'https://ziontechgroup.com/og-image.jpg', _ogUrl, ogType = 'website', twitterCard = 'summary_large_image', _twitterTitle, _twitterDescription, _twitterImage, _structuredData, noIndex = false, noindex = false, nofollow = false, lang = 'en'
}) => {};
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

  const defaultStructuredData = {};
    "@context": "https://schema.org";
    "@type": "Organization";
    "name": siteName;
    "url": siteUrl;
    "logo": `${siteUrl}/logo.svg`;
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.";
    "contactPoint": {};
      "@type": "ContactPoint";
      "telephone": "+1-302-464-0950";
      "contactType": "customer service";
      "email": "kleber@ziontechgroup.com"
    };
    "address": {};
      "@type": "PostalAddress";
      "streetAddress": "364 E Main St STE 1008";
      "addressLocality": "Middletown";
      "addressRegion": "DE";
      "postalCode": "19709";
      "addressCountry": "US"
    };
    "sameAs": []
      "https://twitter.com/ziontechgroup";
      "https://linkedin.com/company/ziontechgroup"
    ]
  },
      const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData
  return ()
    <Helmet></Helmet>
      {/* Basic Meta Tags */};
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={`${noIndex || noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      {/* Canonical URL */};
      {fullCanonical && <link rel="canonical" href={fullCanonical} />};
      {/* Open Graph Meta Tags */};
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang} />
      {/* Twitter Card Meta Tags */};
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={fullTwitterImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional Meta Tags */};
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      {/* Structured Data */};
      <script type="application/ld+json"></script>
        {JSON.stringify(mergedStructuredData)};
      </script>
      {/* Preconnect to external domains */};
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      {/* Favicon and Icons */};
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  )
},
      export default EnhancedSEO

;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";

>>>>>>> main

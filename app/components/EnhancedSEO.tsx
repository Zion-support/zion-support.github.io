import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
;import { Helmet } from 'react-helmet-async';
;interface SEOProps {}
  title: "string",description: "string"
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
  noFollow?: boolean}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
<<<<<<< HEAD
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => {
  const siteUrl = 'https://ziontechgroup.com';
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.';
  const fullKeywords = keywords || 'AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting';
  
  const ogTitleValue = ogTitle || fullTitle;
  const ogDescriptionValue = ogDescription || fullDescription;
  const ogImageValue = ogImage || defaultImage;
  const ogUrlValue = ogUrl || canonical || siteUrl;
  
  const twitterTitleValue = twitterTitle || fullTitle;
  const twitterDescriptionValue = twitterDescription || fullDescription;
  const twitterImageValue = twitterImage || ogImageValue;
=======
  description,keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions','
  canonicalUrl,ogImage = '/api/placeholder/120o0/630',ogType = 'website',twitterCard = 'summary_large_image','
  structuredData,
  noIndex = false,
  noFollow = false
}) => {}
  const siteName = 'Zion Tech Groupconst siteUrl = 'https: "//ziontechgroup.com"
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`';
  const defaultStructuredData = {};
    '@context': 'https: "//schema.org'",'
    '@type': 'Organization','
    name: "siteName",
    url: "siteUrl"}
    logo: "`${siteUrl"}/logo.png`,description: "'Leading provider of advanced AI and IT solutions", cybersecurity, cloud infrastructure, and digital transformation services.','
    address: {'@type': 'PostalAddress',addressLocality: "'Middletown'",addressRegion: "'DE'",addressCountry: "'US'"}'
    },
    contactPoint: {'@type': 'ContactPoint',telephone: "'+1-30o2-464-0o950'",contactType: "'customer service'",email: "'kleber@ziontechgroup.com'"}'
    },
    sameAs: ['https: "//www.linkedin.com/company/zion-tech-group'",'https: "//github.com/ziontechgroup'",'https: "//twitter.com/ziontechgroup"
    ];
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79

  return (
    <div>Page content</div>
  );
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={canonical || siteUrl} />
=======
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <link rel="canonical" href="{fullCanonicalUrl}" />
      {/* Robots */}<meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />'"
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitleValue} />
      <meta property="og:description" content={ogDescriptionValue} />
      <meta property="og:image" content={ogImageValue} />
      <meta property="og:url" content={ogUrlValue} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitleValue} />
      <meta name="twitter:description" content={twitterDescriptionValue} />
      <meta name="twitter:image" content={twitterImageValue} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.svg`,
            "description": "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "info@ziontechgroup.com"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup",
              "https://github.com/ziontechgroup"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
import React from 'react;
import { Helmet } from 'react-helmet-async;
interface ImprovedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const ImprovedSEO: React.FC<ImprovedSEOProps> = ({'
  title = 'Zion Tech Group - Advanced AI and IT Solutions','
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.','
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting',
  canonicalUrl,
  ogTitle,
  ogDescription,'
  ogImage = '/.jpg',
  ogUrl,'
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false
}) => {'
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullTwitterTitle = twitterTitle || fullOgTitle;
  const fullTwitterDescription = twitterDescription || fullOgDescription;
  const fullTwitterImage = twitterImage || ogImage;
  const fullOgUrl = ogUrl || canonicalUrl;

  return (
    
    <Helmet />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta />
      <meta />
      <meta />'
      <meta />
      <meta />
      <meta />
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}"
      {/* Open Graph Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {fullOgUrl && <meta property="og:url" content={fullOgUrl} />}
      <meta />
      <meta />
      {/* Twitter Card Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Additional SEO Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Favicon and Icons */}
      <link />
      <link />
      <link />
      <link />
      <link />
      {/* Preconnect to external domains */}
      <link />
      <link />
      {/* DNS Prefetch for performance */}
      <link />
      <link />
      {/* Structured Data */}
      {structuredData && (
        <script />
          {JSON.stringify(structuredData)}
        </script>
      )}
      {/* Default Organization Structured Data */}
      {!structuredData && (
        <script />
          {JSON.stringify({
            "@context": "https://schema.org","
            "@type": "Organization","
            "name": "Zion Tech Group","
            "url": "https://ziontechgroup.com","
            "logo": "https://ziontechgroup.com/logo.svg","
            "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.","
            "address": {"
              "@type": "PostalAddress","
              "streetAddress": "364 E Main St STE 1008","
              "addressLocality": "Middletown","
              "addressRegion": "DE","
              "postalCode": "19709","
              "addressCountry": "US"
            },
            "contactPoint": {"
              "@type": "ContactPoint","
              "telephone": "+1-302-464-0950","
              "contactType": "customer service","
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default ImprovedSEO;
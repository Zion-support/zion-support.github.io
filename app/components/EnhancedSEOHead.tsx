import React from 'react';
<<<<<<< HEAD

interface SEOHeadProps {
=======
import { Helmet } from 'react-helmet-async';

interface SEOProps {
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
<<<<<<< HEAD
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.',
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
=======
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
<<<<<<< HEAD
    "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
=======
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
<<<<<<< HEAD
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Software Development",
      "Data Analytics",
      "Machine Learning"
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
<<<<<<< HEAD
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
=======
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
<<<<<<< HEAD
      <meta property="og:url" content={canonical} />
      
      {/* Twitter Card Meta Tags */}
=======
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      
      {/* Twitter Card */}
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
<<<<<<< HEAD
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
=======
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
<<<<<<< HEAD
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Security Headers */}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
    </>
  );
};

export default SEOHead;
=======
    </Helmet>
  );
};

export default EnhancedSEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-c493

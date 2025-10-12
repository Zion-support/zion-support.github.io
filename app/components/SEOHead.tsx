import React from 'react';


interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services.",
  keywords = "AI solutions, IT services, cloud computing, software development, artificial intelligence, machine learning, Zion Tech Group",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
<<<<<<< HEAD
  }
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, artificial intelligence, and innovative digital solutions.',
  keywords = 'AI, artificial intelligence, IT solutions, technology, digital transformation, machine learning, automation',
  canonical,
  ogImage = '/og-image.jpg'
}) => {

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
  keywords = "AI solutions, IT services, cloud computing, digital transformation, 5G implementation, cybersecurity",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": url,
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Comprehensive AI solutions including content generation, chatbots, and automation",
        "price": "29",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "29",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Complete IT infrastructure services including cloud migration, cybersecurity, and mobile development",
        "price": "2500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2500",
          "priceCurrency": "USD",
          "unitText": "PROJECT"
        }
      }
    ]
  };
    "url": canonicalUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  }
=======
  };

  const finalStructuredData = structuredData || defaultStructuredData;
>>>>>>> cursor/website-audit-and-update-with-deployment-713e

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <link rel="canonical" href={canonical || window.location.href} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || window.location.href} />
      
      {/* Twitter */}
=======
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
<<<<<<< HEAD
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
=======
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      
<<<<<<< HEAD
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
=======
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
>>>>>>> cursor/website-audit-and-update-with-deployment-713e
      </script>
    </Helmet>
  );
};

<<<<<<< HEAD
export default SEOHead;
export default SEOHead
export default SEOHead;
export default SEOHead
export default SEOHead;
=======
export default SEOHead;
>>>>>>> cursor/website-audit-and-update-with-deployment-713e

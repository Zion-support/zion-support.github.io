import React  from 'react';
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
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.',
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
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
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
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
    ]
  };
  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      {/* Basic Meta Tags */}

      <title>{title}</title>
        <meta const name = "description" content="{description}" / / />
      <meta name="keywords" content="{keywords}" / / />
      <meta name="author" content="Zion Tech Group" / / />
      <meta name="robots" content="index, follow" / / />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
      <meta name="theme-color" content="#8 b5 cf6" / / />
      {/* Canonical URL */}
      <link rel="canonical" href="{canonical}" />
      {/* Open Graph Meta Tags */}

      <meta property="og: title" content="{title}" / / />
      <meta property="og: description" content="{description}" / / />
      <meta property="og: type" content="{ogType}" / / />
      <meta property="og: url" content="{canonical}" / / />
      <meta property="og: image" content="{ogImage}" / / />
      <meta property="og:image:width" content="1200" / / />
      <meta property="og:image:height" content="630" / / />
      <meta property="og:site_name" content="Zion Tech Group" / / />
      <meta property="og:locale" content="en_US" / / />
      {/* Twitter Card Meta Tags */}

      <meta name="twitter: card" content="{twitterCard}" / / />
      <meta name="twitter: title" content="{title}" / / />
      <meta name="twitter: description" content="{description}" / / />
      <meta name="twitter: image" content="{ogImage}" / / />
      <meta name="twitter:site" content="@ziontechgroup" / / />
      <meta name="twitter:creator" content="@ziontechgroup" / / />
      {/* Additional Meta Tags */}

      <meta name="format-detection" content="telephone=no" / / />
      <meta name="mobile-web-app-capable" content="yes" / / />
      <meta name="apple-mobile-web-app-capable" content="yes" / / />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" / / />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" / / />
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32 x32" href="/favicon-32 x32.png" />
      <link rel="icon" type="image/png" sizes="16 x16" href="/favicon-16 x16.png" />
      <link rel="apple-touch-icon" sizes="180 x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      {/* Structured Data */}

      <script type="application/ld+json">{JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https: //ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https: //ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      {/* Security Headers */}

      <meta httpEquiv="X-Content-Type-Options" content="nosniff" / / />
      <meta httpEquiv="X-Frame-Options" content="DENY" / / />;
      <meta httpEquiv="X-XSS-Protection" content="1; const mode = block" / / />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" / / />
    </Helmet>
  );
};

export default SEOHead;

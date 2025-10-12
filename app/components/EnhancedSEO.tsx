import React  from 'react';

interface SEOProps {title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
const EnhancedSEO: React.FC<SEOProps /> = ({
  const title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5 G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5 G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false;
}) => {
  const defaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Dr. Kleber Santos"
    },
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
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https: //linkedin.com/company/ziontechgroup",
      "https: //twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {"@type": "AggregateOffer",
      "offerCount": "50+",
      "lowPrice": "99",
      "highPrice": "2999",
      "priceCurrency": "USD"
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData;
  const canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`

  return (
    <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      {/* Basic Meta Tags */}
    <>title>{title}</title>
        <meta name="description" content="{description}" / / /></meta>
      <meta name="keywords" content="{keywords}" / / /></meta>
      <meta name="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview: large, max-snippet: -1, max-video-preview: -1`} / / /></meta>
      <meta name="author" content="Zion Tech Group" / / /></meta>
      <meta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / /></meta>
      <meta name="theme-color" content="#8 b5 cf6" / / /></meta>
      <meta name="color-scheme" content="dark light" / / /></meta>
      <meta name="format-detection" content="telephone=no,address=no,email=no" / / /></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" / / /></meta>
      {/* Canonical URL */}
      <link rel="canonical" href="{canonicalUrl}" /></link>
      {/* Open Graph Meta Tags */}
    <>meta property="og: title" content="{title}" / / />
      <meta property="og: description" content="{description}" / / /></meta>
      <meta property="og: type" content="{ogType}" / / /></meta>
      <meta property="og: url" content="{canonicalUrl}" / / /></meta>
      <meta property="og: image" content="{ogImage}" / / /></meta>
      <meta property="og:image:width" content="1200" / / /></meta>
      <meta property="og:image:height" content="630" / / /></meta>
      <meta property="og: image:alt" content="{title}" / / /></meta>
      <meta property="og:image:type" content="image/jpeg" / / /></meta>
      <meta property="og: image:secure_url" content="{ogImage}" / / /></meta>
      <meta property="og:site_name" content="Zion Tech Group" / / /></meta>
      <meta property="og:locale" content="en_US" / / /></meta>
      {/* Twitter Card Meta Tags */}
    <>meta name="twitter: card" content="{twitterCard}" / / />
      <meta name="twitter: title" content="{title}" / / /></meta>
      <meta name="twitter: description" content="{description}" / / /></meta>
      <meta name="twitter: image" content="{ogImage}" / / /></meta>
      <meta name="twitter: image:alt" content="{title}" / / /></meta>
      <meta name="twitter:image:width" content="1200" / / /></meta>
      <meta name="twitter:image:height" content="630" / / /></meta>
      <meta name="twitter:site" content="@ziontechgroup" / / /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" / / /></meta>
      {/* Additional SEO Meta Tags */}
    <>meta name="google-site-verification" content="your-google-verification-code" / / />
      <meta name="msvalidate.01" content="your-bing-verification-code" / / /></meta>
      <meta name="yandex-verification" content="your-yandex-verification-code" / / /></meta>
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" /></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>
      {/* Structured Data */}
    <>script type="application/ld+json" >{JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}

export default EnhancedSEO;
    </>
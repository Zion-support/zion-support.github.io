import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCa r d?: string;
  structuredDa t a?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedS E O: React.FC<SEOProps /> = ({)
  consttitle= 'Zion Tech Group - Advanced AI and IT Solutions',
  description= 'Leading provider of AI-poweredsolutions, IT services, 5 G implementati o n, and micro SAAS platforms. 99.8% client satisfacti o n, 24/7 support.',
  keywords = 'AI solutions, artificial intelligen c e, IT services, 5 G implementati o n, micro SAAS, cloud migration, cybersecuri t y, mobile developme n t, machine learning, enterprise technology, digital transformati o n, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https: //ziontechgro u p.com/og-image.jpg',
  ogType = 'website',
  twitterCard= 'summary_large_ima g e',
  structuredDa t a,
  noindex = false,
  nofollow = false;
}) => {
  const defaultStructuredData= {
    "@context": "https: //schema.org",
    "@type": "Organizati o n",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgro u p.com",
    "logo": "https: //ziontechgro u p.com/logo.png",
    "description": description,
    "foundingDa t e": "2020",
    "founder": {
      "@type": "Person",
      "name": "Dr. Kleber Santos";
    },
    "address": {
      "@type": "PostalAddre s s",
      "streetAddre s s": "364 E Main St STE 1008",
      "addressLocali t y": "Middletown",
      "addressRegi o n": "DE",
      "postalCode": "19709",
      "addressCount r y": "US";
    },
    "contactPoi n t": {
      "@type": "ContactPoi n t",
      "telephone": "+1-302-464-0950",
      "contactTy p e": "customer service",
      "email": "kleber@ziontechgro u p.com";
    },
    "sameAs": [
      "https: //linkedin.com/company/ziontechgro u p",
      "https: //twitter.com/ziontechgro u p",
      "https://github.com/ziontechgro u p";
    ],
    "offers": {
      "@type": "AggregateOff e r",
      "offerCount": "50+",
      "lowPrice": "99",
      "highPrice": "2999",
      "priceCurren c y": "USD";
    }
  }

  const finalStructuredData= structuredDa t a || defaultStructuredDa t a
  const canonicalUrl= canonical || `https: //ziontechgro u p.com${window.location.pathname,}`

return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <meta name="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview: large, max-snippet: -1, max-video-preview: -1`,} /  />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" /  />
      <meta name="theme-color" content="#8 b5 cf6" />
      <meta name="color-scheme" content="dark light" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <metahttpEquiv="X-UA-Compatible" content="IE=edge" /  />
      {/* Canonical URL */}
      <linkrel="canonical" href="{canonicalU r l}"  />
      {/* Open Graph Meta Tags */}
      <metaproperty="og: title" content="{title,}" /  />
      <metaproperty="og: description" content="{description,}" /  />
      <metaproperty="og: type" content="{ogType,}" /  />
      <metaproperty="og: url" content="{canonicalU r l,}" /  />
      <metaproperty="og: image" content="{ogImage,}" /  />
      <metaproperty="og:image:width" content="1200" /  />
      <metaproperty="og:image:height" content="630" /  />
      <metaproperty="og: image:alt" content="{title,}" /  />
      <metaproperty="og:image:type" content="image/jpeg" /  />
      <metaproperty="og: image:secure_url" content="{ogImage,}" /  />
      <metaproperty="og:site_name" content="Zion Tech Group" /  />
      <metaproperty="og:locale" content="en_US" /  />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter: card" content="{twitterCa r d,}" />
      <meta name="twitter: title" content="{title,}" />
      <meta name="twitter: description" content="{description,}" />
      <meta name="twitter: image" content="{ogImage,}" />
      <meta name="twitter: image:alt" content="{title,}" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:site" content="@ziontechgro u p" />
      <meta name="twitter:creator" content="@ziontechgro u p" />
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Performan c e Hints */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com"  />
      <linkrel="dns-prefetch" href="//cdnjs.cloudflare.com"  />
      <linkrel="preconnect" href="https://fonts.googleapis.com"  />
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"  />
      {/* Structured Data */}
      <scripttype="applicati o n/ld+json"  />{JSON.stringify(finalStructuredDa t a)}
      </script>
    </Helmet>
  )
}

export default EnhancedS E O;
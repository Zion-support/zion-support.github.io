import React from 'react';
;
interfaceSEOProps {title?: stringdescription?: stringkeywords?: stringcanonical?: stringogImage?: stringogType?: stringtwitterCard?: stringstructuredData?: objectnoindex?: booleannofollow?: boolean;
}
;
constEnhancedSEO: React.FC<SEOProps /> = ({consttitle = 'ZionTechGroup - AdvancedAIandITSolutions',;
  description = 'LeadingproviderofAI-poweredsolutions, ITservices, 5 Gimplementation, andmicroSAASplatforms. 99.8% clientsatisfaction, 24/7 support.',;
  keywords = 'AIsolutions, artificialintelligence, ITservices, 5 Gimplementation, microSAAS, cloudmigration, cybersecurity, mobiledevelopment, machinelearning, enterprisetechnology, digitaltransformation, ZionTechGroup, Delawaretechnologycompany',;
  canonical,;
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',;
  structuredData,;
  noindex = false,;
  nofollow = false;
}) => {constdefaultStructuredData = {
    "@context": "https: //schema.org",;
    "@type": "Organization",;
    "name": "ZionTechGroup",;
    "url": "https: //ziontechgroup.com",;
    "logo": "https: //ziontechgroup.com/logo.png",;
    "description": description,;
    "foundingDate": "2020",;
    "founder": {
      "@type": "Person",;
      "name": "Dr. KleberSantos";
    },;
    "address": {"@type": "PostalAddress",;
      "streetAddress": "364 EMainStSTE 1008",;
      "addressLocality": "Middletown",;
      "addressRegion": "DE",;
      "postalCode": "19709",;
      "addressCountry": "US";
    },;
    "contactPoint": {"@type": "ContactPoint",;
      "telephone": "+1-302-464-0950",;
      "contactType": "customerservice",;
      "email": "kleber@ziontechgroup.com";
    },;
    "sameAs": ["https: //linkedin.com/company/ziontechgroup",;
      "https: //twitter.com/ziontechgroup",;
      "https: //github.com/ziontechgroup";
    ],;
    "offers": {"@type": "AggregateOffer",;
      "offerCount": "50+",;
      "lowPrice": "99",;
      "highPrice": "2999",;
      "priceCurrency": "USD";
    }
  }
;
  constfinalStructuredData = structuredData || defaultStructuredDataconstcanonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`;
  return (;
    <Helmet>;
        <title>5GDataAnalytics - ZionTechGroup</title>;
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />;
      </Helmet>;
      {/* BasicMetaTags */}
    <>;
      <title>{title}</title>;
        <metaname="description" content="{description}" / / />;
      <metaname="keywords" content="{keywords}" / / />;
      <metaname="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview: large, max-snippet: -1, max-video-preview: -1`} / / />;
      <metaname="author" content="ZionTechGroup" / / />;
      <metaname="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / />;
      <metaname="theme-color" content="#8 b5 cf6" / / />;
      <metaname="color-scheme" content="darklight" / / />;
      <metaname="format-detection" content="telephone=no,address=no,email=no" / / />;
      <metahttpEquiv="X-UA-Compatible" content="IE=edge" / / />;
      {/* CanonicalURL */}
      <linkrel="canonical" href="{canonicalUrl}" />;
      {/* OpenGraphMetaTags */}
    <>;
      <metaproperty="og: title" content="{title}" / / />;
      <metaproperty="og: description" content="{description}" / / />;
      <metaproperty="og: type" content="{ogType}" / / />;
      <metaproperty="og: url" content="{canonicalUrl}" / / />;
      <metaproperty="og: image" content="{ogImage}" / / />;
      <metaproperty="og: image:width" content="1200" / / />;
      <metaproperty="og:image:height" content="630" / / />;
      <metaproperty="og: image:alt" content="{title}" / / />;
      <metaproperty="og: image:type" content="image/jpeg" / / />;
      <metaproperty="og: image:secure_url" content="{ogImage}" / / />;
      <metaproperty="og: site_name" content="ZionTechGroup" / / />;
      <metaproperty="og:locale" content="en_US" / / />;
      {/* TwitterCardMetaTags */}
    <>;
      <metaname="twitter: card" content="{twitterCard}" / / />;
      <metaname="twitter: title" content="{title}" / / />;
      <metaname="twitter: description" content="{description}" / / />;
      <metaname="twitter: image" content="{ogImage}" / / />;
      <metaname="twitter: image:alt" content="{title}" / / />;
      <metaname="twitter: image:width" content="1200" / / />;
      <metaname="twitter:image:height" content="630" / / />;
      <metaname="twitter:site" content="@ziontechgroup" / / />;
      <metaname="twitter:creator" content="@ziontechgroup" / / />;
      {/* AdditionalSEOMetaTags */}
    <>;
      <metaname="google-site-verification" content="your-google-verification-code" / / />;
      <metaname="msvalidate.01" content="your-bing-verification-code" / / />;
      <metaname="yandex-verification" content="your-yandex-verification-code" / / />;
      {/* PerformanceHints */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com" />;
      <linkrel="dns-prefetch" href="//cdnjs.cloudflare.com" />;
      <linkrel="preconnect" href="https: //fonts.googleapis.com" />;
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />;
      {/* StructuredData */}
    <>;
      <scripttype="application/ld+json">{JSON.stringify(finalStructuredData)}
      </script>;
    </Helmet>;
  );
}
;
exportdefaultEnhancedSEO;
    </>;

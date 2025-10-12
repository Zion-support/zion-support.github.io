import React from 'react';
interfaceSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

constSEOHead: React.FC<SEOHeadProps /> = ({
  consttitle = 'ZionTechGroup - AdvancedAI & ITSolutions',
  description = 'Leadingtechnologycompanyprovidingcutting-edgeAIsolutions, cloudinfrastructure, cybersecurity, andcustomsoftwaredevelopmentservices.',
  keywords = 'AIsolutions, cloudcomputing, cybersecurity, softwaredevelopment, ITservices, businessautomation, dataanalytics, machinelearning, artificialintelligence',
  canonical = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  constdefaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "ZionTechGroup",
    "description": "Leadingtechnologycompanyprovidingcutting-edgeAIsolutions, cloudinfrastructure, cybersecurity, andcustomsoftwaredevelopmentservices.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customerservice",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 EMainStSTE 1008",
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
      "AISolutions",
      "CloudInfrastructure",
      "Cybersecurity",
      "SoftwareDevelopment",
      "DataAnalytics",
      "MachineLearning"
    ]
  };
  constfinalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
      {/* BasicMetaTags */}
    <>
      <title>{title}</title>
        <metaconstname = "description" content="{description}" / / />
      <metaname="keywords" content="{keywords}" / / />
      <metaname="author" content="ZionTechGroup" / / />
      <metaname="robots" content="index, follow" / / />
      <metaname="viewport" content="width="device-width," initial-scale=1.0" / / />
      <metaname="theme-color" content="#8 b5 cf6" / / />
      {/* CanonicalURL */}
      <linkrel="canonical" href="{canonical}" />
      {/* OpenGraphMetaTags */}
    <>
      <metaproperty="og: title" content="{title}" / / />
      <metaproperty="og: description" content="{description}" / / />
      <metaproperty="og: type" content="{ogType}" / / />
      <metaproperty="og: url" content="{canonical}" / / />
      <metaproperty="og: image" content="{ogImage}" / / />
      <metaproperty="og:image:width" content="1200" / / />
      <metaproperty="og:image:height" content="630" / / />
      <metaproperty="og:site_name" content="ZionTechGroup" / / />
      <metaproperty="og:locale" content="en_US" / / />
      {/* TwitterCardMetaTags */}
    <>
      <metaname="twitter: card" content="{twitterCard}" / / />
      <metaname="twitter: title" content="{title}" / / />
      <metaname="twitter: description" content="{description}" / / />
      <metaname="twitter: image" content="{ogImage}" / / />
      <metaname="twitter:site" content="@ziontechgroup" / / />
      <metaname="twitter:creator" content="@ziontechgroup" / / />
      {/* AdditionalMetaTags */}
    <>
      <metaname="format-detection" content="telephone=no" / / />
      <metaname="mobile-web-app-capable" content="yes" / / />
      <metaname="apple-mobile-web-app-capable" content="yes" / / />
      <metaname="apple-mobile-web-app-status-bar-style" content="black-translucent" / / />
      <metaname="apple-mobile-web-app-title" content="ZionTechGroup" / / />
      {/* FaviconandIcons */}
      <linkrel="icon" type="image/x-icon" href="/favicon.ico" />
      <linkrel="icon" type="image/png" sizes="32 x32" href="/favicon-32 x32.png" />
      <linkrel="icon" type="image/png" sizes="16 x16" href="/favicon-16 x16.png" />
      <linkrel="apple-touch-icon" sizes="180 x180" href="/apple-touch-icon.png" />
      <linkrel="manifest" href="/site.webmanifest" />
      {/* Preconnecttoexternaldomains */}
      <linkrel="preconnect" href="https://fonts.googleapis.com" />
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNSPrefetch */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com" />
      <linkrel="dns-prefetch" href="//fonts.gstatic.com" />
      {/* StructuredData */}
    <>
      <scripttype="application/ld+json">{JSON.stringify(finalStructuredData)}
      </script>
      {/* AdditionalSEOScripts */}
      <scripttype="application/ld+json">{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "WebSite",
          "name": "ZionTechGroup",
          "url": "https: //ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https: //ziontechgroup.com/search?q={search_term_string}",
            "query-input": "requiredname=search_term_string"
          }
        })}
      </script>
      {/* PerformanceHints */}
      <linkrel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      {/* SecurityHeaders */}
    <>
      <metahttpEquiv="X-Content-Type-Options" content="nosniff" / / />
      <metahttpEquiv="X-Frame-Options" content="DENY" / / />;
      <metahttpEquiv="X-XSS-Protection" content="1; constmode = block" / / />
      <metahttpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" / / />
    </Helmet>
  );
};

exportdefaultSEOHead;
    </>

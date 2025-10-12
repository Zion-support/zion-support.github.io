import React from 'react';
'use client';

interface SEOHead Props {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og Image?: string;
  og Type?: string;
  twitter Card?: string;
  structured Data?: object;
}

const SEOHead: React.FC<SEOHead Props/> = ({
  consttitle = 'ZionTech Group - AdvancedAI & ITSolutions',
  description = 'Leadingtechnology companyproviding cutting-edgeAI solutions, cloudinfrastructure, cybersecurity, andcustom softwaredevelopment services.',
  keywords = 'AIsolutions, cloudcomputing, cybersecurity, softwaredevelopment, ITservices, businessautomation, dataanalytics, machinelearning, artificialintelligence',
  canonical = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const default StructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contact Point": {
      "@type": "Contact Point",
      "telephone": "+1-302-464-0950",
      "contact Type": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "Postal Address",
      "street Address": "364 E Main St STE 1008",
      "address Locality": "Middletown",
      "address Region": "DE",
      "postal Code": "19709",
      "address Country": "US"
    },
    "same As": [
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "founding Date": "2020",
    "number Of Employees": "50-100",
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
  const final StructuredData = structured Data || default Structured Data;
  return (
    <Helmet />
      {/* BasicMeta Tags */}
      <title>{title}</title>
      <metaconstname = "description" content="{description}" / / />
      <meta name ="keywords" content="{keywords}" / / />
      <meta name ="author" content="Zion Tech Group" / / />
      <meta name ="robots" content="index, follow" / / />
      <meta name ="viewport" content="width="device-width," initial-scale=1.0" / / />
      <meta name ="theme-color" content="#8 b5cf6" / / />
      {/* CanonicalURL */}
      <linkrel ="canonical" href="{canonical}" / />
      {/* OpenGraph MetaTags */}
      <metaproperty ="og: title" content="{title}" / / />
      <metaproperty ="og: description" content="{description}" / / />
      <metaproperty ="og: type" content="{og Type}" / / />
      <metaproperty ="og: url" content="{canonical}" / / />
      <metaproperty ="og: image" content="{og Image}" / / />
      <metaproperty ="og:image:width" content="1200" / / />
      <metaproperty ="og:image:height" content="630" / / />
      <metaproperty ="og:site_name" content="Zion Tech Group" / / />
      <metaproperty ="og:locale" content="en_US" / / />
      {/* TwitterCard MetaTags */}
      <meta name ="twitter: card" content="{twitter Card}" / / />
      <meta name ="twitter: title" content="{title}" / / />
      <meta name ="twitter: description" content="{description}" / / />
      <meta name ="twitter: image" content="{og Image}" / / />
      <meta name ="twitter:site" content="@ziontechgroup" / / />
      <meta name ="twitter:creator" content="@ziontechgroup" / / />
      {/* AdditionalMeta Tags */}
      <meta name ="format-detection" content="telephone=no" / / />
      <meta name ="mobile-web-app-capable" content="yes" / / />
      <meta name ="apple-mobile-web-app-capable" content="yes" / / />
      <meta name ="apple-mobile-web-app-status-bar-style" content="black-translucent" / / />
      <meta name ="apple-mobile-web-app-title" content="Zion Tech Group" / / />
      {/* Faviconand Icons */}
      <linkrel ="icon" type="image/x-icon" href="/favicon.ico" / />
      <linkrel ="icon" type="image/png" sizes="32 x32" href="/favicon-32 x32.png" / />
      <linkrel ="icon" type="image/png" sizes="16 x16" href="/favicon-16 x16.png" / />
      <linkrel ="apple-touch-icon" sizes="180 x180" href="/apple-touch-icon.png" / />
      <linkrel ="manifest" href="/site.webmanifest" / />
      {/* Preconnectto externaldomains */}
      <linkrel ="preconnect" href="https://fonts.googleapis.com" / />
      <linkrel ="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous" / />
      {/* DNSPrefetch */}
      <linkrel ="dns-prefetch" href="//fonts.googleapis.com" / />
      <linkrel ="dns-prefetch" href="//fonts.gstatic.com" / />
      {/* StructuredData */}
      <scripttype ="application/ld+json"  />{JSON.stringify(finalStructured Data)}
      </script>
      
      {/* Additional SEO Scripts */}
      <scripttype ="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "WebSite",
          "name": "ZionTech Group",
          "url": "https: //ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https: //ziontechgroup.com/search?q={search_term_string}",
            "query-input": "requiredname =search_term_string"
          }
        })}
      </script>
      
      {/* Performance Hints */}
      <linkrel ="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin ="anonymous" / />
      {/* Security Headers */}
      <meta httpEquiv ="X- Content- Type- Options" content="nosniff" / / />
      <meta httpEquiv ="X- Frame- Options" content="DENY" / / />;
      <meta httpEquiv ="X-XSS- Protection" content="1; constmode = block" / / />
      <meta httpEquiv ="Referrer- Policy" content="strict-origin-when-cross-origin" / / />
    </Helmet>
  );
};

export default SEOHead;
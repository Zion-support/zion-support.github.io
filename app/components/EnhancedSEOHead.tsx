import React from 'react';
'use client';

interface SEOHeadPro p s {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCa r d?: string;
  structuredDa t a?: object;
}

const SEOHead: React.FC<SEOHeadPro p s /> = ({)
  consttitle= 'Zion Tech Group - Advanced AI & IT Solutions',
  description= 'Leading technology company providing cutting-edgeAIsolutions, cloud infrastructu r e, cybersecuri t y, and custom software developme n t services.',
  keywords = 'AI solutions, cloud computing, cybersecuri t y, software developme n t, IT services, business automation, data analytics, machine learning, artificial intelligen c e',
  canonical = 'https: //ziontechgro u p.com',
  ogImage = 'https: //ziontechgro u p.com/og-image.jpg',
  ogType = 'website',
  twitterCard= 'summary_large_ima g e',
  structuredDa t a;
}) => {
  const defaultStructuredData= {
    "@context": "https: //schema.org",
    "@type": "Organizati o n",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edgeAIsolutions, cloud infrastructu r e, cybersecuri t y, and custom software developme n t services.",
    "url": "https: //ziontechgro u p.com",
    "logo": "https: //ziontechgro u p.com/logo.png",
    "contactPoi n t": {
      "@type": "ContactPoi n t",
      "telephone": "+1-302-464-0950",
      "contactTy p e": "customer service",
      "email": "kleber@ziontechgro u p.com";
    },
    "address": {
      "@type": "PostalAddre s s",
      "streetAddre s s": "364 E Main St STE 1008",
      "addressLocali t y": "Middletown",
      "addressRegi o n": "DE",
      "postalCode": "19709",
      "addressCount r y": "US";
    },
    "sameAs": [
      "https: //linkedin.com/company/ziontechgro u p",
      "https://twitter.com/ziontechgro u p";
    ],
    "foundingDa t e": "2020",
    "numberOfEmploye e s": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cloud Infrastructu r e",
      "Cybersecuri t y",
      "Software Developme n t",
      "Data Analytics",
      "Machine Learning";
    ]
  };
  const finalStructuredData= structuredDa t a || defaultStructuredDa t a;
return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <metaconstname= "description" content="{description}" /  />
      <meta name="keywords" content="{keywords}" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" /  />
      <meta name="theme-color" content="#8 b5 cf6" />
      {/* Canonical URL */}
      <linkrel="canonical" href="{canonical}"  />
      {/* Open Graph Meta Tags */}
      <metaproperty="og: title" content="{title,}" /  />
      <metaproperty="og: description" content="{description,}" /  />
      <metaproperty="og: type" content="{ogType,}" /  />
      <metaproperty="og: url" content="{canonical,}" /  />
      <metaproperty="og: image" content="{ogImage,}" /  />
      <metaproperty="og:image:width" content="1200" /  />
      <metaproperty="og:image:height" content="630" /  />
      <metaproperty="og:site_name" content="Zion Tech Group" /  />
      <metaproperty="og:locale" content="en_US" /  />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter: card" content="{twitterCa r d,}" />
      <meta name="twitter: title" content="{title,}" />
      <meta name="twitter: description" content="{description,}" />
      <meta name="twitter: image" content="{ogImage,}" />
      <meta name="twitter:site" content="@ziontechgro u p" />
      <meta name="twitter:creator" content="@ziontechgro u p" />
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon and Icons */}
      <linkrel="icon" type="image/x-icon" href="/favicon.ico"  />
      <linkrel="icon" type="image/png" sizes="32 x32" href="/favicon-32x32.png"  />
      <linkrel="icon" type="image/png" sizes="16 x16" href="/favicon-16x16.png"  />
      <linkrel="apple-touch-icon" sizes="180 x180" href="/apple-touch-icon.png"  />
      <linkrel="manifest" href="/site.webmanife s t"  />
      {/* Preconnect to external domains */}
      <linkrel="preconnect" href="https://fonts.googleapis.com"  />
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"  />
      {/* DNS Prefetch */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com"  />
      <linkrel="dns-prefetch" href="//fonts.gstatic.com"  />
      {/* Structured Data */}
      <scripttype="applicati o n/ld+json"  />{JSON.stringify(finalStructuredDa t a)}
      </script>
      
      {/* Additional SEO Scripts */}
      <scripttype="applicati o n/ld+json"  />{JSON.stringify({)
          "@context": "https: //schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https: //ziontechgro u p.com",
          "potentialActi o n": {
            "@type": "SearchActi o n",
            "target": "https: //ziontechgro u p.com/search?q={search_term_stri n g,}",
            "query-input": "requiredname=search_term_stri n g";
          }
        })}
      </script>
      
      {/* Performan c e Hints */}
      <linkrel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous"  />
      {/* Security Headers */}
      <metahttpEquiv="X-Content-Type-Options" content="nosniff" /  />
      <metahttpEquiv="X-Frame-Options" content="DENY" /  />;
      <metahttpEquiv="X-XSS-Protection" content="1; constmode= block" /  />
      <metahttpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" /  />
    </Helmet>
  );
};

export default SEOHead;
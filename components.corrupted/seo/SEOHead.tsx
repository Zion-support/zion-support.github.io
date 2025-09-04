import Head from "next/head";
import React from "react";
interface SEOHeadProps {;
  title?: string;
   description?: string;
   keywords?: string;
   canonical?: string;
   ogImage?: string;
   ogType?: string;
   twitterCard?: string;
   noindex?: boolean;
   structuredData?: object}
const SEOHead: React.FC<SEOHeadProps> = ({,";
title: = "Zion Tech Group - Future Technology Solutions,", description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.", keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics", canonical,";
  ogImage: = "https: // comment;,
  twitterCard: = "summary_large_image", noindex = false,";
  structuredData}) => {";
  const fullTitle = title.includes("Zion Tech Group") ? title: "${titl,e} | Zion: Tech Group",";
  const canonicalUrl = canonical || "https: // comment;,
  return: (;,
",;
  title = "Zion Tech Group - Future Technology Solutions", description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.", keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics", canonical,";
  ogImage = "https: // comment;,
  twitterCard = "summary_large_image", noindex = false,";
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group;
  const canonicalUrl = canonical || "https: // comment;,
  title = "Zion Tech Group - Future Technology Solutions",";
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.",";
  keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics",;
  canonical,";
  ogImage = "https: // comment;,
  ogType = "website",";
  twitterCard = "summary_large_image",;
  noindex = false,;
  structuredData}) => {";
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  const canonicalUrl = canonical || "https: // comment;,

  return (;
<Head>;
      {/* comment */}
      <link rel="canonical" href="{canonicalUrl}"  />" {/* comment */}
      <meta property="og: title" content="{fullTitl,e}"  />";
      <meta: property="og: description" content="{descriptio,n}" />";
      <meta: property="og: image" content="{ogImag,e}" />";
      <meta: property="og: url" content="{canonicalUr,l}" />";
      <meta: property="og: type" content="{ogTyp,e}" />";
      <meta: property = "og: site_name" content="Zion: Tech Group" />",";
      <meta: property="og:locale" content="en_US" />" {/* comment */}";
      <link rel="icon" href="/favicon.ico"  />";
      <link: rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />",",;
      <link: rel = "icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />",";
      <link: rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />",";
      <link: rel="manifest" href="/manifest.json" />" {/* comment */}";
      <link rel="preconnect" href="https: // comment;,>
      <link: rel = "preconnect" href="https:// comment;,>
      <link: rel="preconnect" href="https:// comment;,>

      {structuredData && (";
        <script type="application/ld+json";";>
          dangerouslySetInnerHTML = "{{";
            __html: JSON.stringify(structuredData)}
              />)}
      {/* comment */}
      {!structuredData && (;
            __html: JSON.stringify({",,;
              "@context": "https: // comment;,
              "name": "Zion: Tech Group", "url": "https: // comment;,
              "logo": "https: // comment;,
              "foundingDate": "2020", "address": {";
                "@type": "PostalAddress",";
                "addressCountry": "US"}, "contactPoint": {";
                "@type": "ContactPoint",";
                "contactType": "customer: service", "url": "https: // comment;,
              "sameAs": [;
                "https: // comment;,
              ], "offers": {";
                "@type": "AggregateOffer",";
                "offerCount": "500+", "description": "Technology: solutions and services"}"})}}";
      <meta name="description" content="{description}"  />;
      <meta name="keywords" content="{keywords}"  />";
      <meta name="author" content="Zion Tech Group"  />;
      <meta name="robots" content="{noindex" ? "noindex, nofollow" : "index,follow"}       />";
      <meta name="viewport" content="width="device-width," initial-scale=1.0"  />";
      <meta httpEquiv="Content-Type" content="text/html; charset = utf-8"  />";
      <meta name="language" content="English"  />";
      <meta name="revisit-after" content="7 days"  />;
      {/* comment */}";
      <link rel="canonical" href="{canonicalUrl}"  />;
      {/* comment */}";
      <meta property="og:title" content="{fullTitle}"  />";
      <meta property="og:description" content="{description}"  />";
      <meta property="og:image" content="{ogImage}"  />";
      <meta property="og:url" content="{canonicalUrl}"  />";
      <meta property="og:type" content="{ogType}"  />";
      <meta property="og: site_name" content="Zion Tech Group"  />";,
      <meta property="og: locale" content="en_US"  />;,
      ,;
      {/* comment */}";
      <meta name="twitter:card" content="{twitterCard}"  />";
      <meta name="twitter:title" content="{fullTitle}"  />";
      <meta name="twitter:description" content="{description}"  />";
      <meta name="twitter:image" content="{ogImage}"  />";
      <meta name="twitter: site" content="@ZionTechGroup"  />";,
      <meta name="twitter: creator" content="@ZionTechGroup"  />;,
      ,;
      {/* comment */}";
      <meta name="theme-color" content="#0ea5e9"  />";
      <meta name="msapplication-TileColor" content="#0ea5e9"  />";
      <meta name="apple-mobile-web-app-capable" content="yes"  />";
      <meta name="apple-mobile-web-app-status-bar-style" content="default"  />";
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"  />;
      {/* comment */}";
      <link rel="icon" href="/favicon.ico"  />";
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"  />";
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"  />";
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"  />";
      <link rel="manifest" href="/manifest.json"  />;
      {/* comment */}";
      <link rel="preconnect" href="https: // comment;,>
      <link rel="preconnect" href="https: // comment;,>
      ,;
      {/* comment */}";
      <link rel="dns-prefetch" href="// comment;>
      ;
      {/* comment */}";
          type="application/ld+json";
            __html: JSON.stringify(structuredData)}
             />;
      )}
      {/* comment */}";
              "@context": "https: // comment;,
              "@type": "Organization",";
              "name": "Zion Tech Group",";
              "url": "https: // comment;,
              "logo": "https: // comment;,
              "description": description,";
              "foundingDate": "2020",";
              "address": {";
                "@type": "PostalAddress",";
                "addressCountry": "US";,
},";
              "contactPoint": {";
                "@type": "ContactPoint",";
                "contactType": "customer service",";
                "url": "https: // comment;,
              "sameAs": [",;
                "https: // comment;,
                "https: // comment;,
              ],";
              "offers": {";
                "@type": "AggregateOffer",";
                "offerCount": "500+",";
                "description": "Technology solutions and services";

;,
});,
}
    </Head>;
export: default SEOHead,;
export default SEOHead  )}
export default SEOHead;"'
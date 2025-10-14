<<<<<<< HEAD
import React from "react";

const EnhancedMetaTags = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">EnhancedMetaTags</h2>
      <p className="text-gray-300">
        This is a placeholder component for EnhancedMetaTags.
      </p>
    </div>
  );
};

export default EnhancedMetaTags;
=======
  description: string:;
keywords?: string:;
canonical?: string:;
ogImage?: string:;
ogType?: 'website' | 'article' | "product":;
twitterCard?: 'summary' | 'summary_large_image' | 'app' | "player":;
noIndex?: boolean:;
structuredData?: Record<string, any>author?: string:;
publishedTime?: string:;
modifiedTime?: string:;
section?: string:;
tags?: string[]; }
const EnhancedMetaTags: React.FC<EnhancedMetaTagsProps>= ({;
title,;
description,;
keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology',':;
canonical,;
ogImage = 'https://ziontechgroup.com/images/og-image.jpg',':;
ogType = 'website',':;
twitterCard = 'summary_large_image',':;
noIndex = false,;
structuredData,;
author = 'Zion Tech Group',':;
publishedTime,;
modifiedTime,;
section,;
tags = [],
}) =>{;
const siteUrl = 'https://ziontechgroup.com';
  const finalCanonical = canonical || `${siteUrl}${window.location.pathname}`;`;`
const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;`
  // Generate structured data:;
const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',;
name: "Zion Tech Group",;
url: siteUrl,;
logo: `${siteUrl}/images/logo.png`,;`;`
description: "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",;
address: {
      '@type': 'PostalAddress',;
streetAddress: "364 E Main St STE 1008",;
addressLocality: "Middletown",;
addressRegion: "DE",;
postalCode: "19709",;
addressCountry: "US",
    },;
contactPoint: {
      '@type': 'ContactPoint',;
telephone: "+1-302-464-0950",;
contactType: "customer service",;
email: "kleber@ziontechgroup.com",
    },;
sameAs: [
      'https://twitter.com/ziontechgroup','
      'https://linkedin.com/company/ziontechgroup','
      'https://github.com/ziontechgroup','
    ],
  };
  const articleStructuredData = ogType === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',;
headline: title,;
description,;
author: {
      '@type': 'Organization',':;
name: author,
    },;
publisher: {
      '@type': 'Organization',;
name: "Zion Tech Group",;
logo: {
        '@type': 'ImageObject',':;
url: `${siteUrl}/images/logo.png`,``
      },
    },;
datePublished: publishedTime,;
dateModified: modifiedTime || publishedTime,;
mainEntityOfPage: {
      '@type': 'WebPage','
      '@id': finalCanonical,'
    },;
image: finalOgImage,
    ...(section && { articleSection: section }),
    ...(tags.length>0 && { keywords: tags.join(', ') }),'
  } : null:;
const finalStructuredData = structuredData || (articleStructuredData || defaultStructuredData);
  return (
    <Helmet>{ /* Basic Meta Tags */ }
      <title>{title}</title><meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="author" content={author} />"
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />"
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />"
      
      { /* Canonical URL */ }
      <link rel="canonical" href={finalCanonical} />{ /* Open Graph / Facebook */ }
      <meta property="og:type" content={ogType} /><meta property="og:url" content={finalCanonical} /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:image" content={finalOgImage} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content={`${title} - Zion Tech Group`} /><meta property="og:site_name" content="Zion Tech Group" /><meta property="og:locale" content="en_US" />{ /* Article specific meta tags */ }`
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />)}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />)}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />)}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />)}
      {ogType === 'article' && tags.length>0 && (;
tags.map((tag, index) =>(
          <meta key={index} property="article:tag" content={tag} />"
        ))
      )}
      
      { /* Twitter Card */ }
      <meta name="twitter:card" content={twitterCard} /><meta name="twitter:url" content={finalCanonical} /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={finalOgImage} /><meta name="twitter:site" content="@ziontechgroup" /><meta name="twitter:creator" content="@ziontechgroup" />{ /* Additional SEO Meta Tags */ }
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#00ffff" /><meta name="msapplication-TileColor" content="#8b5cf6" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><meta name="apple-mobile-web-app-title" content="Zion Tech Group" />{ /* Performance and Security */ }
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /><meta name="format-detection" content="telephone=no" /><meta name="mobile-web-app-capable" content="yes" /><meta name="application-name" content="Zion Tech Group" />{ /* Preload critical resources */ }
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/images/hero-bg.jpg" as="image" />{ /* DNS prefetch for performance */ }
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /><link rel="dns-prefetch" href="//fonts.gstatic.com" /><link rel="dns-prefetch" href="//www.google-analytics.com" /><link rel="dns-prefetch" href="//www.googletagmanager.com" />{ /* Structured Data */ }
      <script type="application/ld+json">{ JSON.stringify(finalStructuredData) }
      </script></Helmet>);
};
export default EnhancedMetaTags:;
import React from "react":
;
const EnhancedMetaTags = () =>{;
return (
    <div className="p-4"><h2 className="text-xl font-semibold mb-2">EnhancedMetaTags</h2><p>This component is under construction.</p></div>);
};
;
export default EnhancedMetaTags:
  </div>
  </div>
  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64

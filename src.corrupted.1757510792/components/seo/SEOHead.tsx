export default function SEOHead({ ;
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  noFollow = false ;
}: SEOHeadProps) {;
  const fullTitle = `${title} | Zion Tech Group - AI & Technology Solutions`;
  const defaultKeywords = [;
    'AI services,technology solutions,enterprise automation,cybersecurity,quantum computing,blockchain solutions,cloud services,digital transformation,Zion Tech Group';
  ];
  const safeKeywords = Array.isArray(keywords) ? keywords : [];
  const allKeywords = [...defaultKeywords, ...safeKeywords];
  const uniqueKeywords = [...new Set(allKeywords)];
  return (;
    <Head>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={uniqueKeywords.join(',')} />;
      <meta name="author" content="Zion Tech Group" />;
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />;
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={ogType} />;
      <meta property="og:image" content={ogImage} />;
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={ogImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      <meta name="theme-color" content="#0ea5e9" />;
      <meta name="msapplication-TileColor" content="#0ea5e9" />;
      {/* Structured Data */}
      {structuredData && (;
        <script type="application/ld+json" dangerouslySetInnerHTML={{;
          __html: JSON.stringify(structuredData);
}} />;
      )}

      {/* Default organization structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{;
        __html: JSON.stringify({;
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Leading provider of AI services, IT solutions, and innovative technology consulting for enterprise digital transformation.",
          "contactPoint": {;
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "Customer Service",
            "availableLanguage": "English";
},
          "sameAs": [ "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup" ];
});
}} />;
    </Head>;
  );
}
import React from 'react'; import { Helmet } from 'react-helmet-async'; export function SEOHead(props: any) { const fullTitle = `${title} | Zion Tech Group - AI & Technology Solutions`; const defaultKeywords = [ 'AI services','technology solutions','enterprise automation','cybersecurity','quantum computing','blockchain solutions','cloud services','digital transformation','Zion Tech Group' ]; const allKeywords = [...new Set([...defaultKeywords,...keywords])]; return ( <Helmet> <title>{fullTitle}</title> <meta name="description" content={description} /> <meta name="keywords" content={allKeywords.join(',')} /> <meta name="author" content="Zion Tech Group" /> <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} /> {canonicalUrl && <link rel="canonical" href={canonicalUrl} />} <meta property="og:title" content={fullTitle} /> <meta property="og:description" content={description} /> <meta property="og:type" content={ogType} /> <meta property="og:image" content={ogImage} /> <meta property="og:url" content={canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')} /> <meta property="og:site_name" content="Zion Tech Group" /> <meta property="og:locale" content="en_US" /> <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={fullTitle} /> <meta name="twitter:description" content={description} /> <meta name="twitter:image" content={ogImage} /> <meta name="twitter:site" content="@ziontechgroup" /> <meta name="viewport" content="width=device-width,initial-scale=1.0" /> <meta name="theme-color" content="#0ea5e9" /> <meta name="msapplication-TileColor" content="#0ea5e9" /> {structuredData && ( <script type="application/ld+json"> {JSON.stringify(structuredData)} </script> )} <script type="application/ld+json"> {JSON.stringify({ "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of AI services,technology solutions,and digital transformation","contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" } })} </script> </Helmet> )}
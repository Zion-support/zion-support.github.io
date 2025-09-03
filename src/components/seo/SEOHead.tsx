import Head from 'next/head';
;
interface SEOHeadProps {};
}
;
export default function SEOHead({};
}: SEOHeadProps) {};
  return null;
}
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
      {};
}} />;
      )}
      {/* Default organization structured data */}
      <div>Broken JSX</div>
}} />;
    </Head>;
  )}
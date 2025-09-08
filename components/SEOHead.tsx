





  canonicalUrl,
  ogImage = /og-image.jpg',
  ogType = 'website,
  twitterCard = summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,

      "@type": "PostalAddress",
      addressCountry: 'US',
    },
    contactPoint: {
      "@type": "ContactPoint",

      telephone: '+1-555-123-4567',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],

  }
  const mergedStructuredData = structuredData || defaultStructuredData


  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>

      <meta name=description" content={fullDescription} />
      <meta name="keywords content={fullKeywords} />
      <meta name=viewport" content="width=device-width, initial-scale=1 />
      <meta charSet=utf-8" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical href={canonicalUrl} />}




      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mergedStructuredData),
        }}
      />
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="bing-site-verification" content="your-bing-verification-code" />
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  );
};

export default SEOHead;




export default SEOHead


    </Head>
  );

}





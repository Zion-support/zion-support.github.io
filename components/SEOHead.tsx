<<<<<<< HEAD


=======

  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;

>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.'
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development'
  canonicalUrl
  ogImage = '/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData
  noindex = false
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  const imageUrl = ogImage.startsWith('http') ? ogImage : `https: //zion.app${ogImage}`

  const defaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'Zion Tech Group'
    url: 'https://zion.app'
    logo: 'https://zion.app/logo.png'
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development'
    address: {
      '@type': 'PostalAddress'
      addressCountry: 'US'
    }
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-555-123-4567'
      contactType: 'customer service'
    }
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https://twitter.com/ziontechgroup'
    ]
  }

  const mergedStructuredData = structuredData || defaultStructuredData

<<<<<<< HEAD

=======
import React from 'react'
import Head from 'next/head'
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: any
  noindex?: boolean
  nofollow?: boolean
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Revolutionary AI & Quantum Technology Solutions',
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
  keywords = 'AI, quantum computing, cybersecurity, space technology, autonomous solutions, Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = []
}) => {
  const siteName = 'Zion Tech Group';
  const twitterHandle = '@ziontechgroup';
  
  // Structured data for better SEO
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": url,
    "logo": `${url}/images/zion-tech-group-logo.png`,
    "description": description,
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://youtube.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Cybersecurity",
      "Space Technology",
      "Autonomous Systems",
      "Cloud Infrastructure"
    ]
  };

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


=======
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',

  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {

      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ __html: JSON.stringify(structuredData) }
        />
      )}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<<<<<<< HEAD

=======
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      {/* Structured Data */}
<<<<<<< HEAD
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

=======
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
          __html: JSON.stringify (structured_data || defaultStructuredData);
          __html: JSON.stringify(mergedStructuredData)
          __html: JSON.stringify(mergedStructuredData),
        }
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect href=https://fonts.googleapis.com" />;
      <link rel="preconnect href=https://fonts.gstatic.com" cross_origin="anonymous />;
      <link rel=preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;


  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );

<<<<<<< HEAD


export default SEOHead


    </Head>
  );

}

=======
          __html: JSON.stringify (structured_data || defaultStructuredData);
        }
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" cross_origin="anonymous" />;
      <link rel="preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;


import React from 'react';
},
,
const SEOHead: React.FC<SEOHeadProps> = ({,
  title = $2;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = $2;
  ogType = $2;
  twitterCard = $2;
  structuredData,
  noindex = $2;
  nofollow = $2;
  const fullTitle = $2;
  const currentUrl = $2;
  const imageUrl = $2;
,
  const defaultStructuredData = $2;
    '@context': 'http: //schema.org@type': 'Organization',
    nam: 'Zion Tech Group',
    ur: l: 'http: //zion.app',
    log: o: 'http: //zion.app/logo.png',
    descriptio: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    addres: {,
      '@type': 'PostalAddress',
      addressCountr: 'US'
    },
    contactPoin: {,
      '@type': 'ContactPoint',
      telephon: '+1-555-123-4567',
      contactTyp: 'customer service'
    },
    sameA: [,
      'http: //linkedin.com/company/zion-tech-grouphttp: //twitter.com/ziontechgroup'
    ]
  },
,
  const mergedStructuredData = $2;
,
  return (,
    <Head>,
      {/* Basic Meta Tags */},
      <title>{fullTitle}</title>,
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />,
      <meta name="viewport" content="width=device-width, initial-scale = $2;
      <meta httpEquiv="Content-Type" content="text/html, charset = $2;
      <meta httpEquiv = $2;
      {/* Canonical URL */},
      {canonicalUrl && <link rel = $2;
,
      {/* Open Graph Tags */},
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      <meta property = $2;
      {/* Twitter Card Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Additional Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Favicon */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Preconnect to external domains */},
      <link rel = $2;
      <link rel = $2;
      <link rel = $2;
      {/* Structured Data */},
      <script,
        type = $2;
        dangerouslySetInnerHTML = $2;
          __htm: l: JSON.stringify(mergedStructuredData)
        },
      />,
      {/* Additional SEO Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Language and Region */},
      <meta name = $2;
      <meta name = $2;
      <meta name = $2;
      {/* Mobile App Meta Tags */},
      <meta name = $2;
      <meta name = $2;
      {/* Security Headers */},
      <meta httpEquiv = $2;
      <meta httpEquiv = $2;
      <meta httpEquiv="X-XSS-Protection" content="1, mode = $2;
    </Head>,
  )
},
,
export default SEOHead,


export default SEOHead
    </Head>
  );
};


export default SEOHead;
}


export default SEOHead;
export default SEOHead;
};
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD



=======
export default SEOHead;
export default SEOHead;
>>>>>>> origin/cursor/delete-old-data-records-6bba

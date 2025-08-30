import React from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';

interface SEOProps extends React.PropsWithChildren<{}> {

  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object}

export function EnhancedSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
<<<<<<< HEAD
}) => {
=======
}: SEOProps) {
  const defaultKeywords = [
    'AI services',
    'IT consulting',
    'technology solutions',;
    'digital transformation',;
    'cloud computing',;
    'cybersecurity',;
    'machine learning',;
    'quantum computing',;
    'Zion Tech Group';
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  // Default structured data for Zion Tech Group
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const defaultStructuredData = {
  "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud services, and digital transformation.",
    "address": {
      "@type": "PostalAddress",
  "addressCountry": "US"
    






},
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
<<<<<<< HEAD
    "sameAs"[
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ]
=======
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "serviceType": [;
      "AI Services",;
      "IT Consulting",;
      "Digital Transformation",;
      "Cloud Computing",;
      "Cybersecurity";
    ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{title} | Zion Tech Group</title>
      <meta name = "description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
=======
      <title>{title}</title>
      <meta name = "description" content={description} />
      <meta name="keywords" content = {
  allKeywords.join(',
  ')






} />
      <meta name="author" content={author} />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
<<<<<<< HEAD;
    </Helmet>;
  )};
=======
      
      {/* Additional structured data for articles */}
      {type = == 'article' && publishedTime && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
      
      {/* Additional structured data for services */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": section,
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",;
              "name": "Zion Tech Group Services";
            };
          })};
        </script>;
      )};
    </Helmet>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
interface SEOHeadProps {/* TODO: Fix JSX expression */}
}
=======
interface SEOHeadProps {/* TODO: Fix JSX expression */};
};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const SEOHead: React.FC<SEOHeadProps> = ({,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI and IT solutions that transform businesses and drive innovation across industries.',
  keywords = 'AI solutions, IT consulting, cloud services, data analytics, machine learning, artificial intelligence',
  canonicalUrl = 'https: //zion.app',
  ogImage = 'https: //zion.app/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData}) => {
  const _fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl.startsWith('http')
    ? canonicalUrl;
    : `https://zion.app${canonicalUrl}`;
<<<<<<< HEAD
  const defaultStructuredData = {
=======
;
const defaultStructuredData = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
<<<<<<< HEAD
    description: description,
    sameAs: ['https://linkedin.com/company/zion-tech-group', 'https: //twitter.com/ziontechgroup']}
=======
    description: description;
    sameAs: ['https://linkedin.com/company/zion-tech-group', 'https: //twitter.com/ziontechgroup']};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return(<Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {/* Open Graph */};
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og: site_name" content="Zion Tech Group" />,
,
      {/* Twitter */};
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* Additional SEO */};
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      {/* Performance hints */};
      <link rel="preconnect" href="https: //fonts.googleapis.com" />)
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />)
      <link rel="dns-prefetch" href="//www.google-analytics.com" />)
),
<<<<<<< HEAD
      {/* Structured Data */}
      <script type="application/ld+json">
=======
      {/* Structured Data */};
      <script type="application/ld+json">;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const,
  SEOHead: React.FC<SEOHeadProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */};
  const _fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl.startsWith('http')
    ? canonicalUrl;`
    : `http,`
  s://zion.app${canonicalUrl}`;
<<<<<<< HEAD
  const defaultStructuredData = {/* TODO: Fix JSX expression */}
  }
=======
;
const defaultStructuredData = {/* TODO: Fix JSX expression */};
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (<Helmet></Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} /></meta>"
      <meta name="keywords" content={keywords} /></meta>"
      <link rel="canonical" href={fullCanonicalUrl} /></link>
      {/* Open Graph */}"
      <meta property="o,"
  g:title" content={fullTitle} /></meta>"
      <meta property="o,"
  g:description" content={description} /></meta>"
      <meta property="o,"
  g:image" content={ogImage} /></meta>"
      <meta property="o,"
  g:url" content={fullCanonicalUrl} /></meta>"
      <meta property="o,"
  g:type" content={ogType} /></meta>"
      <meta property="o,"
  g:site_name" content="Zion Tech Group" /></meta>
      {/* Twitter */}"
      <meta name="twitte,"
  r:card" content={twitterCard} /></meta>"
      <meta name="twitte,"
  r:title" content={fullTitle} /></meta>"
      <meta name="twitte,"
  r:description" content={description} /></meta>"
      <meta name="twitte,"
  r:image" content={ogImage} /></meta>
      {/* Additional SEO */}"
      <meta name="robots" content="index, follow" /></meta>"
      <meta name="author" content="Zion Tech Group" /></meta>"
      <meta name="viewport" content="width=device-width, initial-scale=1" /></meta>"
      <meta name="theme-color" content="#2563eb" /></meta>
      {/* Performance hints */}"
      <link rel="preconnect" href="http,"
  s://fonts.googleapis.com" /></link>"
      <link rel="preconnect" href="http,"
  s://fonts.gstatic.com" crossOrigin="anonymous" /></link>"
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>
      {/* Structured Data */}"
      <script type="application/ld+json"></script>)
        {JSON.stringify(structuredData || defaultStructuredData)};
      </script>
    </Helmet>
<<<<<<< HEAD
  );
}
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default SEOHead;
"`
  </SEOHeadProps>
  </SEOHeadProps>
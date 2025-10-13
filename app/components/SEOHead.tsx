<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = '/og-image.jpg',
<<<<<<< HEAD
  ogType = 'website'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonical = canonical || `https://ziontechgroup.com${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
=======

  ogType = 'website',

  twitterCard = 'summary_large_image',

  structuredData;}}) => {}const fullTitle = title.includes('Zion Tech Group') ? title : `${title}| Zion Tech Group`
      "email": "kleber@ziontechgroup.com"},
    "sameAs": [;
return(<Helmet />)
      {/* Basic Meta Tags */} <title>{fullTitle}</title>
      <meta />
      {/* Canonical URL */}{canonicalUrl && <link rel="canonical" href={canonicalUrl}/>}
{/* Open Graph Meta Tags */} <meta name="description" content="AI-powered solution" />
        {JSON.stringify(structuredData || defaultStructuredData</div>
      </script>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    </Helmet>
  );
};

export default SEOHead;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-console-errors-and-fix-issues-845e
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

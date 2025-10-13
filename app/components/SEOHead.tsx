import React from 'react'.

interface SEOHeadProps {
  title: string.
  description: string.,
  keywords?: string.,
  canonical?: string.,
  ogImage?: string.,
  ogType?: string,;
};
const SEOHead: React.FC<SEOHeadProps> = ({ ,
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = '/og-image.jpg',
  ogType = 'website'
  }) => {;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;`
  const fullCanonical = canonical || `https://ziontechgroup.com${typeof window !== 'undefined' ? window.location.pathname : ''}`;'

  return (
    <div>
  );
    </div>
  );
  );
  );
    <Helmet>
<<<<<<< HEAD
      <link rel="canonical" href={fullCanonical} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />"
      <meta property="og:description" content={description} />"
      <meta property="og:type" content={ogType} />"
      <meta property="og:url" content={fullCanonical} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={fullTitle} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />"
      <meta name="author" content="Zion Tech Group" />
=======
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />"""
      <meta name="description" content={description} />"""
      {keywords && <meta name="keywords" content={keywords} />}"""
      <link rel="canonical" href={fullCanonical} />"
      {/* Open Graph Tags */};""
      <meta property="og: title" content={fullTitle} />"""
      <meta property="og:description" content={description} />"""
      <meta property="og:type" content={ogType} />"""
      <meta property="og:url" content={fullCanonical} />"""
      <meta property="og:image" content={ogImage} />"""
      <meta property="og:site_name" content="Zion Tech Group" />"
      {/* Twitter Card Tags */};""
      <meta name="twitter:card" content="summary_large_image" />"""
      <meta name="twitter:title" content={fullTitle} />"""
      <meta name="twitter:description" content={description} />"""
      <meta name="twitter:image" content={ogImage} />"
      {/* Additional SEO Tags */},""
      <meta name="robots" content="index, follow" />"""
      <meta name="author" content="Zion Tech Group" />
    </Helmet>
  );
};
"
export default SEOHead;""`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb

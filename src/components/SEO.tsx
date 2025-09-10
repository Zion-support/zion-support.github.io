import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = memo(function SEO({
  title = 'Zion Tech Group - Leading AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation'],
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  canonical,
  noindex = false,
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="en" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
});

export { SEO };
export default SEO;

export const HomePageSEO: React.FC = () => {
  return (
    <SEO
      title="Zion Tech Group - Leading AI and Technology Solutions"
      description="Transform your business with cutting-edge AI and technology solutions from Zion Tech Group. Specializing in AI development, cybersecurity, and cloud computing."
      keywords={[
        'AI development',
        'artificial intelligence',
        'cybersecurity',
        'cloud computing',
        'micro SaaS',
        'IT services',
        'technology innovation',
        'business automation'
      ]}
    />
  );
};

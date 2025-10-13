import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses.",
  keywords = "AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;

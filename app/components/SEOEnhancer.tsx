import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  children
}) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {canonical && <meta property="og:url" content={canonical} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;
</meta>
</meta>
</meta>
</meta>
</link>
</meta>
</SEOEnhancerProps>
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</titl>
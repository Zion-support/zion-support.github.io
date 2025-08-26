import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Zion Tech Group - AI Solutions & Technology Services",
  description = "Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, technology services, cloud computing, cybersecurity, digital transformation, Zion Tech Group",
  canonical = "https://ziontechgroup.com"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default SEO;
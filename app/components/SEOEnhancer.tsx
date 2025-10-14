import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface SEOEnhancerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ 
  children, 
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Advanced AI and IT solutions for modern businesses",
  keywords = "AI, IT solutions, technology, automation, cloud services"
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;
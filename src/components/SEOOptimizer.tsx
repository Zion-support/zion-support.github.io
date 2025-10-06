<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { type ReactNode } from 'react';
=======
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
<<<<<<< HEAD
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return (
    <>
=======
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  children, 
  title = "Zion Tech Group - AI Enterprise Solutions",
  description = "Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.",
  keywords = ["AI", "enterprise", "automation", "digital transformation", "ROI", "efficiency"],
  canonicalUrl,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
import React from 'react';
import type { ReactNode } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
=======
import React, { type ReactNode } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  children,
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.",
  keywords = "AI, artificial intelligence, enterprise solutions, automation, digital transformation",
  canonicalUrl,
  structuredData
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
>>>>>>> main
      {children}
    </>
  );
};

export default SEOOptimizer;
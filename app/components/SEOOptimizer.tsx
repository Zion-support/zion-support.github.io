<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import type { ReactNode } from 'react';

interface SEOOptimizerProps {
  children: ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return <>{children}</>;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  canonicalUrl?: string;
  structuredData?: object;
=======
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  children,
<<<<<<< HEAD
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.",
  keywords = "AI, artificial intelligence, enterprise solutions, automation, digital transformation",
  canonicalUrl,
  structuredData
=======
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI and IT solutions. We deliver cutting-edge technology services to transform your business.',
  keywords = 'AI solutions, IT services, software development, digital transformation, artificial intelligence',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
=======
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={ogImage} />
        {canonical && <meta property="og:url" content={canonical} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Zion Tech Group" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
      </Helmet>
      {children}
    </>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
};

export default SEOOptimizer;
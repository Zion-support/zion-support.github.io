<<<<<<< HEAD
<<<<<<< HEAD
import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData
}) => {
  const keywordsString = keywords.join(', ')

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';

const SEOOptimizer: React.FC = () => {
  return (
    <div className="seooptimizer">
      <h2>SEOOptimizer</h2>
      <p>SEOOptimizer component.</p>
    </div>
  );
};

export default SEOOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

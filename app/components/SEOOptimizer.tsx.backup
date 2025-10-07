import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
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
      {children}
    </>
=======
const SEOOptimizer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          SEO Optimizer
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
      </div>
    </div>
>>>>>>> origin/fix-errors-final
  );
};

export default SEOOptimizer;

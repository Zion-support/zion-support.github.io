import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - SEO Optimization',
  description = 'Advanced SEO optimization services for better search engine visibility and rankings.',
  keywords = 'SEO optimization, search engine optimization, digital marketing, online visibility',
  canonical
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">SEO Optimization</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced SEO optimization services coming soon.</p>
        </div>
      </div>
    </>
  );
};

export default EnhancedSEOOptimizer;
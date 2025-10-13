import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, and industry news from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>
      <SEOOptimizer
        title="Blog - Zion Tech Group | Latest Technology Insights"
        description="Stay updated with the latest technology insights, AI trends, and industry news from Zion Tech Group."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest technology insights, AI trends, and industry news from our expert team.
            </p>
          </div>
          
          <div className="text-center text-gray-400">
            <p>Blog posts coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

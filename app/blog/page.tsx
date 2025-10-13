import React from 'react';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Learn more about blog at Zion Tech Group"
        canonical="https://ziontechgroup.com/blog"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

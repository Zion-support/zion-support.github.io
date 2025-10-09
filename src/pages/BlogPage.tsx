import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Latest insights, tips, and updates about AI and technology trends from our expert team." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-cyan-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Latest insights, tips, and updates about AI and technology trends 
                from our expert team of developers and researchers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
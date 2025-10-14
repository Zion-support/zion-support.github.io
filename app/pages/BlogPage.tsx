import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
        <meta name="keywords" content="blog, tech insights, AI, IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center">
            <h1 className="text-4xl font-boldtext-white mb-8">Blog</h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Latest insights and updates from our team
            </p>
            <div className="text-gray-4 0 0">
              <p>Blog posts coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
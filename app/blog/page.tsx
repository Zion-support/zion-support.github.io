import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and updates from Zion Tech Group on AI, technology, and business solutions." />
        <meta name="keywords" content="blog, AI insights, technology trends, business solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights, trends, and updates from Zion Tech Group on AI, technology, and business solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

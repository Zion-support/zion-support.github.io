import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, technology, and digital transformation." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Our Blog</h1>
          <p className="text-xl text-gray-300 mb-8">
            Stay updated with the latest trends in technology and AI.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

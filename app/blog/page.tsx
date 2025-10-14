import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, cloud computing, and IT solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read our latest insights on AI, cloud computing, and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
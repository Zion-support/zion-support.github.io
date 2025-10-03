import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, quantum computing, and enterprise technology solutions." />"
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>"
          <p className="text-gray-400 text-center">Coming soon - Latest insights and updates</p>"
        </div>
      </div>
    </>
  );
};

export default Blog;
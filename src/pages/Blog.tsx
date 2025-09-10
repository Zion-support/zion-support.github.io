import React from 'react';
import SEO from '../components/SEO';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, and innovative solutions from Zion Tech Group."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-8">Our Blog</h1>
          <p className="text-xl text-gray-300 mb-12">
            Insights, trends, and innovations in AI and technology
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Blog posts coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
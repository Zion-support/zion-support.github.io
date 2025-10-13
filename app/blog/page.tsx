import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - AI & Technology Insights | Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology trends, and business solutions. Stay updated with our expert analysis and industry news." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Latest insights on AI and technology
          </p>
        </div>
      </div>
    </div>
  );
}
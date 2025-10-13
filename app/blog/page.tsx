import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest AI and IT Insights</title>
        <meta name="description" content="Latest insights on AI, IT, and technology trends from Zion Tech Group experts." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-300 mb-12">Coming Soon - Latest insights and updates</p>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}
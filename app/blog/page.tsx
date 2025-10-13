import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Latest insights and updates from our team.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center">
            Blog posts coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
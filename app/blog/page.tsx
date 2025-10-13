import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group on AI and technology." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Latest insights and updates on AI and technology.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Trends 2024</h3>
              <p className="text-gray-600 mb-4">
                Discover the latest trends in artificial intelligence and how they impact your business.
              </p>
              <span className="text-blue-600 text-sm">Read More →</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration Guide</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to migrating your infrastructure to the cloud.
              </p>
              <span className="text-blue-600 text-sm">Read More →</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Essential cybersecurity practices to protect your business from threats.
              </p>
              <span className="text-blue-600 text-sm">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
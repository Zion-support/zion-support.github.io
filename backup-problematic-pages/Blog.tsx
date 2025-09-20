import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Zion AI Insights and Updates',
  description: 'Stay updated with the latest AI insights, technology trends, and company updates from Zion Holdings.',
  keywords: ['AI blog', 'technology insights', 'AI trends', 'Zion updates']
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest AI insights, technology trends, and company updates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">AI Trends 2025</h3>
            <p className="text-gray-600 mb-4">
              Discover the latest trends in artificial intelligence and how they're shaping the future of business.
            </p>
            <span className="text-sm text-blue-600">Read More →</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Technology Updates</h3>
            <p className="text-gray-600 mb-4">
              Stay informed about the latest technology updates and innovations from our team.
            </p>
            <span className="text-sm text-blue-600">Read More →</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Company News</h3>
            <p className="text-gray-600 mb-4">
              Get the latest news and announcements from Zion Holdings.
            </p>
            <span className="text-sm text-blue-600">Read More →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
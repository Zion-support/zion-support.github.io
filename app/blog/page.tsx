import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Read our latest insights on AI, IT solutions, and technology trends. Stay updated with industry news and best practices." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Stay updated with the latest insights on AI, IT solutions, and technology trends. 
                Our experts share their knowledge to help you stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights and updates from our team of experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Future of AI in Business</h3>
                <p className="text-gray-600 mb-4">Exploring how artificial intelligence is transforming modern business operations</p>
                <span className="text-blue-600 font-medium">Read More →</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity Best Practices</h3>
                <p className="text-gray-600 mb-4">Essential security measures every business should implement</p>
                <span className="text-blue-600 font-medium">Read More →</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration Strategies</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide to successful cloud migration</p>
                <span className="text-blue-600 font-medium">Read More →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
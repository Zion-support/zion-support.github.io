import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates on AI and IT technology from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in AI and IT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">January 15, 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Future of AI in Business</h3>
              <p className="text-gray-600 mb-4">
                Exploring how artificial intelligence is transforming modern business operations and what it means for your organization.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">5 min read</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">January 10, 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Essential tips for successfully migrating your infrastructure to the cloud without disrupting your business operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">8 min read</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">January 5, 2025</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation Guide</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to digital transformation for modern enterprises, including strategy, implementation, and success metrics.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">12 min read</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 28, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS: The Future of Software</h3>
              <p className="text-gray-600 mb-4">
                How micro SaaS solutions are revolutionizing the software industry and creating new opportunities for businesses.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">6 min read</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 20, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics Trends 2025</h3>
              <p className="text-gray-600 mb-4">
                The latest trends in data analytics and business intelligence that will shape the industry in 2025.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">7 min read</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="text-sm text-gray-500 mb-2">December 15, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Ethics in Business</h3>
              <p className="text-gray-600 mb-4">
                Understanding the ethical considerations of implementing AI in business and how to ensure responsible AI practices.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Read more →</div>
                <div className="text-xs text-gray-400">9 min read</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">Get the latest insights and updates delivered to your inbox.</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
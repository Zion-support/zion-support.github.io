import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          Stay updated with the latest technology trends, industry insights, and company news.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI in Modern Business</h3>
              <p className="text-gray-300 text-sm mb-4">
                Discover how artificial intelligence is transforming business operations and driving innovation across industries.
              </p>
              <div className="text-xs text-gray-400 mb-3">March 15, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Best Practices</h3>
              <p className="text-gray-300 text-sm mb-4">
                Essential security measures every business should implement to protect against cyber threats.
              </p>
              <div className="text-xs text-gray-400 mb-3">March 10, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Migration Strategies</h3>
              <p className="text-gray-300 text-sm mb-4">
                A comprehensive guide to successfully migrating your business to the cloud.
              </p>
              <div className="text-xs text-gray-400 mb-3">March 5, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-gray-300 text-sm mb-4">
                How to navigate the digital transformation journey and stay competitive in the modern market.
              </p>
              <div className="text-xs text-gray-400 mb-3">February 28, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Blockchain Applications</h3>
              <p className="text-gray-300 text-sm mb-4">
                Exploring real-world applications of blockchain technology beyond cryptocurrency.
              </p>
              <div className="text-xs text-gray-400 mb-3">February 20, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Future of Work</h3>
              <p className="text-gray-300 text-sm mb-4">
                How technology is reshaping the workplace and creating new opportunities for businesses.
              </p>
              <div className="text-xs text-gray-400 mb-3">February 15, 2025</div>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Read More →
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

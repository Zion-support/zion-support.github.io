import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, tutorials, and news about AI, technology, and digital transformation." />
        <meta name="keywords" content="blog, technology, AI, tutorials, insights, news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and news about AI, technology, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">AI Revolution</h3>
              <p className="text-gray-300 mb-6">
                Explore how artificial intelligence is transforming industries and creating new opportunities.
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read More →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">5G Technology</h3>
              <p className="text-gray-300 mb-6">
                Learn about the latest developments in 5G technology and its impact on connectivity.
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read More →
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-300 mb-6">
                Discover best practices for cloud migration and optimization strategies.
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Read More →
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
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

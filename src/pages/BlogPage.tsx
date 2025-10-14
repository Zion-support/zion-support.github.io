import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <span>January 15, 2024</span>
                    <span>•</span>
                    <span>AI Solutions</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">The Future of AI in Business</h2>
                  <p className="text-gray-300 mb-4">
                    Exploring how artificial intelligence is transforming modern business operations.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Read More</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                      Read Article
                    </button>
                  </div>
                </article>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, and digital transformation from Zion Tech Group experts." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cloud computing, 
              digital transformation, and emerging technologies.
            </p>
          </div>

          {/* Featured Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl">🤖</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">AI & Machine Learning</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Future of Enterprise AI: Trends and Predictions for 2024
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore the latest trends in enterprise AI adoption and discover 
                    how businesses are leveraging artificial intelligence for growth.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">January 15, 2024</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl">☁️</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-600 font-semibold mb-2">Cloud Computing</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cloud Migration Best Practices: A Complete Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the essential steps and strategies for successful cloud 
                    migration, from planning to execution and optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">January 12, 2024</span>
                    <button className="text-green-600 hover:text-green-800 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-semibold mb-2">Digital Transformation</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Digital Transformation Success Stories: Lessons Learned
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover real-world examples of successful digital transformations 
                    and the key factors that contributed to their success.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">January 10, 2024</span>
                    <button className="text-purple-600 hover:text-purple-800 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Categories */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-bold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-sm text-gray-600">15 articles</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="font-bold text-gray-900 mb-2">Cloud</h3>
                <p className="text-sm text-gray-600">12 articles</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-gray-900 mb-2">Transformation</h3>
                <p className="text-sm text-gray-600">8 articles</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">Security</h3>
                <p className="text-sm text-gray-600">10 articles</p>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest technology insights and industry updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
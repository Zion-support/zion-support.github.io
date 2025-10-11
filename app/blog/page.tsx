'use client';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI and IT technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">AI Technology</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                The Future of Artificial Intelligence in Business
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore how AI is transforming business operations and what it means for the future of work.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">January 15, 2024</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Cybersecurity</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Essential Cybersecurity Practices for 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn about the most important cybersecurity measures every business should implement.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">January 10, 2024</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Cloud Computing</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Cloud Migration Best Practices
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A comprehensive guide to successfully migrating your business to the cloud.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">January 5, 2024</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Data Analytics</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Turning Data into Business Insights
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover how to leverage your data to make better business decisions.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">December 28, 2023</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Digital Transformation</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                The Digital Transformation Journey
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn how to successfully navigate your company's digital transformation.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">December 20, 2023</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Technology Trends</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                Top Tech Trends for 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay ahead with the most important technology trends shaping the year ahead.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">December 15, 2023</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Read more →
              </a>
            </div>
          </article>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

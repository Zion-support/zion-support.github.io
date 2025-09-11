import React from 'react';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Read the latest insights and updates from Zion Tech Group."
        keywords="blog, tech insights, AI news, technology trends"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest technology trends and insights from our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample blog post cards */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="aspect-video bg-slate-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">The Future of AI in Business</h3>
              <p className="text-gray-300 mb-4">
                Exploring how artificial intelligence is transforming modern business operations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Jan 15, 2025</span>
                <button className="text-blue-400 hover:text-blue-300">Read More →</button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="aspect-video bg-slate-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Migration Best Practices</h3>
              <p className="text-gray-300 mb-4">
                A comprehensive guide to successful cloud migration strategies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Jan 10, 2025</span>
                <button className="text-blue-400 hover:text-blue-300">Read More →</button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="aspect-video bg-slate-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity Trends 2025</h3>
              <p className="text-gray-300 mb-4">
                Latest developments in cybersecurity and how to protect your business.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Jan 5, 2025</span>
                <button className="text-blue-400 hover:text-blue-300">Read More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
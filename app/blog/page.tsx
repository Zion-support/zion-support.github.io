'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest AI and IT trends, insights, and solutions from Zion Tech Group." />
        <meta name="keywords" content="AI blog, IT solutions, technology insights, AI trends, tech news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-cyan-400">Insights</span> & <span className="text-purple-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest AI and IT trends, expert insights, and cutting-edge solutions from our team of technology experts.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Coming Soon</h3>
                <p className="text-gray-300 mb-4">Our blog content is being prepared. Check back soon for the latest insights!</p>
                <span className="text-cyan-400 text-sm">Stay tuned...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;

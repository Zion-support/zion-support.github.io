'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';

const NewsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>News & Updates | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Industry trends, product updates, and company milestones." />
        <meta name="keywords" content="news, updates, announcements, industry trends, AI news, technology updates, Zion Tech Group news" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Updates
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group. 
                Industry trends, product updates, and company milestones.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center space-x-2 text-cyan-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">December 15, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Zion Tech Group Launches New AI Analytics Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Our latest AI analytics platform revolutionizes data insights with advanced machine learning capabilities and real-time processing.
                </p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>

              <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center space-x-2 text-cyan-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">December 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Partnership with Leading Cloud Provider
                </h3>
                <p className="text-gray-300 mb-4">
                  We're excited to announce our strategic partnership with a major cloud provider to enhance our infrastructure capabilities.
                </p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>

              <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center space-x-2 text-cyan-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">December 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Industry Trends 2024
                </h3>
                <p className="text-gray-300 mb-4">
                  Our experts share insights on the latest AI industry trends and how they're shaping the future of technology.
                </p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest news, updates, and insights 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
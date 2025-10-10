'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Share2, BarChart, Brain, Target, Users, Globe, Shield } from 'lucide-react';

const SocialMediaManagerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Manager | Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management tool. Schedule posts, analyze performance, and grow your social media presence with intelligent automation." />
        <meta name="keywords" content="social media manager, social media automation, social media analytics, social media scheduling, social media AI" />
        <link rel="canonical" href="https://ziontechgroup.com/social-media-manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Social Media Manager
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  AI Tool
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Manage your social media presence with AI-powered automation. Schedule posts, 
                analyze performance, and grow your audience with intelligent social media management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Social Media Manager Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Share2 className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Post Scheduling</h3>
                <p className="text-gray-300">
                  Schedule posts across multiple social media platforms with 
                  AI-optimized timing for maximum engagement.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Comprehensive analytics and insights to track your social media 
                  performance and optimize your strategy.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Content Suggestions</h3>
                <p className="text-gray-300">
                  AI-powered content suggestions and hashtag recommendations 
                  to improve your social media engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Grow Your Social Media Presence
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our social media experts to learn how our AI-powered tools can 
              help you build a stronger social media presence.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaManagerPage;
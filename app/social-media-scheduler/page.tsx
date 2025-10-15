import React from 'react';
import { Helmet } from 'react-helmet-async';

const SocialMediaSchedulerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Scheduler - Zion Tech Group</title>
        <meta name="description" content="Advanced social media management platform with AI-powered content scheduling, analytics, and multi-platform posting capabilities." />
        <meta name="keywords" content="social media scheduler, content management, social media automation, analytics, multi-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/social-media-scheduler" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Social Media Scheduler
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your social media presence with AI-powered content scheduling, analytics, and multi-platform management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Scheduling</h3>
              <p className="text-gray-300 mb-6">AI-powered optimal posting times and content calendar management.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Optimal timing</li>
                <li>• Content calendar</li>
                <li>• Bulk scheduling</li>
                <li>• Time zone support</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 8h6m-6 4h6m-6 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Platform</h3>
              <p className="text-gray-300 mb-6">Manage all your social media accounts from one unified dashboard.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Facebook & Instagram</li>
                <li>• Twitter & LinkedIn</li>
                <li>• TikTok & YouTube</li>
                <li>• Pinterest & Snapchat</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
              <p className="text-gray-300 mb-6">Comprehensive analytics to track performance and optimize your strategy.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Engagement metrics</li>
                <li>• Reach & impressions</li>
                <li>• Audience insights</li>
                <li>• ROI tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Master Social Media?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take control of your social media presence with our powerful scheduling and analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaSchedulerPage;
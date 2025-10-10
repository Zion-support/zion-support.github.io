'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, BarChart, Brain, Users, Globe, Shield, Zap } from 'lucide-react';

const AdCampaignManagerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ad Campaign Manager | Zion Tech Group</title>
        <meta name="description" content="AI-powered ad campaign management tool. Optimize ad performance, manage budgets, and maximize ROI with intelligent advertising automation." />
        <meta name="keywords" content="ad campaign manager, advertising AI, ad optimization, campaign management, digital advertising, ad automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ad-campaign-manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ad Campaign Manager
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  AI Tool
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize your advertising campaigns with AI-powered management tools. 
                Maximize ROI, manage budgets, and automate ad optimization for better results.
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
              Ad Campaign Manager Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Campaign Optimization</h3>
                <p className="text-gray-300">
                  AI-powered campaign optimization that automatically adjusts 
                  targeting, bidding, and creative elements for maximum performance.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Comprehensive analytics and reporting to track campaign performance 
                  and identify opportunities for improvement.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Budget Management</h3>
                <p className="text-gray-300">
                  Intelligent budget allocation and management that optimizes 
                  spending across campaigns for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Maximize Your Ad Performance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our advertising experts to learn how our AI-powered tools can 
              help you optimize your ad campaigns and increase ROI.
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

export default AdCampaignManagerPage;
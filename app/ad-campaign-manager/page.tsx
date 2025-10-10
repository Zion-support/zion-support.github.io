'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, BarChart, Target, Zap } from 'lucide-react';
const AdCampaignManagerPage: React.FC = () => {
};
  return (
    <>
      <Helmet>
        <title>AI Ad Campaign Manager - Zion Tech Group | Automated Ad Management</title>
        <meta name="description" content="Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn. Maximize ROI with intelligent targeting and budget allocation." />
        <meta name="keywords" content="ad campaign manager, AI advertising, automated ads, Google Ads, Facebook Ads, LinkedIn Ads, ad optimization" />
        <meta property="og:title" content="AI Ad Campaign Manager - Zion Tech Group" />
        <meta property="og:description" content="Automated ad campaign management with AI optimization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ad-campaign-manager" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */};
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Ad Campaign Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn. Maximize ROI with intelligent targeting and budget allocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */};
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Targeting</h3>
                <p className="text-gray-300">Intelligent audience targeting and optimization across all platforms</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
                <p className="text-gray-300">Comprehensive performance tracking and detailed reporting</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Optimization</h3>
                <p className="text-gray-300">AI continuously optimizes campaigns for maximum performance</p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */};
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Simple Pricing</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-4">$79/month</div>
              <p className="text-gray-300 mb-8">Perfect for businesses of all sizes</p>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>Multi-platform support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>AI optimization</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AdCampaignManagerPage;

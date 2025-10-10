'use client';
import React from 'react';
import { Target, BarChart, Zap, Settings, Users, DollarSign, Globe, TrendingUp } from 'lucide-react';

const AdCampaignManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Ad Campaign Manager
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Advertising Campaign Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive ad campaign management platform that optimizes your advertising 
            across Google, Facebook, LinkedIn, and more with AI-driven insights.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Multi-Platform</h3>
              <p className="text-gray-300">
                Manage campaigns across Google Ads, Facebook, 
                LinkedIn, Twitter, and other platforms.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Comprehensive campaign analytics with ROI tracking, 
                conversion analysis, and performance insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI Optimization</h3>
              <p className="text-gray-300">
                AI-powered campaign optimization with automatic 
                bidding, audience targeting, and ad testing.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated campaign management with smart 
                scheduling, budget optimization, and A/B testing.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Audience Targeting</h3>
              <p className="text-gray-300">
                Advanced audience targeting with demographic 
                analysis and behavioral insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Budget Management</h3>
              <p className="text-gray-300">
                Smart budget allocation and spending optimization 
                across all your advertising channels.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">ROI Improvement</h3>
              <p className="text-gray-300 mb-4">
                Increase your advertising ROI by up to 300% with 
                AI-optimized campaigns and targeting.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated bidding</li>
                <li>• Smart targeting</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-gray-300 mb-4">
                Save hours of manual work with automated 
                campaign management and optimization.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated setup</li>
                <li>• Smart scheduling</li>
                <li>• Auto-optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to $5,000 ad spend</li>
                <li>Basic campaign management</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to $25,000 ad spend</li>
                <li>Advanced campaign management</li>
                <li>AI optimization</li>
                <li>Priority support</li>
                <li>Custom reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited ad spend</li>
                <li>Full automation suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Ad Campaigns?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free campaign audit and see how we can improve your advertising ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Audit
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdCampaignManagerPage;
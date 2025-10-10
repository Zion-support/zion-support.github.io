'use client';
import React from 'react';
import { Globe, BarChart, Users, Zap, Settings, Target, Clock, Heart } from 'lucide-react';

const SocialMediaManagerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Social Media Manager
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Social Media Management Platform
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive social media management tool that automates posting, 
            analyzes performance, and grows your audience across all platforms.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Multi-Platform</h3>
              <p className="text-gray-300">
                Manage all your social media accounts from one 
                dashboard across Facebook, Twitter, Instagram, LinkedIn.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Comprehensive analytics and insights to track 
                performance and optimize your social media strategy.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Content Creation</h3>
              <p className="text-gray-300">
                AI-powered content creation with templates, 
                hashtag suggestions, and post optimization.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated posting, engagement, and response 
                management to save time and increase efficiency.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Scheduling</h3>
              <p className="text-gray-300">
                Smart scheduling with optimal posting times 
                and content calendar management.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Engagement</h3>
              <p className="text-gray-300">
                Automated engagement tools and community 
                management to grow your audience.
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
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-gray-300 mb-4">
                Save up to 10 hours per week with automated posting, 
                scheduling, and engagement management.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated posting</li>
                <li>• Smart scheduling</li>
                <li>• Auto-engagement</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300 mb-4">
                Increase your social media following and engagement 
                with AI-optimized content and strategies.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• AI content optimization</li>
                <li>• Hashtag suggestions</li>
                <li>• Performance insights</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 3 social accounts</li>
                <li>Basic scheduling</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10 social accounts</li>
                <li>Advanced scheduling</li>
                <li>AI content creation</li>
                <li>Priority support</li>
                <li>Team collaboration</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited social accounts</li>
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
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free social media audit and see how we can boost your online presence.
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

export default SocialMediaManagerPage;
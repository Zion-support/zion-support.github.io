'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AISocialMediaManagerPage() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with automated posting, content generation, and engagement optimization. Starting at $99/month." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, engagement optimization, social media analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Automate and optimize your social media presence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Let AI manage your social media accounts 24/7 with intelligent content creation, optimal posting times, and engagement optimization that increases followers by 300%.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">✍️</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Generation</h3>
                <p className="text-gray-300 text-center">
                  Generate engaging posts, captions, and hashtags tailored to your brand voice and audience.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⏰</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Optimal Timing</h3>
                <p className="text-gray-300 text-center">
                  AI determines the best times to post for maximum engagement across all platforms.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Performance Analytics</h3>
                <p className="text-gray-300 text-center">
                  Track engagement rates, reach, and ROI with detailed analytics and insights.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Auto-Responding</h3>
                <p className="text-gray-300 text-center">
                  AI automatically responds to comments and messages with personalized, brand-appropriate replies.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Audience Targeting</h3>
                <p className="text-gray-300 text-center">
                  AI identifies and targets your ideal audience for maximum engagement and conversions.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📱</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Multi-Platform</h3>
                <p className="text-gray-300 text-center">
                  Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one unified dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>3 social media accounts</li>
                  <li>50 posts per month</li>
                  <li>Basic AI content generation</li>
                  <li>Standard analytics</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>10 social media accounts</li>
                  <li>Unlimited posts</li>
                  <li>Advanced AI content generation</li>
                  <li>Detailed analytics</li>
                  <li>Priority support</li>
                  <li>Auto-responding</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited accounts</li>
                  <li>Unlimited posts</li>
                  <li>Full AI suite</li>
                  <li>White-label solution</li>
                  <li>24/7 dedicated support</li>
                  <li>Custom AI training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">300%</div>
                <h3 className="text-xl font-bold text-white mb-2">Follower Growth</h3>
                <p className="text-gray-300">Average 300% increase in followers</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">250%</div>
                <h3 className="text-xl font-bold text-white mb-2">Engagement Rate</h3>
                <p className="text-gray-300">250% boost in engagement rates</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">80%</div>
                <h3 className="text-xl font-bold text-white mb-2">Time Saved</h3>
                <p className="text-gray-300">80% reduction in social media management time</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-4">150%</div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Increase</h3>
                <p className="text-gray-300">150% improvement in social media ROI</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Your Social Media Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 5,000+ brands using our AI social media manager to grow their presence and engage their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Trial
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
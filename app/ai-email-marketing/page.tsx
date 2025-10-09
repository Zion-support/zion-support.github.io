'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIEmailMarketingPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered email marketing with automated campaigns, personalization, and optimization. Starting at $79/month." />
        <meta name="keywords" content="AI email marketing, email automation, personalized campaigns, email optimization, marketing automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-marketing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Email Marketing
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent email marketing that converts
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Supercharge your email marketing with AI that creates personalized campaigns, optimizes send times, and delivers 5x higher open rates and 3x more conversions.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">✉️</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Creation</h3>
                <p className="text-gray-300 text-center">
                  Generate compelling subject lines, email content, and CTAs that drive engagement and conversions.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Segmentation</h3>
                <p className="text-gray-300 text-center">
                  AI automatically segments your audience based on behavior, preferences, and engagement patterns.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⏰</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Optimal Send Times</h3>
                <p className="text-gray-300 text-center">
                  AI determines the best time to send emails to each subscriber for maximum open rates.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Automated Workflows</h3>
                <p className="text-gray-300 text-center">
                  Create sophisticated email sequences that nurture leads and convert prospects automatically.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Advanced Analytics</h3>
                <p className="text-gray-300 text-center">
                  Track performance with detailed insights and AI-powered recommendations for improvement.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">A/B Testing</h3>
                <p className="text-gray-300 text-center">
                  AI automatically tests different versions and optimizes campaigns for better performance.
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
                <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 5,000 subscribers</li>
                  <li>Unlimited emails</li>
                  <li>Basic AI features</li>
                  <li>Email templates</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 25,000 subscribers</li>
                  <li>Unlimited emails</li>
                  <li>Advanced AI features</li>
                  <li>Custom templates</li>
                  <li>Priority support</li>
                  <li>A/B testing</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited subscribers</li>
                  <li>Unlimited emails</li>
                  <li>Full AI suite</li>
                  <li>White-label solution</li>
                  <li>24/7 dedicated support</li>
                  <li>Custom integrations</li>
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
                <div className="text-4xl font-bold text-cyan-400 mb-4">5x</div>
                <h3 className="text-xl font-bold text-white mb-2">Higher Open Rates</h3>
                <p className="text-gray-300">5x improvement in email open rates</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">3x</div>
                <h3 className="text-xl font-bold text-white mb-2">More Conversions</h3>
                <p className="text-gray-300">3x increase in email conversions</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">60%</div>
                <h3 className="text-xl font-bold text-white mb-2">Time Saved</h3>
                <p className="text-gray-300">60% reduction in campaign creation time</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-4">200%</div>
                <h3 className="text-xl font-bold text-white mb-2">ROI Increase</h3>
                <p className="text-gray-300">200% improvement in email marketing ROI</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your AI Email Marketing Journey</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 10,000+ businesses using our AI email marketing platform to boost engagement and drive sales.
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
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Email Marketing">
            AI Email Marketing
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Intelligent Email Campaigns
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Boost your email marketing ROI with AI-powered personalization, automation, and optimization. Send the right message to the right person at the right time.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$79<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 5,000 subscribers</li>
                <li>AI subject line optimization</li>
                <li>Basic automation</li>
                <li>Email templates</li>
                <li>Email support</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-pink-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$199<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 25,000 subscribers</li>
                <li>Advanced AI personalization</li>
                <li>Smart send time optimization</li>
                <li>A/B testing</li>
                <li>Priority support</li>
                <li>Advanced analytics</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$399<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited subscribers</li>
                <li>Custom AI models</li>
                <li>White-label solution</li>
                <li>Advanced segmentation</li>
                <li>24/7 support</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Personalization</h3>
              <p className="text-gray-300">Automatically personalize content, subject lines, and send times for each subscriber.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Segmentation</h3>
              <p className="text-gray-300">Use AI to automatically segment your audience based on behavior and preferences.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Workflows</h3>
              <p className="text-gray-300">Create sophisticated email sequences that adapt based on subscriber behavior.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">Continuously optimize campaigns using AI to improve open rates and conversions.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">Predict subscriber behavior and identify the best opportunities for engagement.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Generated Content</h3>
              <p className="text-gray-300">Generate compelling email content, subject lines, and CTAs using AI.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Start Your AI Email Journey</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who are already using AI to boost their email marketing performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call: (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIEmailMarketingPage;
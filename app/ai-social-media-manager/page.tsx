'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Brain, Target, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AISocialMediaManager: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
        description="Revolutionary AI-powered social media management platform. Automate content creation, scheduling, engagement, and analytics. Starting at $199/month. Call (302) 464-0950."
        keywords={['AI social media manager', 'social media automation', 'AI content creation', 'social media scheduling', 'AI marketing automation']}
        canonicalUrl="https://ziontechgroup.com/ai-social-media-manager"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
                AI Social Media Manager
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                Revolutionary AI-Powered Social Media Automation
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your social media presence with our cutting-edge AI platform. Automate content creation, 
                scheduling, engagement, and analytics across all major platforms. Achieve 10x engagement growth 
                with minimal effort.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
                  <div className="text-sm text-gray-300">Engagement Growth</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Time Saved</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Automated Posting</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-sm text-gray-300">ROI Increase</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Powerful AI Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Creation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-generate posts for all platforms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Brand voice consistency</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Trend-based content suggestions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multi-language support</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📅</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Scheduling</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Optimal posting times</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cross-platform coordination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Content calendar management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Bulk scheduling</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">💬</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Engagement</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-respond to comments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Smart hashtag suggestions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Community management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Crisis management alerts</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Advanced Analytics</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time performance tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />ROI measurement</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Competitor analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive insights</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Audience Targeting</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />AI-powered audience insights</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Behavioral analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Demographic targeting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Interest-based segmentation</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Bank-level encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />SOC 2 compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Role-based access control</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Audit trails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />3 Social Media Accounts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />50 AI-Generated Posts/Month</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic Analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email Support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />10 Social Media Accounts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />200 AI-Generated Posts/Month</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced Analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />AI Engagement Bot</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority Support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited Accounts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited AI Posts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom AI Training</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />White-label Solution</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 Phone Support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses already using our AI Social Media Manager to grow their online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  📧 kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AISocialMediaManager;
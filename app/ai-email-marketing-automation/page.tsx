'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Brain, Target, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AIEmailMarketingAutomation: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Email Marketing Automation - Smart Email Campaigns | Zion Tech Group"
        description="Revolutionary AI-powered email marketing automation platform. Create, send, and optimize email campaigns with AI. Increase open rates by 300%. Starting at $299/month. Call (302) 464-0950."
        keywords={['AI email marketing', 'email automation', 'AI email campaigns', 'email marketing AI', 'automated email marketing']}
        canonicalUrl="https://ziontechgroup.com/ai-email-marketing-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
                AI Email Marketing Automation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                Intelligent Email Campaigns That Convert
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your email marketing with AI-powered automation. Create personalized, high-converting 
                email campaigns that adapt to each recipient. Achieve 300% higher open rates and 500% more conversions 
                with our intelligent platform.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-sm text-gray-300">Higher Open Rates</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
                  <div className="text-sm text-gray-300">More Conversions</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                  <div className="text-sm text-gray-300">Time Saved</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2M+</div>
                  <div className="text-sm text-gray-300">Revenue Generated</div>
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
              AI-Powered Email Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Generation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-generate subject lines</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Personalized email content</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />A/B testing automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multi-language support</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Segmentation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Behavioral targeting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Demographic analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Purchase history insights</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Engagement scoring</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⏰</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Perfect Timing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Optimal send times</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Timezone optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Frequency management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Drip campaign automation</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Advanced Analytics</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time performance tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />ROI measurement</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom dashboards</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Workflow Automation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Trigger-based campaigns</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Welcome series automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Abandoned cart recovery</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Re-engagement campaigns</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />GDPR compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />CAN-SPAM compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Audit trails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />10,000 subscribers</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited emails</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$699<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />50,000 subscribers</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />A/B testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$1,499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited subscribers</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Full AI suite</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom integrations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 phone support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Email Marketing?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses using our AI Email Marketing Automation to increase their revenue.
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

export default AIEmailMarketingAutomation;
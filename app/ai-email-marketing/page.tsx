'use client';
import React from 'react';
import { Mail, Target, BarChart3, Zap, Shield, Clock, CheckCircle, Users, TrendingUp, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Email Marketing Pro">
            AI Email Marketing Pro
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Intelligent Email Campaigns with AI-Powered Personalization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your email marketing with our AI-powered platform that creates personalized campaigns, 
            optimizes send times, and predicts customer behavior. Achieve 400% higher open rates and 300% better conversions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            AI-Powered Email Marketing Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Personalization</h3>
              <p className="text-gray-300 mb-4 text-center">
                Create hyper-personalized emails that adapt to each recipient's preferences and behavior.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Dynamic content blocks</li>
                <li>• Behavioral triggers</li>
                <li>• Predictive recommendations</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Segmentation</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI automatically segments your audience based on behavior, preferences, and engagement patterns.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Behavioral clustering</li>
                <li>• Lifecycle stage detection</li>
                <li>• Churn prediction</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">⏰</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Optimal Send Times</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI determines the best time to send emails to each individual subscriber for maximum engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Individual timing optimization</li>
                <li>• Time zone intelligence</li>
                <li>• Engagement pattern analysis</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">✍️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Generation</h3>
              <p className="text-gray-300 mb-4 text-center">
                Generate compelling subject lines, email content, and CTAs that drive higher engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Subject line optimization</li>
                <li>• A/B testing automation</li>
                <li>• Brand voice consistency</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Automated Workflows</h3>
              <p className="text-gray-300 mb-4 text-center">
                Create intelligent email sequences that adapt based on subscriber behavior and engagement.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Welcome series automation</li>
                <li>• Abandoned cart recovery</li>
                <li>• Re-engagement campaigns</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4 text-center">
                Get insights into campaign performance, subscriber lifetime value, and future engagement trends.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Engagement forecasting</li>
                <li>• Revenue prediction</li>
                <li>• Churn risk analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Campaign Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">🎉</div>
              <h3 className="text-lg font-bold text-white mb-3">Welcome Series</h3>
              <p className="text-gray-300 text-sm">Automated onboarding sequences that introduce new subscribers to your brand</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-bold text-white mb-3">Abandoned Cart</h3>
              <p className="text-gray-300 text-sm">Recover lost sales with intelligent follow-up campaigns</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">🎂</div>
              <h3 className="text-lg font-bold text-white mb-3">Birthday & Anniversaries</h3>
              <p className="text-gray-300 text-sm">Personalized campaigns for special occasions and milestones</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">💤</div>
              <h3 className="text-lg font-bold text-white mb-3">Re-engagement</h3>
              <p className="text-gray-300 text-sm">Win back inactive subscribers with targeted campaigns</p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5,000 subscribers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  50,000 emails/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25,000 subscribers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  250,000 emails/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  A/B testing
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Start Free Trial
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited subscribers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited emails
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="quantum-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">400%</h3>
                <p className="text-gray-300">Higher Open Rates</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">300%</h3>
                <p className="text-gray-300">Better Conversions</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">250%</h3>
                <p className="text-gray-300">Revenue Increase</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">60%</h3>
                <p className="text-gray-300">Time Saved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Email Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="cyber-card p-6">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIEmailMarketing;
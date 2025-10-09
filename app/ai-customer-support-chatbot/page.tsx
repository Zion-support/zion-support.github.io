'use client';
import React from 'react';
import { MessageCircle, Bot, Zap, Shield, Clock, CheckCircle, Users, TrendingUp, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportChatbot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Customer Support Bot">
            AI Customer Support Bot
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Intelligent 24/7 Customer Support with AI-Powered Chatbots
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your customer support with our AI-powered chatbot that provides instant, accurate responses, 
            handles complex queries, and escalates to human agents when needed. Reduce support costs by 70% and improve customer satisfaction by 85%.
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
            Advanced AI Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Natural Language Processing</h3>
              <p className="text-gray-300 mb-4 text-center">
                Understand customer intent and context with advanced NLP that handles complex queries and conversations.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Intent recognition</li>
                <li>• Context awareness</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Intelligent Routing</h3>
              <p className="text-gray-300 mb-4 text-center">
                Automatically route complex queries to the right human agent based on expertise and availability.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Smart escalation</li>
                <li>• Agent matching</li>
                <li>• Priority queuing</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Knowledge Base Integration</h3>
              <p className="text-gray-300 mb-4 text-center">
                Access your entire knowledge base to provide accurate, up-to-date information to customers.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time updates</li>
                <li>• Document search</li>
                <li>• FAQ automation</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">😊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Sentiment Analysis</h3>
              <p className="text-gray-300 mb-4 text-center">
                Detect customer emotions and adjust responses accordingly to provide empathetic support.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Emotion detection</li>
                <li>• Tone adaptation</li>
                <li>• Escalation triggers</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Multi-Channel Support</h3>
              <p className="text-gray-300 mb-4 text-center">
                Deploy across multiple channels including website, mobile app, social media, and messaging platforms.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Website integration</li>
                <li>• Mobile app support</li>
                <li>• Social media bots</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Analytics & Insights</h3>
              <p className="text-gray-300 mb-4 text-center">
                Get detailed insights into customer interactions, common issues, and bot performance metrics.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Conversation analytics</li>
                <li>• Performance metrics</li>
                <li>• Improvement suggestions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Easy Integration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-white mb-3">Website</h3>
              <p className="text-gray-300 text-sm">Embed directly into your website with a simple widget</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-white mb-3">Mobile Apps</h3>
              <p className="text-gray-300 text-sm">Native integration for iOS and Android applications</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-white mb-3">Messaging</h3>
              <p className="text-gray-300 text-sm">Support for WhatsApp, Telegram, and other messaging platforms</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-lg font-bold text-white mb-3">APIs</h3>
              <p className="text-gray-300 text-sm">RESTful APIs for custom integrations and workflows</p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 1,000 conversations/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Website integration
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
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10,000 conversations/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Multi-channel support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Start Free Trial
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$799<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited conversations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI training
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
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
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">70%</h3>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">85%</h3>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">90%</h3>
                <p className="text-gray-300">Query Resolution Rate</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">24/7</h3>
                <p className="text-gray-300">Availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Customer Support?
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

export default AICustomerSupportChatbot;
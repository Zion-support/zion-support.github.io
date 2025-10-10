'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Brain, Users, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Clock, DollarSign, Bot } from 'lucide-react';

const ZionChatAIPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Chat AI - AI Customer Support Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI customer support platform with intelligent chatbots, omnichannel communication, and 24/7 automated assistance." />
        <meta name="keywords" content="AI chatbot, customer support, automated assistance, omnichannel communication, intelligent conversations" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-chat-ai" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Chat AI
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                AI-Powered Customer Support Platform
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your customer support with intelligent AI chatbots that provide 24/7 assistance, 
                understand context, and deliver personalized responses across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Intelligent AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300 mb-4">Advanced NLP capabilities that understand context, intent, and sentiment in customer conversations.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Context awareness</li>
                  <li>• Sentiment analysis</li>
                  <li>• Intent recognition</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Omnichannel Support</h3>
                <p className="text-gray-300 mb-4">Deploy across multiple channels including website, mobile app, social media, and messaging platforms.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Website integration</li>
                  <li>• Mobile app support</li>
                  <li>• Social media bots</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Responses</h3>
                <p className="text-gray-300 mb-4">Provide immediate answers to customer queries with sub-second response times.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <100ms response time</li>
                  <li>• 24/7 availability</li>
                  <li>• No waiting queues</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">Bank-level security with data encryption, compliance certifications, and privacy protection.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliant</li>
                  <li>• SOC 2 certified</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Human Handoff</h3>
                <p className="text-gray-300 mb-4">Seamlessly transfer complex queries to human agents with full conversation context.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Smart escalation</li>
                  <li>• Context preservation</li>
                  <li>• Agent collaboration</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom AI Training</h3>
                <p className="text-gray-300 mb-4">Train your AI on your specific business knowledge and customer data for personalized responses.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Custom knowledge base</li>
                  <li>• Continuous learning</li>
                  <li>• Brand voice training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    2 chatbot agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    10 chatbot agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited conversations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited agents
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text-enhanced">
              Ready to Transform Customer Support?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using Zion Chat AI to provide exceptional customer experiences 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionChatAIPage;
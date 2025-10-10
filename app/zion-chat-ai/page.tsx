'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MessageCircle, Brain, Zap, Shield, Users, Globe, CheckCircle, ArrowRight, Star, Award, Clock, Target, BarChart, Settings, Lock, Cloud } from 'lucide-react'

const ZionChatAI: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Chat AI - Advanced AI Customer Support Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize customer support with Zion Chat AI. Intelligent chatbots, natural language processing, and 24/7 automated customer service solutions." />
        <meta name="keywords" content="AI chatbot, customer support, conversational AI, natural language processing, automated support, Zion Chat AI" />
        <meta property="og:title" content="Zion Chat AI - Advanced AI Customer Support Platform" />
        <meta property="og:description" content="Revolutionize customer support with Zion Chat AI. Intelligent chatbots and 24/7 automated customer service solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-chat-ai" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-chat-ai" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/25">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Chat AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer support with intelligent AI chatbots. Provide instant, accurate, and personalized responses 24/7 with our advanced conversational AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  Start Free Trial
                </button>
                <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Chat Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support with AI-powered conversations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
                <p className="text-gray-300 mb-6">
                  Understand customer intent and context with advanced NLP technology for more human-like conversations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Intent recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Context awareness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Sentiment analysis
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Instant Responses</h3>
                <p className="text-gray-300 mb-6">
                  Provide immediate answers to customer queries with sub-second response times and 99.9% uptime.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    < 1 second response time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    24/7 availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Multi-language support
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Human Handoff</h3>
                <p className="text-gray-300 mb-6">
                  Seamlessly transfer complex queries to human agents with full conversation context and history.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart escalation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Context preservation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Agent notifications
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Insights</h3>
                <p className="text-gray-300 mb-6">
                  Track performance, customer satisfaction, and conversation patterns with detailed analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Conversation analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Customer satisfaction scores
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Customization</h3>
                <p className="text-gray-300 mb-6">
                  Customize your chatbot's personality, responses, and workflows to match your brand.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Brand customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Workflow builder
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Knowledge base integration
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-6">
                  Bank-level security with advanced encryption, compliance, and data protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    GDPR compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data privacy controls
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Perfect for Every Industry</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to healthcare, Zion Chat AI adapts to your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card-enhanced p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">E-commerce</h3>
                <p className="text-gray-400 text-sm">Product recommendations, order tracking, and customer support</p>
              </div>

              <div className="cyber-card-enhanced p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
                <p className="text-gray-400 text-sm">Appointment scheduling, symptom checking, and patient support</p>
              </div>

              <div className="cyber-card-enhanced p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Financial Services</h3>
                <p className="text-gray-400 text-sm">Account inquiries, transaction support, and financial advice</p>
              </div>

              <div className="cyber-card-enhanced p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Travel & Hospitality</h3>
                <p className="text-gray-400 text-sm">Booking assistance, travel information, and customer service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$49</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI responses
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$149</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI responses
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$499</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
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
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion Chat AI to provide exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  Start Your Free Trial
                </button>
                <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ZionChatAI
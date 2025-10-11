'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, MessageSquare, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AIConversationalAIPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in natural, human-like conversations with advanced AI technology.',
      benefits: ['Natural language processing', 'Context understanding', 'Emotional intelligence', 'Multi-turn conversations']
    },
    {
      icon: Zap,
      title: 'Real-time Responses',
      description: 'Get instant, intelligent responses to user queries and interactions.',
      benefits: ['Instant responses', 'Real-time processing', 'Low latency', 'High availability']
    },
    {
      icon: Brain,
      title: 'Intelligent Understanding',
      description: 'AI that understands context, intent, and user needs for better interactions.',
      benefits: ['Intent recognition', 'Context awareness', 'User profiling', 'Personalization']
    },
    {
      icon: BarChart,
      title: 'Conversation Analytics',
      description: 'Track and analyze conversation performance and user engagement.',
      benefits: ['Engagement metrics', 'Conversation analytics', 'User insights', 'Performance tracking']
    },
    {
      icon: Settings,
      title: 'Customizable AI',
      description: 'Customize AI behavior and responses to match your brand and use case.',
      benefits: ['Custom training', 'Brand adaptation', 'Use case optimization', 'Flexible configuration']
    }
  ]

  const benefits = [
    'Improve customer engagement by 200%',
    'Reduce response time by 90%',
    'Enhance user experience with natural interactions',
    'Scale customer support efficiently',
    'Enable 24/7 intelligent assistance',
    'Drive better business outcomes'
  ]

  return (
    <>
      <Helmet>
        <title>AI Conversational AI - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered conversational AI platform for natural language interactions, customer service, and intelligent automation." />
        <meta name="keywords" content="AI conversational AI, chatbot, natural language processing, customer service AI, conversational automation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Conversational
              <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent, natural conversations with AI-powered conversational AI. 
              Engage users with human-like interactions and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Conversational Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to create intelligent conversations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Conversational AI?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive conversation success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Conversations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your conversational AI needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-violet-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIConversationalAIPage
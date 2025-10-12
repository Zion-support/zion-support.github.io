'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle, Brain, Zap, Shield, Users, Settings } from 'lucide-react';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Conversations',
      description: 'Natural language processing for human-like interactions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, and social media',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'No-code interface for easy bot configuration',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for sensitive conversations',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Create natural conversations, multi-channel deployment, and enterprise-grade security." />
        <meta name="keywords" content="AI chatbot, conversational AI, chatbot builder, natural language processing, customer service automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Chatbot Builder</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Create intelligent, conversational AI chatbots that understand context, learn from interactions, 
                and provide exceptional customer experiences across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage intelligent chatbots that deliver real business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create an intelligent chatbot that transforms your customer experience and drives business growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Brain, Users, Zap, CheckCircle, ArrowRight, Phone, Mail, Shield, Target, Globe, Settings } from 'lucide-react';

const AIConversationalAIPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Natural Language Understanding',
      description: 'Advanced NLP capabilities for human-like conversations across multiple channels'
    },
    {
      icon: Brain,
      title: 'Context-Aware Responses',
      description: 'Maintains conversation context and provides intelligent, relevant responses'
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy across web, mobile, voice, and messaging platforms seamlessly'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant response generation with sub-second latency for optimal user experience'
    }
  ];

  const benefits = [
    'Advanced natural language processing and understanding',
    'Context-aware conversation management',
    'Multi-language support with cultural adaptation',
    'Integration with existing business systems and databases',
    'Customizable personality and tone for brand consistency',
    'Advanced analytics and conversation insights',
    'Scalable cloud infrastructure for high-volume interactions',
    'Enterprise-grade security and compliance features'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Conversational AI Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced conversational AI platform for intelligent, context-aware customer interactions across all channels" />
        <meta name="keywords" content="conversational AI, chatbot, NLP, customer service, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Conversational AI Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent, context-aware conversational AI that understands and responds naturally. 
              Deploy across all channels with enterprise-grade capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Conversational AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform delivers human-like conversations with enterprise-grade reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform customer interactions with intelligent conversational AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Conversational AI?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your conversational AI needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConversationalAIPage;
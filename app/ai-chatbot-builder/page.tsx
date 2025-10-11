'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, MessageCircle, Zap, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Conversations',
      description: 'Advanced natural language processing for intelligent, context-aware conversations'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, social media, and messaging platforms'
    },
    {
      icon: Zap,
      title: 'Real-Time Learning',
      description: 'Continuously improves responses based on user interactions and feedback'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance standards'
    }
  ];

  const benefits = [
    'Reduce support costs by up to 60%',
    '24/7 availability for customer inquiries',
    'Instant responses to common questions',
    'Scalable to handle thousands of conversations',
    'Easy integration with existing systems',
    'Detailed analytics and insights',
    'Multi-language support',
    'Customizable personality and tone'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Natural language processing, multi-channel deployment, and enterprise-grade security." />
        <meta name="keywords" content="AI chatbot, conversational AI, chatbot builder, natural language processing, customer support automation" />
        <meta property="og:title" content="AI Chatbot Builder - Zion Tech Group" />
        <meta property="og:description" content="Build intelligent chatbots with our AI-powered platform" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-chatbot-builder" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent, conversational AI chatbots that understand context, learn from interactions, and provide exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Building
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
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
              Powerful AI Chatbot Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build chatbots that understand, learn, and deliver exceptional user experiences.
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
              Why Choose Our AI Chatbot Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent automation for your business.
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
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Start creating intelligent conversations that engage your customers and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilderPage;

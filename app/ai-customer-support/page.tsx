'use client';
import React from 'react';
import Link from 'next/link';
import { Headphones, Brain, MessageCircle, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate responses',
      benefits: ['24/7 availability', 'Multi-language support', 'Instant responses']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Support',
      description: 'Seamless support across all channels - chat, email, phone, and social media',
      benefits: ['Unified experience', 'Context preservation', 'Channel switching']
    },
    {
      icon: Headphones,
      title: 'Human-AI Collaboration',
      description: 'Smart escalation to human agents when AI reaches its limits',
      benefits: ['Seamless handoff', 'Agent assistance', 'Quality assurance']
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Real-time AI-powered chat support with instant responses',
      icon: MessageCircle,
      features: ['Instant responses', 'Context awareness', 'Escalation to humans']
    },
    {
      title: 'Email Support',
      description: 'AI-enhanced email support with smart routing and responses',
      icon: Headphones,
      features: ['Smart routing', 'Auto-responses', 'Sentiment analysis']
    },
    {
      title: 'Phone Support',
      description: 'AI voice assistants for initial screening and routing',
      icon: Zap,
      features: ['Voice recognition', 'Call routing', 'Transcription']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Customer Support
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize your customer support with AI-powered solutions that provide instant, 
              accurate, and personalized assistance 24/7. Reduce response times by 90% while 
              improving customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Support Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer support platform combines natural language processing, 
              machine learning, and human expertise to deliver exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Channels Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Omnichannel Support Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Provide consistent, high-quality support across all customer touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <channel.icon className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Support?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">90% Faster Response</h3>
                    <p className="text-gray-300">Reduce response times from hours to seconds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
                    <p className="text-gray-300">Never miss a customer inquiry with round-the-clock support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                    <p className="text-gray-300">Reduce support costs by up to 70% while improving quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Support?</h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of companies already using our AI customer support 
                to deliver exceptional service experiences.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Start Your AI Support Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Customer Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let poor customer support hurt your business. Our AI solutions will help you 
            deliver exceptional service that keeps customers coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomerSupportPage;
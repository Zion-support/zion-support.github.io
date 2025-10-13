'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageCircle, Clock, CheckCircle, ArrowRight, Users, Zap, Shield } from 'lucide-react';

const AICustomerServicePage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context and provide accurate responses 24/7"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Multi-Channel Support",
      description: "Seamless support across email, chat, phone, and social media platforms"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Response",
      description: "Get immediate answers to customer queries with sub-second response times"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Handoff",
      description: "Smooth escalation to human agents when complex issues require personal attention"
    }
  ];

  const benefits = [
    "24/7 Customer Support",
    "Reduced Response Time",
    "Improved Customer Satisfaction",
    "Cost-Effective Solution",
    "Scalable Support System",
    "Multilingual Support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your customer service with AI-powered solutions. Intelligent chatbots, multi-channel support, and 24/7 assistance." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Customer Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your customer support with intelligent AI solutions that provide 
            instant, accurate, and personalized assistance around the clock.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AI Customer Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you implement intelligent customer service solutions 
            that will delight your customers and reduce support costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomerServicePage;
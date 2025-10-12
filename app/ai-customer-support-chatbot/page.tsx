'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Clock, Target, Shield, BarChart, Zap } from 'lucide-react';

export default function AICustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Intelligent Routing',
      description: 'Automatically route complex queries to the right human agents when needed'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR and SOC2 compliance built-in'
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-400" />,
      title: 'Analytics & Insights',
      description: 'Track performance, customer satisfaction, and identify improvement opportunities'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Quick Integration',
      description: 'Deploy in minutes with our easy-to-use APIs and pre-built connectors'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot that provides instant, intelligent responses 24/7. Boost customer satisfaction and reduce support costs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Chatbot
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer support with our advanced AI chatbot that understands context, 
                provides instant responses, and seamlessly escalates to human agents when needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to revolutionize your customer support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI chatbot to provide 
              exceptional customer experiences.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
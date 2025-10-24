'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Leverage advanced AI to create chatbots that understand context and provide intelligent responses',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Analytics & Insights',
      description: 'Track performance with detailed analytics and optimize your chatbot based on real user data',
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 70%',
    'Provide 24/7 customer assistance',
    'Handle multiple conversations simultaneously',
    'Improve customer satisfaction scores',
    'Scale support without hiring additional staff'
  ];

  const stats = [
    { number: '10,000+', label: 'Chatbots Created' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Languages Supported' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Chatbot Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots in minutes with our no-code AI-powered builder. 
            Engage customers 24/7 with natural language processing and advanced automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Chatbot Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, deploy, and manage intelligent chatbots
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Chatbot Builder?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your customer experience with intelligent automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI chatbot builder to enhance customer engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;
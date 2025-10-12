'use client';

import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Zap, 
  Users,
  Target,
  DollarSign,
  Clock,
  Shield,
  Settings,
  BarChart3
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIChatbotBuilderPage: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Custom Chatbots',
      description: 'Build intelligent chatbots tailored to your business needs',
      features: ['Natural language processing', 'Custom training', 'Multi-channel support', 'Analytics dashboard']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'Conversation Management',
      description: 'Advanced conversation flow and context management',
      features: ['Context awareness', 'Intent recognition', 'Fallback handling', 'Conversation history']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Integration',
      description: 'Seamless integration with your existing systems',
      features: ['API integration', 'CRM connection', 'Database access', 'Third-party tools']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Agent Support',
      description: 'Deploy chatbots across multiple channels and platforms',
      features: ['Web chat', 'Mobile apps', 'Social media', 'Voice assistants']
    }
  ];

  const useCases = [
    'Customer support automation',
    'Lead generation and qualification',
    'E-commerce assistance',
    'FAQ automation',
    'Appointment scheduling',
    'Order tracking',
    'Technical support',
    'Sales consultation'
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'Provide round-the-clock customer support without additional staff'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'Cost Reduction',
      description: 'Reduce support costs by up to 70% with automated responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Instant Responses',
      description: 'Provide immediate answers to customer queries and concerns'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Consistent Quality',
      description: 'Ensure consistent and accurate responses every time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI chatbot builder. Create custom conversational AI solutions for customer support, sales, and more." />
        <meta name="keywords" content="AI chatbot, chatbot builder, conversational AI, customer support, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Chatbot
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build intelligent chatbots that understand and respond to your customers naturally. 
            Create custom conversational AI solutions without coding knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Build Your Chatbot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chatbot Builder Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful tools and features to build intelligent chatbots that engage your customers effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbots can be used across various industries and business functions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300 text-sm">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Chatbot Builder?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbot builder provides everything you need to create powerful conversational AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Chatbot?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start building your intelligent chatbot today and transform your customer experience with AI-powered conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Building
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotBuilderPage;

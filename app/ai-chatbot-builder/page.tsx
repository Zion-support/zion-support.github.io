'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Brain, BarChart, Globe, Clock } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-5 h-5 ml-2" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-5 h-5 ml-2" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-5 h-5 ml-2" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Real-time Analytics',
      description: 'Track performance, user engagement, and conversation insights with comprehensive analytics',
      icon: <BarChart className="w-5 h-5 ml-2" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, compliance, and privacy protection',
      icon: <Shield className="w-5 h-5 ml-2" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and seamless handoff to humans',
      icon: <Clock className="w-5 h-5 ml-2" />,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 80%',
    'Improve response time from hours to seconds',
    'Scale customer service without hiring more staff',
    'Collect valuable customer insights and feedback',
    'Integrate with existing CRM and business tools',
    'Deploy in multiple languages and regions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Create intelligent, conversational chatbots without any coding. Deploy across multiple channels 
            and scale your customer engagement with advanced AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Powerful Features for Every Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our AI Chatbot Builder?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to create intelligent, 
            engaging customer experiences.
          </p>
          <Link
            to="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;
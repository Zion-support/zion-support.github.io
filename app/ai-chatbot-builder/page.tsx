'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle, Bot } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any coding knowledge using our intuitive drag-and-drop interface.',
      benefits: ['Drag-and-drop interface', 'Visual workflow builder', 'Pre-built templates', 'Easy customization']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels with seamless integration.',
      benefits: ['Website integration', 'Social media bots', 'Mobile apps', 'API integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics and insights.',
      benefits: ['Conversation analytics', 'User engagement metrics', 'Performance insights', 'A/B testing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance features for your peace of mind.',
      benefits: ['Data encryption', 'GDPR compliance', 'SOC 2 certified', 'Secure hosting']
    },
    {
      icon: Zap,
      title: 'AI-Powered Responses',
      description: 'Leverage advanced AI to provide intelligent, context-aware responses to your customers.',
      benefits: ['Natural language processing', 'Context understanding', 'Sentiment analysis', 'Learning capabilities']
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Automatically capture and qualify leads with intelligent conversation flows.',
      benefits: ['Lead qualification', 'Contact collection', 'CRM integration', 'Follow-up automation']
    }
  ];

  const benefits = [
    'Reduce customer support costs by up to 60%',
    'Provide 24/7 customer assistance',
    'Improve response time to under 1 second',
    'Increase customer satisfaction scores',
    'Scale support without additional staff'
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with intelligent responses and escalation to human agents when needed',
      icon: '🎧'
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically with engaging conversation flows and smart follow-ups',
      icon: '📈'
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases with personalized recommendations',
      icon: '🛒'
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and provide employee support for HR, IT, and other departments',
      icon: '👥'
    },
    {
      title: 'Appointment Booking',
      description: 'Automate appointment scheduling, reminders, and rescheduling with calendar integration',
      icon: '📅'
    },
    {
      title: 'FAQ Automation',
      description: 'Answer frequently asked questions instantly and reduce repetitive support tickets',
      icon: '❓'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | No-Code Chatbot Platform</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create, deploy, and manage AI-powered chatbots for customer support, lead generation, and more." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, chatbot platform, customer support automation" />
        <meta property="og:title" content="AI Chatbot Builder - Zion Tech Group" />
        <meta property="og:description" content="Build intelligent chatbots without coding" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Chatbot Builder
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
              Create Intelligent Chatbots Without Coding
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build, deploy, and manage AI-powered chatbots that engage your customers, generate leads, 
              and provide 24/7 support with our intuitive no-code platform.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Powerful Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build and deploy intelligent chatbots that deliver results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Chatbot Builder?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform customer engagement and business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how chatbots can transform different aspects of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Build Your Chatbot?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start building your intelligent chatbot today and transform your customer experience 
                with our powerful no-code platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AiChatbotBuilderPage;

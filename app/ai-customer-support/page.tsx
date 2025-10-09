'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageSquare, Headphones, Bot, Users, Clock, CheckCircle, ArrowRight, Star, TrendingUp, Globe, Smartphone, Code, Database, Cloud, Lock, Zap, Brain } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate, helpful responses 24/7.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Seamlessly handle customer inquiries across chat, email, phone, and social media.'
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities to understand customer intent and sentiment in real-time.'
    },
    {
      icon: Users,
      title: 'Human-AI Handoff',
      description: 'Smooth escalation to human agents when complex issues require personal attention.'
    },
    {
      icon: Clock,
      title: 'Instant Response',
      description: 'Sub-second response times for common queries, improving customer satisfaction.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'AI learns from every interaction to provide increasingly better support experiences.'
    }
  ];

  const capabilities = [
    {
      title: 'Ticket Classification',
      description: 'Automatically categorize and prioritize support tickets based on urgency and complexity.',
      icon: CheckCircle
    },
    {
      title: 'Sentiment Analysis',
      description: 'Detect customer emotions and adjust response tone accordingly for better outcomes.',
      icon: MessageSquare
    },
    {
      title: 'Knowledge Base Integration',
      description: 'Access comprehensive knowledge bases to provide accurate, up-to-date information.',
      icon: Database
    },
    {
      title: 'Proactive Support',
      description: 'Identify potential issues before customers report them and reach out proactively.',
      icon: Zap
    },
    {
      title: 'Multi-Language Support',
      description: 'Provide support in multiple languages with accurate translation and cultural context.',
      icon: Globe
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed insights into support metrics, customer satisfaction, and resolution times.',
      icon: TrendingUp
    }
  ];

  const benefits = [
    'Reduce support costs by up to 70%',
    'Improve response times by 90%',
    'Increase customer satisfaction scores',
    'Handle 10x more inquiries simultaneously',
    '24/7 availability across all channels',
    'Consistent, high-quality support experience'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              AI-Powered Customer Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Customer
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI that understands, learns, and delivers exceptional service experiences across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Support Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer support platform combines natural language processing, machine learning, and human expertise to deliver unparalleled service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Support Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From ticket management to proactive outreach, our AI handles every aspect of customer support with intelligence and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI customer support solutions deliver quantifiable results that improve both customer satisfaction and operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-300 mb-6">Faster Response Times</div>
                <div className="text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-gray-300 mb-6">Cost Reduction</div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using AI to deliver exceptional customer experiences and reduce support costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;
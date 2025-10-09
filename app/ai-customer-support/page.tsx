'use client';
import React from 'react';
import { MessageSquare, Users, Clock, CheckCircle, ArrowRight, Star, Shield, TrendingUp, Headphones, Bot } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context, provide accurate answers, and escalate complex issues to human agents.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Unified support across email, chat, phone, and social media with consistent AI assistance.'
    },
    {
      icon: Users,
      title: 'Smart Ticket Routing',
      description: 'Automatically categorize and route support tickets to the right team members based on content and priority.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with AI agents that never sleep, ensuring customers always get help.'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'Real-time analysis of customer emotions to provide proactive support and improve satisfaction.'
    },
    {
      icon: Shield,
      title: 'Knowledge Base Integration',
      description: 'Seamless integration with your knowledge base for instant access to relevant information and solutions.'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Reduce response time by 80%' },
    { icon: CheckCircle, text: 'Increase customer satisfaction by 40%' },
    { icon: CheckCircle, text: 'Handle 70% of inquiries automatically' },
    { icon: CheckCircle, text: 'Reduce support costs by 60%' },
    { icon: CheckCircle, text: 'Provide 24/7 customer support' },
    { icon: CheckCircle, text: 'Improve first-call resolution rate' }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Real-time AI-powered chat support with instant responses',
      icon: MessageSquare
    },
    {
      title: 'Email Support',
      description: 'Intelligent email processing and automated responses',
      icon: Users
    },
    {
      title: 'Phone Support',
      description: 'AI voice assistants for initial screening and routing',
      icon: Headphones
    },
    {
      title: 'Social Media',
      description: 'Automated social media monitoring and response',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Customer Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with intelligent AI solutions that provide instant, accurate, 
              and personalized assistance 24/7. Boost satisfaction while reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Auto Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
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
              Comprehensive AI-powered customer support solutions that scale with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent customer support that delights your customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Channel Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Provide consistent AI-powered support across all customer touchpoints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using our AI support solutions to delight their customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Get Started Today
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;
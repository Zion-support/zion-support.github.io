'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageCircle, 
  Headphones, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Bot,
  FileText,
  Bell,
  Settings,
  TrendingUp,
  Star
} from 'lucide-react';

const MicroSaasCustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Unified support across email, chat, phone, and social media platforms'
    },
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that provide instant responses and escalate complex issues'
    },
    {
      icon: Headphones,
      title: 'Live Agent Support',
      description: 'Human agents available 24/7 for personalized customer assistance'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Smart automation for ticket routing, prioritization, and resolution'
    },
    {
      icon: Shield,
      title: 'Knowledge Base',
      description: 'Comprehensive self-service portal with searchable articles and FAQs'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Real-time analytics to track performance and improve customer satisfaction'
    }
  ];

  const capabilities = [
    {
      title: 'Ticket Management',
      description: 'Streamlined ticket creation, tracking, and resolution process',
      features: ['Auto-ticket creation', 'Priority assignment', 'SLA tracking', 'Escalation rules']
    },
    {
      title: 'Live Chat Support',
      description: 'Real-time chat with customers and internal team collaboration',
      features: ['Proactive chat', 'File sharing', 'Screen sharing', 'Chat transcripts']
    },
    {
      title: 'Knowledge Management',
      description: 'Centralized knowledge base with intelligent search and suggestions',
      features: ['Article management', 'Version control', 'Search optimization', 'Feedback system']
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics for support team optimization',
      features: ['Response time metrics', 'Customer satisfaction', 'Agent performance', 'Trend analysis']
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Zendesk', icon: '🎫', description: 'Ticket management' },
    { name: 'Intercom', icon: '💬', description: 'Customer messaging' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'Jira', icon: '🎯', description: 'Issue tracking' },
    { name: 'WhatsApp', icon: '📱', description: 'Messaging platform' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Customer Support - AI-Powered Support Platform | Zion Tech Group</title>
        <meta name="description" content="Enhance customer support with our AI-powered micro SaaS platform. Multi-channel support, chatbots, and intelligent ticket management." />
        <meta name="keywords" content="customer support software, helpdesk, ticket management, live chat, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-customer-support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Customer Support
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer support with our AI-powered micro SaaS platform. 
                Multi-channel support, intelligent automation, and exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
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
                Advanced Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS platform provides everything you need to deliver exceptional customer support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
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
                Everything you need to manage customer support efficiently and effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and experience the power of AI-driven customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasCustomerSupportPage;
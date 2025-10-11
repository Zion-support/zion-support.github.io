'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, MessageCircle, Zap, Shield, BarChart, Clock, Star, ArrowRight, CheckCircle, TrendingUp, PieChart, Target, Users, Headphones, Settings } from 'lucide-react';

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent customer support solutions.',
      benefits: ['Smart responses', 'Context understanding', 'Learning capabilities', 'Personalized support']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Provide support across multiple channels with consistent quality.',
      benefits: ['Live chat', 'Email support', 'Phone support', 'Social media']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to improve support performance.',
      benefits: ['Performance metrics', 'Customer satisfaction', 'Response times', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific customer needs with precision and accuracy.',
      benefits: ['Customer segmentation', 'Personalized responses', 'Proactive support', 'Issue resolution']
    }
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with AI assistance',
      benefits: ['Always available', 'Instant responses', 'Multilingual support', 'Scalable capacity']
    },
    {
      icon: Settings,
      title: 'Automated Workflows',
      description: 'Streamline support processes with intelligent automation',
      benefits: ['Ticket routing', 'Priority assignment', 'Escalation management', 'Resolution tracking']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between support agents',
      benefits: ['Shared knowledge base', 'Internal chat', 'Task assignment', 'Performance monitoring']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuously improve support performance with AI insights',
      benefits: ['Performance analytics', 'Training recommendations', 'Process optimization', 'Quality assurance']
    }
  ];

  const benefits = [
    'Reduce response time by 80%',
    'Increase customer satisfaction by 60%',
    'Handle 10x more inquiries simultaneously',
    '24/7 availability without additional staff',
    'Multilingual support for global reach',
    'Seamless integration with existing systems'
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction', icon: Star },
    { number: '80%', label: 'Faster Response Time', icon: Zap },
    { number: '24/7', label: 'Availability', icon: Clock },
    { number: '50+', label: 'Languages Supported', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered solutions. Intelligent chatbots, automated workflows, and 24/7 support capabilities." />
        <meta name="keywords" content="AI customer support, chatbot, customer service, support automation, 24/7 support" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Customer Support</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer support with AI-powered solutions. Intelligent chatbots, automated workflows, and 24/7 support capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered customer support platform provides comprehensive solutions for all your support needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered customer support platform provides intelligent solutions to enhance your customer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer support with AI-driven solutions and achieve exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our AI customer support solutions today and provide exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiCustomerSupportPage;
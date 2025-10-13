'use client';
import React from 'react';

import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
const AnalyticsToolsPage: React.FC = () => {
  const analyticsTools = [
    {
      title: 'AI Business Intelligence',
      price: '$399/month',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📊',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Web Analytics',
      price: '$299/month',
      description: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.',
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring'],
      icon: '🌐',
      category: 'Web Analytics'
    },
    {
      title: 'AI Marketing Analytics',
      price: '$249/month',
      description: 'Marketing performance analytics with AI-powered optimization recommendations.',
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights'],
      icon: '📈',
      category: 'Marketing Analytics'
    },
    {
      title: 'AI Sales Analytics',
      price: '$199/month',
      description: 'Sales performance analytics with AI-powered forecasting and optimization.',
      features: ['Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights'],
      icon: '💰',
      category: 'Sales Analytics'
    },
    {
      title: 'AI Customer Analytics',
      price: '$179/month',
      description: 'Customer behavior analytics with AI-powered insights and personalization.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights'],
      icon: '👥',
      category: 'Customer Analytics'
    },
    {
      title: 'AI Financial Analytics',
      price: '$349/month',
      description: 'Financial performance analytics with AI-powered insights and risk assessment.',
      features: ['Financial reporting', 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling'],
      icon: '💳',
      category: 'Financial Analytics'
    }
  ];
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive analytics and AI insights'
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'Anticipate trends and opportunities with AI-powered predictions'
    },
    {
      icon: BarChart,
      title: 'Real-Time Monitoring',
      description: 'Track performance in real-time with live dashboards and alerts'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage advanced AI algorithms for deeper insights and automation'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced analytics tools.</p>
      {/* Features Section */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?

      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our analytics tools for your business.</p>
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your analytics needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your analytics needs and get a customized solution.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  </
};

export default PagePage;

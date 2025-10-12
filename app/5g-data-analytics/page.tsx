import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Zap, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FiveGDataAnalyticsPage() {
  const features = [
    {
      title: 'Real-time Insights',
      description: 'Get instant insights into network performance and user experience',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Anticipate issues and optimize performance with AI-powered predictions',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Tailored dashboards for different stakeholders and use cases',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Automated Reporting',
      description: 'Automated reports and alerts for proactive network management',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  const benefits = [
    'Improved data visibility',
    'Better decision making',
    'Cost optimization',
    'Enhanced network performance',
    'Proactive issue resolution',
    'Scalable analytics platform'
  ];

  const stats = [
    { label: 'Data Points Processed', value: '1M+', icon: <BarChart3 className="w-8 h-8 text-blue-500" /> },
    { label: 'Network Uptime', value: '99.9%', icon: <Clock className="w-8 h-8 text-green-500" /> },
    { label: 'Cost Savings', value: '30%', icon: <TrendingUp className="w-8 h-8 text-purple-500" /> },
    { label: 'Response Time', value: '<1ms', icon: <Zap className="w-8 h-8 text-orange-500" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for network optimization, performance monitoring, and business intelligence." />
        <meta name="keywords" content="5G analytics, data analytics, network optimization, performance monitoring, business intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Data
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your 5G network with advanced data analytics, real-time insights, and AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G data analytics solutions designed for modern networks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of advanced 5G data analytics for your network.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your 5G Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our 5G data analytics solutions can transform your network performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Analytics Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
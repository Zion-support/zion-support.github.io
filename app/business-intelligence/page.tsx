'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Database, TrendingUp, Brain } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const _features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for informed decision making'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Integration',
      description: 'Seamless integration with multiple data sources and real-time processing'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Metrics',
      description: 'Track KPIs and business performance with customizable dashboards'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms for predictive analytics and trend analysis'
    }
  ];

  const _benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Customizable dashboards and reports'
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced business intelligence solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced business intelligence platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {_features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Our Business Intelligence Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {_benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to learn more about our business intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;
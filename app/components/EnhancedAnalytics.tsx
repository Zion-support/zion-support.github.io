'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { BarChart, TrendingUp, Users, Eye, MousePointer, Clock } from 'lucide-react';

const EnhancedAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data insights and reporting'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Tracking',
      description: 'Live performance monitoring and metrics'
    },
    {
      icon: Users,
      title: 'User Behavior',
      description: 'Detailed user interaction analysis'
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Interactive charts and dashboards'
    }
  ];

  const benefits = [
    'Real-time data processing',
    'Custom dashboard creation',
    'Advanced filtering options',
    'Export capabilities',
    'API integration',
    'Mobile responsive design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enhanced Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful analytics and insights to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our analytics solutions provide comprehensive insights and real-time data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhanced analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
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
              Contact us today to learn how our analytics can transform your business.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    console.log('Analytics Event:', event, parameters);
  }, []);

  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);

  return <>{children}</>;
};

export default EnhancedAnalyticsPage;
export { AnalyticsProvider };
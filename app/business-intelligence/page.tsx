'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, Database, Target } from 'lucide-react';

export default function BusinessIntelligencePage() {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Leverage powerful analytics tools to gain deep insights into your business performance.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics and KPIs with interactive, real-time dashboards.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources for comprehensive analysis.',
      icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Predictive Modeling',
      description: 'Use AI-powered predictive models to forecast trends and make informed decisions.',
      icon: <Target className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive business intelligence solutions. Advanced analytics, real-time dashboards, and predictive modeling." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Business Intelligence Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your data into actionable insights with our comprehensive business intelligence platform. 
                Make data-driven decisions that drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Key Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Powerful business intelligence tools designed for modern enterprises
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Data?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our business intelligence solutions can help you make better decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
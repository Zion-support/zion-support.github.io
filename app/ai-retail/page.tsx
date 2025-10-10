'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ShoppingCart, BarChart3, Shield, Brain, ArrowRight, Zap, Users, Target, Clock, Heart, Leaf, ShoppingCart, Trophy } from 'lucide-react';

const AiretailPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Retail Analytics',
      description: 'AI-powered analytics for sales, inventory, and customer behavior'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep insights into customer preferences and buying patterns'
    },
    {
      icon: Target,
      title: 'Inventory Optimization',
      description: 'Intelligent inventory management and demand forecasting'
    },
    {
      icon: Zap,
      title: 'Price Optimization',
      description: 'Dynamic pricing strategies based on market conditions'
    }
  ];

  const benefits = [
    '20% increase in sales',
    'Optimized inventory management',
    'Personalized customer experiences',
    'Dynamic pricing strategies',
    'Real-time analytics',
    'Reduced operational costs'
  ];

  return (
    <>
      <Helmet>
        <title>AI Retail Solutions | Zion Tech Group - AI-Powered Solutions</title>
        <meta name="description" content="AI-powered retail analytics, customer insights, and inventory optimization" />
        <meta name="keywords" content="ai, retail, AI solutions, technology, automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Retail Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              AI-powered retail analytics, customer insights, and inventory optimization
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered solutions provide comprehensive capabilities for your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Key Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience significant improvements in efficiency, accuracy, and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiretailPage;
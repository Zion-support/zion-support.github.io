'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const PricingPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge technology solutions for modern businesses.',
      benefits: ['Latest innovations', 'Scalable solutions', 'High performance', 'Future-proof']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and insights.',
      benefits: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Targeted solutions designed for your specific needs.',
      benefits: ['Custom solutions', 'Expert consultation', 'Proven results', 'Ongoing support']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Years Experience', value: '5+' }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Advanced pricing solutions powered by artificial intelligence to transform your business operations." />
        <meta name="keywords" content="AI, Pricing, automation, technology, solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced pricing solutions powered by artificial intelligence to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-300">
              Powerful capabilities designed to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our Pricing solution today and see the difference AI can make.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
};

export default PricingPage;

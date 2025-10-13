import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, TrendingUp, Target, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';

const AIExpenseTrackerPage = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Smart Expense Tracking',
      description: 'Intelligent expense tracking and categorization.',
      benefits: ['Smart categorization', 'Receipt scanning', 'Automated insights', 'Real-time tracking']
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Comprehensive expense analytics and reporting.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: Star,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Gain competitive advantage with advanced technology',
    'Streamline operations and increase efficiency',
    'Reduce manual work and human error',
    'Scale your business with intelligent automation'
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracking for enhanced financial management and efficiency." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Expense Tracker
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered expense tracking solution for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-300 mb-4">Advanced AI technology that drives results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
            <p className="text-gray-300 mb-4">Proven results that drive business growth and efficiency</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4">
                  <Star className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Benefit {index + 1}</h3>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Expense Management?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our experts to discuss your expense tracking needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIExpenseTrackerPage;

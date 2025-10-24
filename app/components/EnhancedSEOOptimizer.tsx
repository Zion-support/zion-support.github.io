'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Phone, Mail, Zap, Shield, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

const EnhancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and reporting for informed decision-making.',
      benefits: ['Real-time metrics', 'Custom dashboards', 'Performance tracking', 'ROI analysis']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right audience with laser-focused marketing strategies.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'A/B testing']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Continuous optimization to maximize your business growth potential.',
      benefits: ['Performance monitoring', 'Growth strategies', 'Scalability planning', 'Market expansion']
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings across all major engines',
    'Boost conversion rates with AI-powered optimization',
    'Reduce marketing costs while increasing ROI'
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered SEO optimization solutions for maximum search engine visibility and organic growth." />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Enhanced SEO Optimizer
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered SEO optimization that transforms your search engine visibility, 
                drives organic traffic, and accelerates your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-full">
                      <feature.icon className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our SEO Optimizer?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto">
                Start SEO Optimization
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedSEOOptimizerPage;
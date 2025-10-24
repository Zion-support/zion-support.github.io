'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Target, TrendingUp, BarChart, ArrowRight } from 'lucide-react';

interface EnhancedSEOOptimizerProps {
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ className = '' }) => {
  const features = [
    {
      icon: Search,
      title: 'SEO Analysis',
      description: 'Comprehensive SEO analysis and optimization recommendations.',
      benefits: ['Keyword research', 'Content optimization', 'Technical SEO', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Target Optimization',
      description: 'Precise targeting and optimization strategies.',
      benefits: ['Audience targeting', 'Conversion optimization', 'A/B testing', 'ROI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor and track your SEO growth and performance.',
      benefits: ['Performance monitoring', 'Growth analytics', 'Trend analysis', 'Success metrics']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Detailed analytics and reporting for your SEO efforts.',
      benefits: ['Custom reports', 'Data visualization', 'Insights dashboard', 'Performance metrics']
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings with AI-powered optimization',
    'Reduce bounce rate with better user experience',
    'Scale your content strategy with automated insights',
    'Gain competitive advantage with advanced SEO tools'
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Professional SEO optimization services by Zion Tech Group. Advanced AI-powered SEO solutions for your business." />
        <meta name="keywords" content="SEO, search engine optimization, AI SEO, digital marketing, content optimization" />
      </Helmet>
      
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 ${className}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enhanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional SEO optimization services by Zion Tech Group. Advanced AI-powered SEO solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful SEO optimization features designed to boost your search rankings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="h-2 w-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></div>
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our SEO Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge SEO optimization technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-6 w-6 bg-emerald-400 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your SEO?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our SEO optimization solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnhancedSEOOptimizer;

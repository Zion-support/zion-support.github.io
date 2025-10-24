'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react';

interface EnhancedSEOOptimizerProps {
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ className = '' }) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO Analysis',
      description: 'Advanced AI algorithms that analyze your website and provide intelligent SEO recommendations.',
      benefits: ['Smart keyword suggestions', 'Content optimization', 'Technical SEO analysis', 'Competitor insights']
    },
    {
      icon: Globe,
      title: 'Global SEO Optimization',
      description: 'Comprehensive SEO strategies for international markets and multiple languages.',
      benefits: ['Multi-language support', 'Local SEO optimization', 'International targeting', 'Cultural adaptation']
    },
    {
      icon: Zap,
      title: 'Performance Enhancement',
      description: 'Optimize your website performance for better search engine rankings.',
      benefits: ['Page speed optimization', 'Core Web Vitals', 'Mobile optimization', 'User experience']
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Build trust with search engines through proper security and technical implementation.',
      benefits: ['SSL optimization', 'Security headers', 'Trust signals', 'Compliance checks']
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings across all major search engines',
    'Reduce bounce rate with better user experience',
    'Scale your online presence globally',
    'Gain competitive advantage with advanced SEO strategies'
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced SEO Optimizer | Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization services by Zion Tech Group. AI-powered SEO analysis and optimization for better search rankings." />
        <meta name="keywords" content="SEO optimization, search engine optimization, AI SEO, digital marketing, Zion Tech Group" />
      </Helmet>
      
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Enhanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your website's search engine performance with our AI-powered SEO optimization services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our SEO Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI-powered SEO optimization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your SEO?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our SEO experts to get a customized optimization strategy for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedSEOOptimizer;
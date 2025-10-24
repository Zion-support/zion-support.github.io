'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

const EnhancedSEOPage: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable cloud infrastructure'
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered SEO',
      description: 'Advanced machine learning algorithms that analyze and optimize your content for maximum search engine visibility.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous monitoring and optimization of your SEO performance with instant feedback and recommendations.'
    },
    {
      icon: Shield,
      title: 'White-hat Techniques',
      description: 'Ethical SEO practices that ensure long-term success and compliance with search engine guidelines.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Optimize your content for multiple languages and regions to maximize your global market presence.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced SEO Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered SEO solutions for maximum search engine visibility and organic growth." />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Enhanced SEO Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered SEO solutions that boost your search engine rankings, 
                increase organic traffic, and drive sustainable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-500/20 rounded-full">
                      <feature.icon className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto">
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

export default EnhancedSEOPage;
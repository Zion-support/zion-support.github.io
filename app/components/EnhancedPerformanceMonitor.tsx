'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

const EnhancedPerformanceMonitorPage: React.FC = () => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases'
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms that provide real-time insights and predictive analytics for optimal performance monitoring.'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of system performance with instant alerts and automated responses to issues.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Seamlessly scale your monitoring infrastructure across multiple regions and cloud providers.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enhanced Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered performance monitoring solutions for enterprise applications." />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Enhanced Performance Monitor
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered performance monitoring that provides real-time insights, 
                predictive analytics, and automated optimization for your enterprise applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <feature.icon className="h-8 w-8 text-blue-400" />
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
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedPerformanceMonitorPage;
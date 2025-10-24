'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Advanced AI technology to transform your business operations and improve efficiency',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast processing and real-time analytics for optimal results',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption and compliance standards',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Worldwide deployment and support for international businesses',
  }
];

const benefits = [
  'Advanced AI technology integration',
  'Real-time processing and analytics',
  'Enterprise-grade security and compliance',
  'Scalable and flexible solutions',
  '24/7 technical support',
  'Easy integration with existing systems',
  'Cost-effective pricing plans',
  'Proven track record of success'
];

const AdvancedAccessibilityEnhancer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>Advanced Accessibility Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional Advanced Accessibility Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="Advanced Accessibility Enhancer, AI solutions, IT services, Zion Tech Group, accessibility" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Accessibility Enhancer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your digital experience with our cutting-edge accessibility solutions powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Advanced Accessibility Enhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive accessibility solutions are designed to make your digital products inclusive and accessible to everyone.
            </p>
          </div>

          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our accessibility solutions can transform your digital presence and reach a wider audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enhance Your Accessibility?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with our advanced accessibility solutions and make your digital products accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;
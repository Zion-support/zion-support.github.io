'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const AdvancedAccessibilityEnhancer: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Accessibility',
      description: 'Advanced AI technology that automatically enhances website accessibility for all users.',
      benefits: ['WCAG 2.1 AA compliance', 'Screen reader optimization', 'Keyboard navigation', 'Color contrast enhancement']
    },
    {
      icon: Brain,
      title: 'Intelligent Analysis',
      description: 'Comprehensive analysis of your website to identify and fix accessibility issues.',
      benefits: ['Automated scanning', 'Issue detection', 'Priority ranking', 'Fix recommendations']
    },
    {
      icon: Zap,
      title: 'Real-Time Enhancement',
      description: 'Live accessibility improvements that work instantly without code changes.',
      benefits: ['Instant fixes', 'No downtime', 'Continuous monitoring', 'Automatic updates']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Accessibility enhancements that work across multiple languages and regions.',
      benefits: ['Global compatibility', 'Language detection', 'Cultural adaptation', 'Regional compliance']
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

  const useCases = [
    {
      title: 'Government Websites',
      description: 'Ensure compliance with accessibility standards for public sector websites',
      icon: '🏛️'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Make online shopping accessible to all customers',
      icon: '🛒'
    },
    {
      title: 'Educational Platforms',
      description: 'Provide equal access to educational content for all students',
      icon: '🎓'
    },
    {
      title: 'Healthcare Websites',
      description: 'Ensure critical health information is accessible to everyone',
      icon: '🏥'
    },
    {
      title: 'Financial Services',
      description: 'Make banking and financial services accessible to all users',
      icon: '🏦'
    },
    {
      title: 'Corporate Websites',
      description: 'Enhance accessibility for corporate and business websites',
      icon: '🏢'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Accessibility Enhancer - Zion Tech Group</title>
        <meta name="description" content="Transform your website's accessibility with our AI-powered Advanced Accessibility Enhancer. Ensure WCAG compliance and improve user experience for all visitors." />
        <meta name="keywords" content="accessibility enhancer, WCAG compliance, AI accessibility, website accessibility, screen reader, disability access" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Accessibility
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enhancer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your website's accessibility with our AI-powered solution. 
              Ensure WCAG compliance and improve user experience for all visitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive tools to make your website accessible to everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Accessibility Enhancer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that improve accessibility and user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for websites that need to be accessible to all users
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Enhance Accessibility?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start making your website accessible to everyone with our AI-powered solution today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;
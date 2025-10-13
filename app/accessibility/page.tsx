'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sign language', 'Visual alerts']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent design', 'Simplified language', 'Progress indicators']
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Meet all legal requirements and avoid accessibility-related lawsuits'
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Reach a broader audience and improve user experience for all users'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Comply with international accessibility standards and best practices'
    },
    {
      icon: Zap,
      title: 'Performance Boost',
      description: 'Accessible websites often perform better and rank higher in search results'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accessibility Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Creating inclusive digital experiences that work for everyone. Our accessibility solutions 
            ensure your applications are usable by people of all abilities and compliant with global standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Get Accessibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-6 flex-shrink-0">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standards Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Accessibility Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your App Accessible?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create inclusive digital experiences that work for everyone. 
            Get started with our comprehensive accessibility audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Start Accessibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
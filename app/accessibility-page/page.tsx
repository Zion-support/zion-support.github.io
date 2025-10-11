'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target, BarChart, Zap } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and scalable text'
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats'
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies'
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure data handling and privacy protection for all users'
    }
  ];

  const services = [
    {
      icon: CheckCircle,
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital assets for compliance'
    },
    {
      icon: Target,
      title: 'WCAG Compliance',
      description: 'Implementation of WCAG 2.1 AA standards across all platforms'
    },
    {
      icon: BarChart,
      title: 'Performance Testing',
      description: 'Testing with assistive technologies and real user scenarios'
    },
    {
      icon: Zap,
      title: 'Quick Fixes',
      description: 'Rapid implementation of critical accessibility improvements'
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Legal Compliance',
      description: 'Meet accessibility requirements and avoid legal issues'
    },
    {
      icon: Target,
      title: 'Broader Reach',
      description: 'Access your services to a wider audience including users with disabilities'
    },
    {
      icon: BarChart,
      title: 'Better UX',
      description: 'Improved user experience for all users, not just those with disabilities'
    },
    {
      icon: Zap,
      title: 'SEO Benefits',
      description: 'Better search engine rankings through improved accessibility'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Making your digital products accessible to everyone with comprehensive accessibility solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <service.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Standards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center">
                  <p className="text-white font-medium">{standard}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <benefit.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Products Accessible?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our accessibility solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccessibilityPage;
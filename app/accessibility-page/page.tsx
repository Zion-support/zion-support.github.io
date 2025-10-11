'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and scalable text options.',
      benefits: ['Screen reader support', 'High contrast themes', 'Text scaling', 'Color blind friendly']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sign language support', 'Audio transcripts']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear language, consistent navigation, and cognitive load reduction.',
      benefits: ['Clear language', 'Consistent UI', 'Reduced complexity', 'Memory aids']
    }
  ];

  const benefits = [
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast mode',
    'Text scaling up to 200%',
    'Alternative text for images',
    'Focus indicators',
    'Skip navigation links'
  ];

  const standards = [
    {
      icon: Shield,
      title: 'WCAG 2.1 AA',
      description: 'We follow Web Content Accessibility Guidelines 2.1 Level AA standards.'
    },
    {
      icon: CheckCircle,
      title: 'Section 508',
      description: 'Compliance with Section 508 of the Rehabilitation Act.'
    },
    {
      icon: Brain,
      title: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessible web design and development services ensuring inclusive digital experiences" />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, web accessibility, ADA compliance" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone, regardless of ability or disability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive accessibility solutions for inclusive digital experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accessibility Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Why accessibility matters for your business and users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We ensure compliance with international accessibility standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => {
                const Icon = standard.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{standard.title}</h3>
                    <p className="text-gray-300">{standard.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Site Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create an inclusive digital experience that works for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Accessibility Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AccessibilityPage;
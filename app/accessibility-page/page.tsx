'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments.',
      benefits: ['High contrast themes', 'Font scaling', 'Screen reader support', 'Color blind friendly']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simplified interfaces', 'Progress indicators']
    }
  ];

  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Fully Compliant',
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Fully Compliant',
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Fully Compliant',
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Fully Compliant',
    }
  ];

  const accessibilityFeatures = [
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast mode',
    'Font size adjustment',
    'Focus indicators',
    'Alt text for images',
    'Semantic HTML structure',
    'ARIA labels and roles',
    'Color contrast compliance',
    'Voice control support'
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design. We ensure our digital solutions are accessible to everyone." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Accessibility className="h-16 w-16 text-cyan-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">First</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our digital solutions work for users of all abilities.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Accessibility Features
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive accessibility features designed for all users
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

          {/* Compliance Standards */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Compliance Standards
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  We meet and exceed international accessibility standards
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{standard.name}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{standard.description}</p>
                    <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Features */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Implementation Features
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Key accessibility features implemented across our platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessibilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Experience Accessible Technology</h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover how our accessible solutions can benefit your organization and users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AccessibilityPage;
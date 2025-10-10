'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Eye,
  Ear,
  MousePointer,
  Keyboard,
  Shield,
  CheckCircle,
  AlertCircle,
  Users,
  Monitor,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and scalable text options for users with visual impairments.',
      benefits: ['Screen reader support', 'High contrast themes', 'Text scaling', 'Color-blind friendly palettes']
    },
    {
      icon: Ear,
      title: 'Auditory Accessibility',
      description: 'Captioning, transcripts, and visual indicators for users with hearing impairments.',
      benefits: ['Video captions', 'Audio transcripts', 'Visual alerts', 'Sign language support']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Full keyboard navigation', 'Voice commands', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive differences.',
      benefits: ['Clear language', 'Consistent navigation', 'Error prevention', 'Progress indicators']
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines level AA compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act digital accessibility standards',
      status: 'Fully Compliant'
    },
    {
      name: 'Section 508',
      description: 'U.S. federal accessibility requirements for electronic information',
      status: 'Fully Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Accessibility Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Creating inclusive digital experiences that work for everyone. 
                We ensure your applications are accessible to users of all abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Accessibility Audit
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Our Standards
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement a wide range of accessibility features to ensure your digital products are inclusive and usable by everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure full compliance with international accessibility standards and regulations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{standard.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-medium">{standard.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Accessibility Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your digital products meet the highest accessibility standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">
                  Comprehensive audit of your current digital assets using automated tools and manual testing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">
                  Development and integration of accessibility features and fixes based on audit findings.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Testing & Validation</h3>
                <p className="text-gray-300">
                  User testing with people with disabilities and validation against accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Make Your Digital Products Accessible
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let us help you create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Accessibility Audit
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AccessibilityPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features for users with visual impairments.',
      benefits: ['High contrast mode', 'Screen reader support', 'Text scaling', 'Color blind friendly']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio accessibility features for users with hearing impairments.',
      benefits: ['Closed captions', 'Audio descriptions', 'Visual alerts', 'Sign language support']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Motor accessibility features for users with physical disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Cognitive accessibility features for users with learning disabilities.',
      benefits: ['Clear language', 'Consistent navigation', 'Error prevention', 'Helpful instructions']
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant'
    },
    {
      name: 'Section 508',
      description: 'Section 508 of the Rehabilitation Act compliance',
      status: 'Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility services ensuring your digital products are accessible to all users, including those with disabilities." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, accessibility audit" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Accessibility Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Inclusive Digital Solutions for Everyone
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            We ensure your digital products are accessible to all users, including those with disabilities. 
            Our comprehensive accessibility services help you create inclusive experiences that comply with 
            international standards and regulations.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Accessibility Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-enhanced p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="cyber-card-enhanced p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{standard.name}</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Accessibility Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card-enhanced p-8">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Accessibility Audit</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive accessibility audit of your digital products to identify barriers and compliance issues.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  WCAG 2.1 AA compliance check
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated and manual testing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Detailed remediation report
                </li>
              </ul>
              <button className="w-full cyber-button-enhanced">
                Get Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="cyber-card-enhanced p-8">
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Accessibility Design</h3>
              <p className="text-gray-300 mb-6">
                Inclusive design services to create accessible user experiences from the ground up.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Inclusive design principles
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  User testing with disabled users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Accessibility-first development
                </li>
              </ul>
              <button className="w-full cyber-button-enhanced">
                Start Design
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="cyber-card-enhanced p-8">
              <CheckCircle className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Accessibility Training</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive training for your team on accessibility best practices and implementation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Developer training programs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Designer accessibility workshops
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Ongoing support and guidance
                </li>
              </ul>
              <button className="w-full cyber-button-enhanced">
                Get Training
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card-enhanced p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Make Your Digital Products Accessible
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our accessibility experts to ensure your digital products are inclusive and compliant with accessibility standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button-enhanced"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityPage;
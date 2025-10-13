import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Ear, Hand, Brain, Shield } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Accessibility,
      title: 'WCAG 2.1 AA Compliance',
      description: 'Full compliance with Web Content Accessibility Guidelines for inclusive web experiences.',
      benefits: ['Screen reader support', 'Keyboard navigation', 'Color contrast', 'Text alternatives']
    },
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Enhanced visual accessibility with high contrast modes and customizable text sizes.',
      benefits: ['High contrast mode', 'Text scaling', 'Color blind support', 'Focus indicators']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Comprehensive audio accessibility features for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments through alternative input methods.',
      benefits: ['Voice control', 'Switch navigation', 'Large click targets', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features designed to support users with cognitive disabilities and learning differences.',
      benefits: ['Clear navigation', 'Consistent design', 'Error prevention', 'Helpful instructions']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Secure and private accessibility features that protect user data and preferences.',
      benefits: ['Data protection', 'Secure storage', 'Privacy controls', 'Consent management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility - Inclusive Digital Solutions | Zion Tech Group</title>
        <meta name="description" content="Creating inclusive digital experiences with comprehensive accessibility solutions. WCAG compliance, assistive technology support, and universal design." />
        <meta name="keywords" content="accessibility, WCAG compliance, inclusive design, assistive technology, universal design, digital accessibility" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Digital
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Accessibility
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences with comprehensive accessibility solutions. 
              WCAG compliance, assistive technology support, and universal design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Inclusive Digital Experiences?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our accessibility solutions and make your digital products accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Accessibility Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPage;
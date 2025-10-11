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
      description: 'Comprehensive audio support including captions, transcripts, and audio descriptions.',
      benefits: ['Closed captions', 'Audio descriptions', 'Transcripts', 'Volume controls']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Alternative inputs', 'Customizable controls']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and customizable interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Customizable UI', 'Simple language']
    }
  ];

  const standards = [
    {
      title: 'WCAG 2.1 AA Compliance',
      description: 'We follow Web Content Accessibility Guidelines 2.1 Level AA standards.',
      icon: CheckCircle
    },
    {
      title: 'Section 508 Compliance',
      description: 'Our solutions meet Section 508 requirements for federal accessibility standards.',
      icon: CheckCircle
    },
    {
      title: 'ADA Compliance',
      description: 'We ensure compliance with Americans with Disabilities Act requirements.',
      icon: CheckCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Accessibility className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Accessibility Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Making digital experiences inclusive and accessible for everyone. We ensure your products meet the highest accessibility standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Accessibility Audit
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure your digital products meet all major accessibility standards and regulations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AccessibilityPage;
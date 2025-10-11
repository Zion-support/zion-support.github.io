'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and visual indicators for better user experience.',
      benefits: ['Screen reader support', 'High contrast themes', 'Focus indicators', 'Text scaling']
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for hearing-impaired users.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for better comprehension.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Consistent patterns', 'Error prevention']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Standards',
      description: 'WCAG 2.1 AA compliance and accessibility standards implementation for legal compliance.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance & Speed',
      description: 'Fast loading times and optimized performance for assistive technologies and all users.',
      benefits: ['Fast loading', 'Optimized performance', 'Efficient rendering', 'Resource optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility services and solutions for inclusive digital experiences." />
        <meta name="keywords" content="accessibility, inclusive design, wcag, ada compliance" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone, regardless of ability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
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
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Your Digital Experience Accessible?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our accessibility services and how we can help make your digital products inclusive for everyone.
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

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AccessibilityPage() {
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
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch navigation', 'Gesture alternatives']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Consistent patterns', 'Error prevention']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance Standards',
      description: 'Full compliance with WCAG 2.1 AA standards and ADA requirements.',
      benefits: ['WCAG 2.1 AA', 'ADA Compliance', 'Section 508', 'International Standards']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Testing & Validation',
      description: 'Comprehensive accessibility testing using automated tools and manual testing methods.',
      benefits: ['Automated testing', 'Manual testing', 'User testing', 'Continuous monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility Services - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility services and solutions for inclusive digital experiences." />
      </Helmet>
      <Navigation />
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional accessibility services and solutions for inclusive digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
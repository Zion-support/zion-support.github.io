'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target } from 'lucide-react';
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
      description: 'Audio descriptions, captions, and sound alternatives for hearing-impaired users.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sound alternatives', 'Volume controls']
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
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simplified interfaces', 'Progress indicators']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Safe navigation']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'WCAG Compliance',
      description: 'Full compliance with Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    }
  ]

  const stats = [
    { number: '15%', label: 'of the world population has a disability' },
    { number: '71%', label: 'of users with disabilities leave a website due to accessibility issues' },
    { number: '98%', label: 'of websites fail basic accessibility tests' },
    { number: '57%', label: 'increase in conversion rates with accessibility improvements' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users. WCAG compliant, ADA compliant, and user-friendly." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, screen reader, disability access" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people with diverse abilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions cover all aspects of digital accessibility, ensuring your applications are inclusive and compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-colors">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Digital Experience Accessible?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our accessibility experts help you create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Accessibility Audit
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccessibilityPage;
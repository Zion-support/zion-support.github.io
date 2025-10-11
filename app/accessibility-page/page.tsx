'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target, BarChart, Zap, ArrowRight } from 'lucide-react';
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
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for better comprehension.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Consistent patterns', 'Error prevention']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Standards',
      description: 'WCAG 2.1 AA compliance and accessibility standards implementation.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA Compliance', 'International Standards']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Testing & Validation',
      description: 'Comprehensive accessibility testing and validation services.',
      benefits: ['Automated testing', 'Manual testing', 'User testing', 'Continuous monitoring']
    }
  ];

  const stats = [
    { number: '100%', label: 'WCAG 2.1 AA Compliant' },
    { number: '50+', label: 'Accessibility Audits' },
    { number: '99%', label: 'Screen Reader Compatible' },
    { number: '24/7', label: 'Accessibility Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accessibility Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Creating inclusive digital experiences that work for everyone, regardless of ability or disability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Why Accessibility Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Legal Compliance</h3>
                  <p className="text-gray-300 mb-4">
                    Meet legal requirements and avoid costly lawsuits by ensuring your digital products are accessible to all users.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      ADA Compliance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Section 508 Standards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      International Guidelines
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Benefits</h3>
                  <p className="text-gray-300 mb-4">
                    Accessible websites reach more users, improve SEO, and demonstrate your commitment to inclusion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Expanded Market Reach
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Better SEO Performance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Enhanced User Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}
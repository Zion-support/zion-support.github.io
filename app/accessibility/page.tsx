'use client';

import React from 'react';
import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
import { Eye, Volume2, Keyboard, Mouse, CheckCircle, Shield, Brain, BarChart, Target, Globe, Code } from 'lucide-react';
// Metadata removed - client components can't export metadata


const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive support for users with visual impairments through screen readers, high contrast modes, and scalable text.',
      benefits: ['Screen reader compatibility', 'High contrast themes', 'Scalable fonts', 'Color-blind friendly palettes']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
    },
    {
      icon: Keyboard,
      title: 'Motor Accessibility',
      description: 'Support for users with motor impairments through alternative input methods.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
    },
    {
      icon: Mouse,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and simplified interfaces to support users with cognitive differences.',
      benefits: ['Clear language', 'Consistent navigation', 'Progress indicators', 'Error prevention']
    },
    {
      icon: Globe,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
    },
    {
      icon: Shield,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products to identify accessibility barriers and compliance gaps.',
      features: ['WCAG compliance testing', 'User testing with disabled users', 'Detailed remediation reports', 'Priority recommendations']
    },
    {
      icon: Code,
      title: 'Implementation Support',
      description: 'Technical implementation of accessibility features and best practices in your applications.',
      features: ['ARIA implementation', 'Semantic HTML structure', 'Focus management', 'Screen reader optimization']
    },
    {
      icon: BarChart,
      title: 'Training & Education',
      description: 'Comprehensive training programs for your team on accessibility best practices and inclusive design.',
      features: ['Developer workshops', 'Design guidelines', 'Testing methodologies', 'Ongoing support']
    },
    {
      icon: Target,
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and maintenance of accessibility compliance as your products evolve.',
      features: ['Automated testing', 'Regular audits', 'Performance tracking', 'Compliance reporting']
    }
  ];

  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Accessibility
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Footer removed temporarily */}
      </main>
    </div>
  )
}

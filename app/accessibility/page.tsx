'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Volume2, Keyboard, Mouse, CheckCircle, Shield, Brain, BarChart, _Target, Globe, _Code, Users } from 'lucide-react';

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
  
    }
  ];

  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA',
      status: 'Fully Compliant'
    },
    {
      name: 'Section 508',
      description: 'US Federal accessibility requirements',
      status: 'Fully Compliant'
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard',
      status: 'Fully Compliant'
    }
  ];

  const testingMethods = [
    {
      icon: CheckCircle,
      title: 'Automated Testing',
      description: 'Continuous testing using industry-standard accessibility tools and scanners.'
    },
    {
      icon: Users,
      title: 'User Testing',
      description: 'Real-world testing with users who have disabilities to ensure practical usability.'
    },
    {
      icon: Brain,
      title: 'Expert Review',
      description: 'Regular audits by accessibility experts and consultants.'
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Ongoing monitoring and reporting of accessibility metrics and compliance.'
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Accessibility & Inclusion
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We believe technology should be accessible to everyone. Our commitment to accessibility 
                ensures that our solutions work for users of all abilities and backgrounds.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  WCAG 2.1 AA Compliant
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Section 508 Compliant
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  ADA Compliant
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Accessibility Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accessibilityFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Compliance Standards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h3>
                    <p className="text-gray-600 mb-4">{standard.description}</p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Our Testing Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testingMethods.map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Committed to Accessibility
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're continuously working to improve accessibility across all our products and services. 
                If you encounter any accessibility barriers, please let us know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Report an Issue
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AccessibilityPage;
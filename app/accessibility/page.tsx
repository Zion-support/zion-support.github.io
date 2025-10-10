'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, MousePointer, Volume2, Keyboard, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility solutions including screen reader compatibility, high contrast modes, and text scaling.',
      benefits: ['Screen reader support', 'High contrast themes', 'Text scaling', 'Color contrast compliance']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Motor accessibility features for users with limited dexterity, including keyboard navigation and voice control.',
      benefits: ['Keyboard navigation', 'Voice control', 'Large click targets', 'Customizable controls']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio accessibility features including captions, transcripts, and audio descriptions for multimedia content.',
      benefits: ['Closed captions', 'Audio transcripts', 'Audio descriptions', 'Volume controls']
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard navigation support with logical tab order and keyboard shortcuts for all functionality.',
      benefits: ['Tab navigation', 'Keyboard shortcuts', 'Focus indicators', 'Skip links']
    },
    {
      icon: Monitor,
      title: 'Screen Reader Support',
      description: 'Comprehensive screen reader support with semantic HTML and ARIA labels for optimal accessibility.',
      benefits: ['ARIA labels', 'Semantic HTML', 'Screen reader testing', 'Voice output optimization']
    },
    {
      icon: Accessibility,
      title: 'WCAG Compliance',
      description: 'Full compliance with WCAG 2.1 AA standards ensuring your application is accessible to all users.',
      benefits: ['WCAG 2.1 AA compliance', 'Accessibility audits', 'Testing protocols', 'Documentation']
    }
  ];
  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users, with WCAG 2.1 AA compliance." />
        <meta name="keywords" content="accessibility, WCAG compliance, inclusive design, screen reader, keyboard navigation, digital accessibility" />
        <meta property="og:title" content="Accessibility Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users, with WCAG 2.1 AA compliance." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users, with WCAG 2.1 AA compliance." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Accessibility Solutions
              </h1>
              <p className="text-xl mb-8">
                Creating inclusive digital experiences that are accessible to all users, regardless of their abilities
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Accessibility Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make Your App Accessible?
            </h2>
            <p className="text-xl mb-8">
              Contact our accessibility experts to ensure your digital products are inclusive for all users
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccessibilityPage;
import React from 'react';
import Layout from '../components/Layout';
import { Eye, Ear, Hand, Brain, Shield, FileText, Users, Globe, CheckCircle, Zap } from 'lucide-react';

const accessibilityFeatures = [
  {
    title: "Visual Accessibility",
    description: "Comprehensive support for users with visual impairments",
    icon: Eye,
    features: [
      "High contrast mode support",
      "Screen reader compatibility",
      "Text scaling up to 200%",
      "Color-blind friendly palettes",
      "Keyboard navigation support"
    ]
  },
  {
    title: "Auditory Accessibility",
    description: "Solutions for users with hearing impairments",
    icon: Ear,
    features: [
      "Visual indicators for audio cues",
      "Closed captioning support",
      "Sign language video integration",
      "Text-based alternatives",
      "Vibration notifications"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Support for users with motor disabilities",
    icon: Hand,
    features: [
      "Voice control integration",
      "Switch navigation support",
      "Large click targets",
      "Customizable input methods",
      "Gesture recognition"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Features for users with cognitive disabilities",
    icon: Brain,
    features: [
      "Simplified navigation",
      "Clear language and instructions",
      "Consistent layout patterns",
      "Error prevention and recovery",
      "Progress indicators"
    ]
  }
];

const standards = [
  "WCAG 2.1 AA Compliance",
  "Section 508 Compliance",
  "ADA Compliance",
  "EN 301 549 Compliance",
  "ISO/IEC 40500 Compliance"
];

export default function AccessibilityPage() {
  return (
    <Layout
      title="Accessibility Solutions - Zion Tech Group"
      description="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users. WCAG compliance, assistive technology support, and universal design."
      keywords="accessibility, WCAG compliance, assistive technology, inclusive design, universal design, digital accessibility"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accessibility
                <span className="block text-purple-200">Solutions</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Make your digital products accessible to everyone. Our comprehensive accessibility 
                solutions ensure WCAG compliance and inclusive user experiences for all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get Accessibility Audit
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Compliance Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive accessibility solutions covering all aspects of digital inclusion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((featureItem, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-600">
                We ensure compliance with international accessibility standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Make Your Digital Products Accessible
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our accessibility experts help you create inclusive digital experiences that work for everyone.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Accessibility Audit
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
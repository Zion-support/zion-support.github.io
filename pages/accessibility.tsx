import React from "react";
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Users,
  Shield,
  Zap,
  FileText,
  Settings
} from 'lucide-react';

const accessibilityFeatures = [
  {
    title: "Visual Accessibility",
    description: "Features to support users with visual impairments",
    icon: Eye,
    features: [
      "High contrast color schemes",
      "Scalable text and interface elements",
      "Screen reader compatibility",
      "Alternative text for images",
      "Keyboard navigation support"
    ]
  },
  {
    title: "Auditory Accessibility",
    description: "Support for users with hearing impairments",
    icon: Ear,
    features: [
      "Video captions and transcripts",
      "Visual indicators for audio cues",
      "Text-based communication options",
      "Volume controls and audio descriptions",
      "Sign language support where applicable"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Features for users with motor impairments",
    icon: Hand,
    features: [
      "Keyboard-only navigation",
      "Voice control compatibility",
      "Large click targets",
      "Customizable interaction timing",
      "Switch control support"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Support for users with cognitive differences",
    icon: Brain,
    features: [
      "Clear, simple language",
      "Consistent navigation patterns",
      "Progress indicators",
      "Error prevention and recovery",
      "Customizable interface complexity"
    ]
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to ensuring our website is accessible to all users, 
              including those with disabilities. This page outlines our accessibility features and ongoing efforts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Standards Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    WCAG 2.1 AA compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Section 508 compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Regular accessibility audits
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ongoing Improvements
                </h3>
                <p className="text-gray-600 mb-4">
                  We continuously work to improve accessibility through user feedback and testing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    User testing with assistive technologies
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Regular accessibility training for our team
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Feedback integration and response
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-blue-50 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you encounter any accessibility barriers or have suggestions for improvement, 
              please contact us. We are committed to addressing accessibility issues promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="mailto:accessibility@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Settings className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
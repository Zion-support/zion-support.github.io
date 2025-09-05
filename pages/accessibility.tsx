import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Eye,
  Ear,
  Hand,
  Brain,
  Shield,
  FileText,
  Users,
  Globe,
  Zap,
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
      "Clear and simple language",
      "Consistent navigation patterns",
      "Error prevention and recovery",
      "Progress indicators",
      "Customizable interface complexity"
    ]
  }
];

const standardsCompliance = [
  {
    standard: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
    status: "Compliant",
    coverage: "95%",
    icon: Shield
  },
  {
    standard: "Section 508",
    description: "U.S. federal accessibility requirements",
    status: "Compliant",
    coverage: "100%",
    icon: FileText
  },
  {
    standard: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    coverage: "100%",
    icon: Users
  },
  {
    standard: "EN 301 549",
    description: "European accessibility standard for ICT products",
    status: "Compliant",
    coverage: "90%",
    icon: Globe
  }
];

const accessibilityTools = [
  {
    name: "Screen Reader Testing",
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver",
    frequency: "Monthly"
  },
  {
    name: "Keyboard Navigation",
    description: "Comprehensive keyboard navigation testing for all interactive elements",
    frequency: "Weekly"
  },
  {
    name: "Color Contrast Analysis",
    description: "Automated and manual color contrast testing to ensure readability",
    frequency: "With each design update"
  },
  {
    name: "User Testing",
    description: "Regular testing with users who have disabilities to identify barriers",
    frequency: "Quarterly"
  }
];

const accessibilityGuidelines = [
  {
    category: "Content",
    guidelines: [
      "Use clear and simple language",
      "Provide alternative text for images",
      "Use proper heading structure",
      "Ensure sufficient color contrast",
      "Provide captions for videos"
    ]
  },
  {
    category: "Navigation",
    guidelines: [
      "Logical tab order",
      "Skip links for main content",
      "Consistent navigation patterns",
      "Breadcrumb navigation",
      "Search functionality"
    ]
  },
  {
    category: "Forms",
    guidelines: [
      "Clear labels and instructions",
      "Error messages and validation",
      "Required field indicators",
      "Logical grouping of related fields",
      "Multiple input methods"
    ]
  },
  {
    category: "Interactive Elements",
    guidelines: [
      "Keyboard accessible",
      "Focus indicators",
      "Adequate target sizes",
      "No seizure-inducing content",
      "Customizable timing"
    ]
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences for everyone
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement comprehensive accessibility features to ensure our digital products are usable by everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Standards Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with international accessibility standards and regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standardsCompliance.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <standard.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.standard}</h3>
                  <p className="text-sm text-gray-600 mb-3">{standard.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium text-green-600">{standard.status}</span>
                    <span className="text-sm text-gray-500">({standard.coverage})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Testing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use a comprehensive testing approach to ensure accessibility compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                  <div className="text-xs text-indigo-600 font-medium">{tool.frequency}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Guidelines
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow established guidelines to ensure consistent accessibility across all our products.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityGuidelines.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></div>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
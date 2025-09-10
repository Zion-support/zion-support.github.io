import React from 'react';
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
    icon: Eye,
    title: 'Visual Accessibility',
    description: 'High contrast modes, scalable fonts, and screen reader compatibility',
    features: ['WCAG 2.1 AA compliance', 'Screen reader support', 'High contrast themes', 'Font size controls']
  },
  {
    icon: Ear,
    title: 'Audio Accessibility',
    description: 'Audio descriptions, captions, and alternative audio formats',
    features: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Volume controls']
  },
  {
    title: "Motor Accessibility",
    description: "Features to support users with motor impairments",
    icon: Hand,
    features: [
      "Full keyboard navigation support",
      "Customizable click targets",
      "Drag and drop alternatives",
      "Timeout extensions and controls"
    ]
  },
  {
    icon: Brain,
    title: "Cognitive Accessibility",
    description: "Clear navigation, consistent layouts, and simplified interfaces",
    features: [
      "Consistent navigation patterns",
      "Clear and simple language",
      "Error prevention and recovery",
      "Customizable interface complexity"
    ]
  }
];

const complianceStandards = [
  {
    name: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    status: "Compliant",
    icon: Award
  },
  {
    name: "Section 508",
    description: "US Federal accessibility requirements",
    status: "Compliant", 
    icon: FileText
  },
  {
    name: "ADA",
    description: "Americans with Disabilities Act compliance",
    status: "Compliant",
    icon: Users
  },
  {
    name: "EN 301 549",
    description: "European accessibility standard",
    status: "Compliant",
    icon: Globe
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Committed to creating accessible digital experiences for everyone"
      keywords="accessibility, WCAG, inclusive design, assistive technology"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility First
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our solutions work for users of all abilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Accessibility Features
                </h2>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Accessibility Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement comprehensive accessibility features across all our digital solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-purple-600 mb-4">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make Your Digital Experience Accessible?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you create inclusive digital solutions that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Started
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
import React from "react";
import Layout from '../components/Layout';
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
      "Screen reader compatibility",
      "High contrast mode",
      "Text scaling options",
      "Alternative text for images",
      "Keyboard navigation",
      "Focus indicators"
    ]
  },
  {
    title: "Auditory Accessibility",
    description: "Features to support users with hearing impairments",
    icon: Ear,
    features: [
      "Closed captions",
      "Visual alerts",
      "Text alternatives for audio",
      "Sign language support",
      "Volume controls",
      "Audio descriptions"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Features to support users with motor impairments",
    icon: Hand,
    features: [
      "Keyboard-only navigation",
      "Voice control",
      "Large click targets",
      "Customizable timing",
      "Switch navigation",
      "Gesture alternatives"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Features to support users with cognitive impairments",
    icon: Brain,
    features: [
      "Clear navigation",
      "Consistent layout",
      "Error prevention",
      "Progress indicators",
      "Help and support",
      "Customizable interface"
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

export default function AccessibilityPage() {
  return (
    <Layout
      title="Accessibility - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building Inclusive Digital
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building inclusive digital experiences that work for everyone
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
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standardsCompliance.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {standard.standard}
                          </h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {standard.status}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {standard.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital products are inclusive and accessible to all users
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Commitment to Accessibility
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    We are committed to making our digital products accessible to all users, regardless of their abilities or the technologies they use to access the web.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our accessibility approach follows the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and includes comprehensive testing across multiple devices and assistive technologies.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We continuously monitor and improve our accessibility features to ensure the best possible experience for all users.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make Your Digital Products Accessible?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Contact our accessibility experts to learn how we can help make your digital products inclusive and accessible to all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:accessibility@ziontechgroup.com" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Accessibility Team
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
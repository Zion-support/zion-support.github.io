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
    icon: Eye,
    title: "Visual Accessibility",
    description: "High contrast themes, scalable fonts, and screen reader compatibility",
    features: [
      "WCAG 2.1 AA compliant color contrast",
      "Scalable text up to 200% without loss of functionality",
      "Alt text for all images and media",
      "Focus indicators for keyboard navigation",
      "Screen reader compatibility",
      "High contrast mode",
      "Text scaling options",
      "Alternative text for images",
      "Keyboard navigation"
    ]
  },
  {
    icon: Ear,
    title: "Audio Accessibility", 
    description: "Captions, transcripts, and audio descriptions for multimedia content",
    features: [
      "Closed captions for all video content",
      "Audio descriptions for visual content",
      "Transcript files for audio content",
      "Visual indicators for audio alerts"
    ]
  },
  {
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
    icon: Hand,
    title: "Motor Accessibility",
    description: "Keyboard navigation and customizable interaction methods",
    features: [
      "Full keyboard navigation support",
      "Customizable click targets",
      "Drag and drop alternatives",
      "Timeout extensions and controls"
    ]
  },
  {
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
    icon: Brain,
    title: "Cognitive Accessibility",
    description: "Clear navigation, consistent layouts, and simplified interfaces",
    features: [
      "Consistent navigation patterns",
      "Clear and simple language",
      "Error prevention and recovery",
      "Customizable interface complexity"
=======
      "Clear navigation",
      "Consistent layout",
      "Error prevention",
      "Progress indicators",
      "Help and support",
      "Customizable interface"
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
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
    <Layout
      title="Accessibility - Zion Tech Group"
      description="Learn about our commitment to accessibility and the features we've implemented to ensure our website is usable by everyone."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building technology that works for everyone, regardless of ability
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Compliance Standards
                </h2>
                <p className="text-lg text-gray-600">
                  We meet and exceed international accessibility standards
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceStandards.map((standard, index) => {
                  const IconComponent = standard.icon;
                  return (
                    <motion.div
                      key={standard.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
                    >
                      <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {standard.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {standard.description}
                      </p>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {standard.status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Assistive Technology Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Assistive Technology Support
                </h2>
                <p className="text-lg text-gray-600">
                  Our website works seamlessly with popular assistive technologies
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accessibilityTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tool.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Help Us Improve
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  We're always working to improve accessibility. Your feedback helps us identify areas for enhancement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Accessibility Feedback
                  </a>
                  <a
                    href="/contact"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
                  >
                    General Contact
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
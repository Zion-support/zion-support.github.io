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
<<<<<<< HEAD
      "WCAG 2.1 AA compliant color contrast",
      "Scalable text up to 200% without loss of functionality",
      "Alt text for all images and media",
      "Focus indicators for keyboard navigation"
    ]
  },
  {
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
    icon: Ear,
    title: "Audio Accessibility", 
    description: "Captions, transcripts, and audio descriptions for multimedia content",
    features: [
<<<<<<< HEAD
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
<<<<<<< HEAD
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
<<<<<<< HEAD
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

<<<<<<< HEAD
const accessibilityTools = [
  {
    name: "Screen Reader Support",
    description: "Compatible with JAWS, NVDA, and VoiceOver",
    icon: Eye
  },
  {
    name: "Keyboard Navigation",
    description: "Full site navigation using only keyboard",
    icon: Hand
  },
  {
    name: "Voice Control",
    description: "Works with Dragon NaturallySpeaking and similar tools",
    icon: Ear
  },
  {
    name: "High Contrast Mode",
    description: "Enhanced visibility for low vision users",
    icon: Settings
  }
];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
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
<<<<<<< HEAD
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Accessibility
                  </span>
                </h1>
              </div>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building Inclusive Digital
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building technology that works for everyone, regardless of ability
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
<<<<<<< HEAD
            <div className="max-w-4xl mx-auto text-center">
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
                  Our Accessibility Commitment
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  At Zion Tech Group, we believe that technology should be accessible to everyone. 
                  We are committed to ensuring that our website and digital services are usable by 
                  people of all abilities, and we continuously work to improve the accessibility 
                  of our platforms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Inclusive Design
                    </h3>
                    <p className="text-gray-600">
                      We design with accessibility in mind from the very beginning of every project.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      User-Centered
                    </h3>
                    <p className="text-gray-600">
                      We involve users with disabilities in our testing and feedback processes.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Standards Compliant
                    </h3>
                    <p className="text-gray-600">
                      We follow established accessibility guidelines and standards.
                    </p>
                  </div>
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
                </div>
              </motion.div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Accessibility Features */}
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
                  Accessibility Features
                </h2>
                <p className="text-lg text-gray-600">
                  Comprehensive features designed to ensure usability for all users
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {accessibilityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <IconComponent className="w-12 h-12 text-purple-600 mr-4" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
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
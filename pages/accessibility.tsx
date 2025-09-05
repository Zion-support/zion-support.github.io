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
  Award,
  Target,
  Heart,
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
      "Focus indicators for keyboard navigation"
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

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Learn about our commitment to accessibility and the features we've implemented to ensure our website is usable by everyone."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Accessibility
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building technology that works for everyone, regardless of ability
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
    </MainLayout>
  );
}
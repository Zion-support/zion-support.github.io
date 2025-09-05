import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Heart, 
  Award, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Users,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

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
    icon: Hand,
    title: "Motor Accessibility",
    description: "Keyboard navigation and customizable interaction methods",
    features: [
      "Full keyboard navigation support",
      "Customizable click targets",
      "Drag and drop alternatives",
      "Timeout extensions and controls",
      "Keyboard-only navigation",
      "Voice control",
      "Large click targets",
      "Customizable timing",
      "Switch navigation",
      "Gesture alternatives"
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
      "Customizable interface complexity",
      "Clear navigation",
      "Consistent layout",
      "Error prevention",
      "Progress indicators",
      "Help and support",
      "Customizable interface"
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
    icon: Shield
  }
];

const accessibilityTools = [
  {
    name: "Screen Reader Support",
    description: "Compatible with NVDA, JAWS, and VoiceOver",
    icon: Eye
  },
  {
    name: "Keyboard Navigation",
    description: "Full keyboard accessibility for all interactive elements",
    icon: Hand
  },
  {
    name: "High Contrast Mode",
    description: "Enhanced visibility for users with visual impairments",
    icon: Eye
  },
  {
    name: "Text Scaling",
    description: "Scalable text up to 200% without horizontal scrolling",
    icon: Brain
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility - Zion Tech Group"
      description="Zion Tech Group is committed to digital accessibility. Learn about our accessibility features and compliance standards."
      keywords="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Digital Accessibility
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment to digital accessibility 
                ensures that all users can access and benefit from our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We implement comprehensive accessibility features across all our digital platforms 
                to ensure an inclusive experience for all users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We adhere to international accessibility standards and guidelines to ensure 
                our digital platforms meet the highest accessibility requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {standard.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {standard.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {standard.status}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accessibility Tools */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Accessibility Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We provide various tools and features to enhance accessibility and ensure 
                a seamless experience for all users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Accessibility?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our accessibility experts are here to help you create inclusive digital experiences. 
                Contact us for accessibility consulting and implementation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Accessibility Help
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Email Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
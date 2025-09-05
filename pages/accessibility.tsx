import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Ear,
  Hand,
  Brain,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Users,
  Award,
  Target,
  Heart,
  FileText,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';

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
    title: "Hearing Accessibility",
    description: "Features to support users with hearing impairments",
    icon: Ear,
    features: [
      "Closed captioning for videos",
      "Visual indicators for audio cues",
      "Text alternatives for audio content",
      "Sign language support",
      "Haptic feedback options"
    ]
  },
  {
    title: "Motor Accessibility",
    description: "Features to support users with motor impairments",
    icon: Hand,
    features: [
      "Voice control integration",
      "Large click targets",
      "Customizable input methods",
      "Switch navigation support",
      "Gesture recognition"
    ]
  },
  {
    title: "Cognitive Accessibility",
    description: "Features to support users with cognitive differences",
    icon: Brain,
    features: [
      "Clear navigation structure",
      "Consistent design patterns",
      "Progress indicators",
      "Error prevention and recovery",
      "Simplified language options"
    ]
  }
];

const complianceStandards = [
  {
    name: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    icon: Shield,
    level: "Level AA"
  },
  {
    name: "Section 508",
    description: "US federal accessibility requirements",
    icon: FileText,
    level: "Federal Standard"
  },
  {
    name: "ADA Compliance",
    description: "Americans with Disabilities Act compliance",
    icon: CheckCircle,
    level: "Legal Requirement"
  },
  {
    name: "EN 301 549",
    description: "European accessibility standard",
    icon: Globe,
    level: "EU Standard"
  }
];

const testingTools = [
  {
    name: "Automated Testing",
    description: "AI-powered accessibility scanning and validation",
    icon: Zap,
    features: ["Real-time scanning", "Issue detection", "Compliance reporting", "Fix suggestions"]
  },
  {
    name: "Manual Testing",
    description: "Expert human testing and validation",
    icon: Users,
    features: ["User experience testing", "Assistive technology testing", "Usability analysis", "Expert review"]
  },
  {
    name: "User Testing",
    description: "Testing with actual users with disabilities",
    icon: Heart,
    features: ["Real user feedback", "Accessibility validation", "Usability insights", "Inclusive design"]
  }
];

export default function AccessibilityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Making technology accessible to everyone through inclusive design and compliance solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive accessibility solutions designed to make your digital products inclusive for all users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
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

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We ensure your products meet international accessibility standards and legal requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  className="bg-gray-50 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <standard.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-gray-600 mb-4">{standard.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {standard.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testing & Validation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive testing approaches to ensure your accessibility implementation is effective
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testingTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <tool.icon className="h-12 w-12 text-purple-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Make Your Technology Accessible
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to create inclusive digital experiences that everyone can use and enjoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Accessibility Audit
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
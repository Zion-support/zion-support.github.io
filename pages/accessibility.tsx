
import React from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import Layout from '../components/Layout'

const accessibilityFeatures = [
  {
    title: "Visual Accessibility",
    description: "Features to support users with visual impairments",
    icon: Eye,
    features: [
      "Screen reader compatibility",
      "Alternative text for images",
      "Keyboard navigation support",
      "High contrast color schemes",
      "Scalable text and interface elements"
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
<<<<<<< HEAD
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
                Making technology accessible to everyone
=======
      "Clear navigation structure",
      "Consistent design patterns",
      "Progress indicators",
      "Error prevention and recovery",
      "Simplified language options"
    ]
  }]
const complianceStandards = [{
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
  }]
const testingTools = [{
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
  }]
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
>>>>>>> main
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
=======
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement a wide range of accessibility features to ensure your digital products are usable by everyone
>>>>>>> main
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
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
        {/* Compliance Standards Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure your products meet international accessibility standards and legal requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <standard.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {standard.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {standard.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testing Tools Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testing & Validation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive testing approaches to ensure accessibility compliance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testingTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-6">
                    <tool.icon className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tool.description}
                  </p>
                  <ul className="space-y-3 text-left">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
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
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
  )
}
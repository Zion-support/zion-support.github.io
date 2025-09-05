import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  Globe,
  Users,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop
} from 'lucide-react';
import Layout from '../components/Layout';

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
      "Visual indicators for audio alerts",
      "Visual alerts",
      "Text alternatives for audio",
      "Sign language support",
      "Volume controls",
      "Audio descriptions"
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
    description: "Clear navigation, consistent design, and simplified interfaces",
    features: [
      "Clear and consistent navigation",
      "Simplified language and instructions",
      "Progress indicators and status messages",
      "Error prevention and recovery",
      "Memory aids and reminders",
      "Distraction reduction options",
      "Clear visual hierarchy",
      "Consistent interaction patterns"
    ]
  }
];

const complianceStandards = [
  {
    name: "WCAG 2.1 AA",
    description: "Web Content Accessibility Guidelines Level AA compliance",
    level: "Level AA",
    coverage: "95%"
  },
  {
    name: "Section 508",
    description: "US federal accessibility standards compliance",
    level: "Federal",
    coverage: "100%"
  },
  {
    name: "ADA Compliance",
    description: "Americans with Disabilities Act compliance",
    level: "Legal",
    coverage: "100%"
  },
  {
    name: "EN 301 549",
    description: "European accessibility standard compliance",
    level: "European",
    coverage: "90%"
  }
];

const testingTools = [
  {
    name: "Automated Testing",
    tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"],
    description: "Automated accessibility testing tools"
  },
  {
    name: "Manual Testing",
    tools: ["Screen Readers", "Keyboard Navigation", "Voice Control"],
    description: "Manual accessibility testing methods"
  },
  {
    name: "User Testing",
    tools: ["User Interviews", "Usability Testing", "Feedback Collection"],
    description: "Real user accessibility testing"
  }
];

const devices = [
  { name: "Desktop", icon: Desktop, description: "Full accessibility support" },
  { name: "Laptop", icon: Laptop, description: "Responsive accessibility features" },
  { name: "Tablet", icon: Tablet, description: "Touch accessibility options" },
  { name: "Mobile", icon: Smartphone, description: "Mobile accessibility features" }
];

export default function AccessibilityPage() {
  return (
    <Layout 
      title="Accessibility - Zion Tech Group"
      description="Comprehensive accessibility solutions ensuring your digital products are usable by everyone, including people with disabilities."
    >
      <Head>
        <title>Accessibility Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring your digital products are usable by everyone, including people with disabilities." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, screen reader, keyboard navigation, inclusive design" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Inclusive Digital{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Making technology accessible to everyone. We ensure your digital products meet the highest 
                accessibility standards and provide an inclusive experience for all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Accessibility Audit
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products 
                are usable by people with diverse abilities and needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We ensure your digital products meet international accessibility standards and legal requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{standard.description}</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">{standard.level}</span> • {standard.coverage} Coverage
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Validation */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Testing & Validation
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Comprehensive testing ensures your accessibility implementation works across all devices and assistive technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testingTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.tools.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Support */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cross-Device Accessibility
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Our accessibility solutions work seamlessly across all devices and platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {devices.map((device, index) => {
                const IconComponent = device.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{device.name}</h3>
                    <p className="text-gray-600 text-sm">{device.description}</p>
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
                Ready to Make Your Digital Products Accessible?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our accessibility experts help you create inclusive digital experiences that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Accessibility Audit
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
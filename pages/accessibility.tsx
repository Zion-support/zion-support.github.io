import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Keyboard, Volume2, MousePointer } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    description: 'High contrast colors, scalable text, and screen reader compatibility.',
    features: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Alternative text for images']
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    description: 'Full keyboard navigation support for all interactive elements.',
    features: ['Tab navigation', 'Skip links', 'Keyboard shortcuts', 'Focus indicators']
  },
  {
    icon: Volume2,
    title: 'Audio Support',
    description: 'Audio descriptions and transcripts for multimedia content.',
    features: ['Audio descriptions', 'Video transcripts', 'Closed captions', 'Audio controls']
  },
  {
    icon: MousePointer,
    title: 'Motor Accessibility',
    description: 'Large click targets and alternative input methods.',
    features: ['Large click areas', 'Voice navigation', 'Alternative inputs', 'Customizable controls']
  }
];

const complianceStandards = [
  {
    standard: 'WCAG 2.1 AA',
    description: 'Web Content Accessibility Guidelines Level AA compliance',
    status: 'Compliant'
  },
  {
    standard: 'Section 508',
    description: 'US Federal accessibility requirements',
    status: 'Compliant'
  },
  {
    standard: 'ADA',
    description: 'Americans with Disabilities Act compliance',
    status: 'Compliant'
  },
  {
    standard: 'EN 301 549',
    description: 'European accessibility standard',
    status: 'Compliant'
  }
];

export default function AccessibilityPage() {
  return (
    <MainLayout
      title="Accessibility Statement - Zion Tech Group"
      description="Our commitment to digital accessibility and inclusive design for all users."
      keywords="accessibility, WCAG, ADA compliance, inclusive design, disability access"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We are committed to making our website accessible to all users, including those with disabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Commitment to Accessibility
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
                    We are continually improving the user experience for everyone and applying the relevant 
                    accessibility standards.
                  </p>
                  <p>
                    We believe that everyone should have equal access to information and functionality on our website. 
                    This commitment reflects our values and ensures that all users can navigate, understand, 
                    and interact with our content effectively.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our website includes various features to ensure accessibility for all users
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Compliance Standards
                </h2>
                <p className="text-lg text-gray-600">
                  We adhere to internationally recognized accessibility standards
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{standard.standard}</h3>
                      <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                        {standard.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Accessibility Feedback
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                If you encounter any accessibility issues or have suggestions for improvement, 
                please contact us.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Email Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
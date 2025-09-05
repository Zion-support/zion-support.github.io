import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Accessibility, Eye, Ear, MousePointer, Keyboard, Shield, CheckCircle, Users, Globe, Heart, Mail, Phone } from 'lucide-react';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    description: 'We ensure our website is accessible to users with visual impairments.',
    features: [
      'High contrast color schemes',
      'Scalable text and images',
      'Screen reader compatibility',
      'Alternative text for images',
      'Clear visual hierarchy'
    ]
  },
  {
    icon: Ear,
    title: 'Audio Accessibility',
    description: 'We provide audio alternatives and clear audio content.',
    features: [
      'Video captions and transcripts',
      'Audio descriptions for visual content',
      'Clear audio quality',
      'Volume controls',
      'Audio alternatives for alerts'
    ]
  },
  {
    icon: MousePointer,
    title: 'Motor Accessibility',
    description: 'Our interface is designed for users with motor impairments.',
    features: [
      'Large clickable areas',
      'Keyboard navigation support',
      'Voice control compatibility',
      'Adjustable timing for interactions',
      'Alternative input methods'
    ]
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    description: 'Full keyboard accessibility for all interactive elements.',
    features: [
      'Tab navigation support',
      'Skip links for main content',
      'Keyboard shortcuts',
      'Focus indicators',
      'Logical tab order'
    ]
  }
];

const standards = [
  {
    icon: Shield,
    title: 'WCAG 2.1 AA Compliance',
    description: 'We follow Web Content Accessibility Guidelines 2.1 Level AA standards.'
  },
  {
    icon: CheckCircle,
    title: 'Section 508 Compliance',
    description: 'Our website meets Section 508 requirements for federal accessibility.'
  },
  {
    icon: Globe,
    title: 'International Standards',
    description: 'We adhere to international accessibility standards and best practices.'
  }
];

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility Statement - Zion Tech Group | Inclusive Technology Solutions</title>
        <meta name="description" content="Zion Tech Group is committed to making our website accessible to all users. Learn about our accessibility features and compliance standards." />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, assistive technology, web accessibility" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Accessibility className="w-16 h-16 mx-auto mb-6" />
                <h1 className="text-5xl font-bold mb-6">
                  Accessibility Statement
                </h1>
                <p className="text-xl text-blue-100 mb-4">
                  Zion Tech Group is committed to ensuring digital accessibility for all users.
                </p>
                <p className="text-sm text-blue-200">
                  Last updated: January 15, 2024
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Commitment to Accessibility
                </h2>
                <p className="text-gray-600 mb-6">
                  At Zion Tech Group, we believe that technology should be accessible to everyone. 
                  We are committed to providing a website that is accessible to all users, including 
                  those with disabilities. We strive to meet or exceed the Web Content Accessibility 
                  Guidelines (WCAG) 2.1 Level AA standards.
                </p>
                <p className="text-gray-600 mb-6">
                  Our accessibility efforts are ongoing, and we continuously work to improve the 
                  user experience for all visitors to our website.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Accessibility Features
                </h2>
                <p className="text-xl text-gray-600">
                  We implement various accessibility features to ensure an inclusive experience
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {accessibilityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Compliance Standards
                </h2>
                <p className="text-xl text-gray-600">
                  We adhere to recognized accessibility standards and guidelines
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {standards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="bg-white rounded-lg p-6 text-center shadow-lg"
                  >
                    <standard.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                    <p className="text-gray-600">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-blue-50 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Contact Us About Accessibility
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                  If you encounter any accessibility barriers on our website or have suggestions 
                  for improvement, please contact us. We value your feedback and are committed 
                  to making our website more accessible.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">accessibility@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Heart className="w-12 h-12 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Building Inclusive Technology
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Together, we can create a more accessible digital world
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Our Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
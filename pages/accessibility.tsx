import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Heart 
} from 'lucide-react';

const accessibilityFeatures = [
  {
    title: 'Screen Reader Support',
    description: 'Full compatibility with screen readers and assistive technologies.',
    icon: Eye,
    features: ['ARIA Labels', 'Semantic HTML', 'Alt Text', 'Focus Management']
  },
  {
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all interactive elements.',
    icon: Keyboard,
    features: ['Tab Navigation', 'Skip Links', 'Focus Indicators', 'Keyboard Shortcuts']
  },
  {
    title: 'Visual Accessibility',
    description: 'High contrast modes and customizable visual elements.',
    icon: Eye,
    features: ['High Contrast', 'Font Scaling', 'Color Blind Support', 'Custom Themes']
  },
  {
    title: 'Motor Accessibility',
    description: 'Support for users with motor impairments and alternative input methods.',
    icon: MousePointer,
    features: ['Large Click Targets', 'Voice Control', 'Switch Navigation', 'Gesture Support']
  }
];

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility | Zion Tech Group</title>
        <meta name="description" content="Committed to digital accessibility and inclusive design. We ensure our solutions are accessible to all users." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG, screen reader, keyboard navigation" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Accessibility
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Committed to creating inclusive digital experiences that are accessible to all users, 
                regardless of their abilities or the technologies they use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We implement comprehensive accessibility features to ensure our digital products 
                are usable by everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Contact our team to discuss your accessibility needs and get a custom solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 text-purple-600 mx-auto mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 text-purple-600 mx-auto mb-4">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 text-purple-600 mx-auto mb-4">
                  <Heart className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-500">Middletown, DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Accessible Solutions Together
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Partner with us to create digital experiences that are inclusive, 
                accessible, and beneficial for all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
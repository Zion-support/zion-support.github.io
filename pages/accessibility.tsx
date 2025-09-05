import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Eye, Volume2, MousePointer, Globe, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';

const accessibilityFeatures = [
  {
    title: 'WCAG 2.1 AA Compliance',
    description: 'Our website meets the Web Content Accessibility Guidelines 2.1 Level AA standards.',
    icon: CheckCircle,
    features: ['Perceivable', 'Operable', 'Understandable', 'Robust']
  },
  {
    title: 'Screen Reader Support',
    description: 'Full compatibility with screen readers and assistive technologies.',
    icon: Volume2,
    features: ['ARIA Labels', 'Semantic HTML', 'Alt Text', 'Focus Management']
  },
  {
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all interactive elements.',
    icon: MousePointer,
    features: ['Tab Navigation', 'Skip Links', 'Focus Indicators', 'Keyboard Shortcuts']
  },
  {
    title: 'Visual Accessibility',
    description: 'High contrast ratios and customizable text sizes for better readability.',
    icon: Eye,
    features: ['High Contrast', 'Text Scaling', 'Color Independence', 'Clear Typography']
  },
  {
    title: 'Mobile Accessibility',
    description: 'Optimized for mobile devices with touch-friendly interfaces.',
    icon: Globe,
    features: ['Touch Targets', 'Responsive Design', 'Gesture Support', 'Mobile Screen Readers']
  },
  {
    title: 'User Testing',
    description: 'Regular testing with users who have disabilities to ensure accessibility.',
    icon: Users,
    features: ['User Feedback', 'Usability Testing', 'Continuous Improvement', 'Real User Validation']
  }
];

const complianceStandards = [
  { name: 'WCAG 2.1 AA', status: 'Compliant', icon: CheckCircle },
  { name: 'Section 508', status: 'Compliant', icon: CheckCircle },
  { name: 'ADA Standards', status: 'Compliant', icon: CheckCircle },
  { name: 'EN 301 549', status: 'Compliant', icon: CheckCircle }
];

export default function AccessibilityPage() {
  return (
    <Layout
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
                  Web Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Ensuring digital accessibility for all users
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to making our website accessible to all users, including those with disabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our website meets or exceeds the following accessibility standards and guidelines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-lg border-2 border-green-200 bg-green-50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      {standard.status}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us About Accessibility
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
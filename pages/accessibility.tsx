import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Volume2, 
  MousePointer, 
  Keyboard, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Users, 
  Globe,
  Zap,
  Award,
  Star
} from 'lucide-react';

const accessibilityFeatures = [
  {
    title: 'WCAG 2.1 AA Compliance',
    description: 'Full compliance with Web Content Accessibility Guidelines 2.1 Level AA standards.',
    icon: Shield,
    features: ['Perceivable Content', 'Operable Interface', 'Understandable Information', 'Robust Technology']
  },
  {
    title: 'Screen Reader Support',
    description: 'Optimized for screen readers and assistive technologies.',
    icon: Volume2,
    features: ['Semantic HTML', 'ARIA Labels', 'Alt Text', 'Focus Management']
  },
  {
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility for all interactive elements.',
    icon: Keyboard,
    features: ['Tab Navigation', 'Skip Links', 'Focus Indicators', 'Keyboard Shortcuts']
  },
  {
    title: 'Visual Accessibility',
    description: 'High contrast ratios and visual accessibility features.',
    icon: Eye,
    features: ['Color Contrast', 'Text Scaling', 'Focus Indicators', 'Visual Hierarchy']
  }
];

const complianceStandards = [
  {
    name: 'WCAG 2.1 AA',
    description: 'Web Content Accessibility Guidelines',
    status: 'Compliant',
    icon: Shield
  },
  {
    name: 'Section 508',
    description: 'US Federal Accessibility Standards',
    status: 'Compliant',
    icon: Award
  },
  {
    name: 'ADA Compliance',
    description: 'Americans with Disabilities Act',
    status: 'Compliant',
    icon: Users
  },
  {
    name: 'EN 301 549',
    description: 'European Accessibility Standard',
    status: 'Compliant',
    icon: Globe
  }
];

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>Accessibility - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Learn about Zion Tech Group's commitment to web accessibility and our compliance with WCAG 2.1, Section 508, and ADA standards."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                Making the web accessible to everyone, everywhere
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
                Our Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We ensure our digital solutions meet the highest accessibility standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
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
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with international accessibility standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
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
                      {standard.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        standard.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to creating inclusive digital experiences for all users
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Design</h3>
                <p className="text-gray-600">
                  We design with accessibility in mind from the start, ensuring all users can access our solutions.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Testing</h3>
                <p className="text-gray-600">
                  We continuously test our solutions with real users and assistive technologies.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team includes accessibility experts and users with disabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make Your Digital Solutions Accessible?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you create inclusive digital experiences that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Accessibility Audit
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
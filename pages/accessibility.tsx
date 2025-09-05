import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Eye, MousePointer, Volume2, Keyboard, Shield } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const accessibilityFeatures = [
  {
    icon: Eye,
    title: 'Visual Accessibility',
    description: 'High contrast modes, scalable fonts, and screen reader compatibility.',
    features: ['WCAG 2.1 AA compliance', 'High contrast mode', 'Font size scaling', 'Screen reader support']
  },
  {
    icon: MousePointer,
    title: 'Motor Accessibility',
    description: 'Keyboard navigation and alternative input methods.',
    features: ['Full keyboard navigation', 'Focus indicators', 'Large click targets', 'Voice control support']
  },
  {
    icon: Volume2,
    title: 'Audio Accessibility',
    description: 'Audio descriptions and visual alternatives for audio content.',
    features: ['Audio descriptions', 'Visual captions', 'Sign language support', 'Audio transcripts']
  },
  {
    icon: Keyboard,
    title: 'Cognitive Accessibility',
    description: 'Clear navigation and simplified interfaces for better understanding.',
    features: ['Clear navigation', 'Consistent layouts', 'Error prevention', 'Help documentation']
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Secure and private accessibility features that protect user data.',
    features: ['Data encryption', 'Privacy controls', 'Secure authentication', 'GDPR compliance']
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
                  Web Accessibility
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Ensuring inclusive digital experiences for all users
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
                We are committed to making our digital platforms accessible to everyone, regardless of their abilities or the technologies they use.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
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
                      <feature.icon className="w-8 h-8 text-white" />
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
              ))}
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
                Accessibility Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow international accessibility standards to ensure our digital platforms are inclusive and usable by everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WCAG 2.1 AA</h3>
                <p className="text-gray-600">Web Content Accessibility Guidelines compliance</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Section 508</h3>
                <p className="text-gray-600">US federal accessibility standards</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ADA Compliance</h3>
                <p className="text-gray-600">Americans with Disabilities Act standards</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
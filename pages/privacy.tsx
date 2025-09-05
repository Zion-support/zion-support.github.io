import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const privacySections = [
  {
    title: 'Information We Collect',
    icon: Eye,
    content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.'
  },
  {
    title: 'How We Use Your Information',
    icon: FileText,
    content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.'
  },
  {
    title: 'Information Sharing',
    icon: Users,
    content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.'
  },
  {
    title: 'Data Security',
    icon: Lock,
    content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
  }
];

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn about how we collect, use, and protect your personal information"
      keywords="privacy policy, data protection, personal information, GDPR compliance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Learn about how we collect, use, and protect your personal information
              </p>
              <p className="text-sm text-gray-300">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {privacySections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-blue-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
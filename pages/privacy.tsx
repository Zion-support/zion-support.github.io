import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy: NextPage = () => {
  const privacySections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide directly (name, email, phone number)',
        'Usage data and analytics from our website and services',
        'Technical information such as IP address, browser type, and device information',
        'Communication records when you contact us for support or inquiries'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our technology services and solutions',
        'To communicate with you about our services, updates, and support',
        'To process transactions and manage your account',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to maintain data protection'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access your personal information we hold',
        'Right to correct or update inaccurate information',
        'Right to request deletion of your personal data',
        'Right to opt-out of marketing communications'
      ]
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in compliance with data protection regulations."
      keywords="privacy policy, data protection, GDPR compliance, personal information, data security"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By using our website and services, you consent to the data practices described in this policy. 
                If you do not agree with the terms of this Privacy Policy, please do not use our services.
              </p>
            </motion.div>

            {/* Privacy Sections */}
            <div className="space-y-12">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Cookies Section */}
            <motion.div
              className="mt-12 bg-blue-50 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Cookies and Tracking Technologies</h3>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small data files stored on your device that help us:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Remember your preferences and settings</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Provide personalized content and advertisements</li>
                <li>• Improve website performance and functionality</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies 
                may affect the functionality of our website.
              </p>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Information Sharing and Disclosure</h3>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations or court orders</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• With trusted service providers who assist in our operations</li>
                <li>• In connection with a business transfer or acquisition</li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-12 bg-gray-900 text-white rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Technology Drive, Innovation City, IC 12345</p>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Policy Updates</h4>
                  <p className="text-yellow-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Privacy;
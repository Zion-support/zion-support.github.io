import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
    benefits: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    icon: Shield,
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to protect your systems.',
    benefits: ['MFA enforcement', 'Role-based permissions', 'Single sign-on (SSO)', 'Session management']
  },
  {
    icon: Eye,
    title: 'Monitoring & Detection',
    description: '24/7 security monitoring with AI-powered threat detection and response.',
    benefits: ['Real-time monitoring', 'AI threat detection', 'Automated response', 'Security analytics']
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'Comprehensive data protection with backup, recovery, and compliance features.',
    benefits: ['Automated backups', 'Data recovery', 'Compliance reporting', 'Data classification']
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Regular security training and awareness programs for your team.',
    benefits: ['Security awareness training', 'Phishing simulations', 'Best practices', 'Certification programs']
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid incident response and recovery procedures to minimize impact.',
    benefits: ['24/7 incident response', 'Rapid containment', 'Forensic analysis', 'Recovery procedures']
  }
];

const complianceFrameworks = [
  { name: 'SOC 2 Type II', status: 'Compliant', description: 'Security, availability, and confidentiality controls' },
  { name: 'ISO 27001', status: 'Certified', description: 'Information security management system' },
  { name: 'GDPR', status: 'Compliant', description: 'General Data Protection Regulation compliance' },
  { name: 'HIPAA', status: 'Compliant', description: 'Health Insurance Portability and Accountability Act' },
  { name: 'PCI DSS', status: 'Compliant', description: 'Payment Card Industry Data Security Standard' }
];

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive security measures and compliance frameworks that protect your data and systems." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Security</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your security is our priority. We implement comprehensive security measures 
                to protect your data and systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive security approach protects your data and systems at every level.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certifications</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain compliance with industry standards and regulations to ensure your data is protected.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{framework.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      framework.status === 'Compliant' || framework.status === 'Certified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{framework.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Best Practices</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow industry best practices to ensure the highest level of security for your data.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Regular security audits and assessments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Encrypted data storage and transmission</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Secure backup and recovery procedures</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Data classification and handling policies</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Access Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Regular access reviews and updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Single sign-on (SSO) integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us help you implement comprehensive security measures to protect your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Compliance
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
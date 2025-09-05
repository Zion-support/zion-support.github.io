import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Database, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 Type II compliance for security, availability, and confidentiality',
    icon: Shield,
    status: 'Certified',
    lastAudit: '2024-01-15',
    nextAudit: '2025-01-15'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System certification',
    icon: Lock,
    status: 'Certified',
    lastAudit: '2024-02-20',
    nextAudit: '2025-02-20'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    icon: Eye,
    status: 'Compliant',
    lastAudit: '2024-03-10',
    nextAudit: '2025-03-10'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance',
    icon: Database,
    status: 'Compliant',
    lastAudit: '2024-01-30',
    nextAudit: '2025-01-30'
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard compliance',
    icon: Shield,
    status: 'Certified',
    lastAudit: '2024-02-15',
    nextAudit: '2025-02-15'
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance',
    icon: FileText,
    status: 'Compliant',
    lastAudit: '2024-01-20',
    nextAudit: '2025-01-20'
  }
];

const securityMeasures = [
  {
    title: 'Data Encryption',
    description: 'All data encrypted in transit and at rest using industry-standard encryption',
    icon: Lock
  },
  {
    title: 'Access Controls',
    description: 'Multi-factor authentication and role-based access controls',
    icon: Users
  },
  {
    title: 'Regular Audits',
    description: 'Quarterly security audits and penetration testing',
    icon: CheckCircle
  },
  {
    title: 'Incident Response',
    description: '24/7 security monitoring and incident response procedures',
    icon: AlertCircle
  }
];

export default function CompliancePage() {
  return (
    <Layout
      title="Compliance & Security - Zion Tech Group"
      description="Learn about our comprehensive compliance framework and security measures to protect your data."
      keywords="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, data protection"
    >
      <div className="min-h-screen bg-gray-50">
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
                Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Security</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your data security is our top priority. Learn about our comprehensive compliance framework and security measures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of compliance and security across all our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <framework.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{framework.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        framework.status === 'Certified' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {framework.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{framework.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Last Audit:</span>
                      <span>{framework.lastAudit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Audit:</span>
                      <span>{framework.nextAudit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data and ensure business continuity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <measure.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{measure.title}</h3>
                  <p className="text-gray-600">{measure.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Security?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our security team is available to answer any questions about our compliance and security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Contact Security Team
                </Link>
                <Link
                  href="/security"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Security Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
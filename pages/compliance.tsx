import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Database, AlertCircle, AlertTriangle, Clock, EyeOff } from 'lucide-react';
import Layout from '../components/Layout';

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 Type II compliance for security, availability, and confidentiality',
    status: 'Compliant',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Annual third-party audits',
      'Security controls implementation',
      'Availability monitoring',
      'Confidentiality protection'
    ],
    lastAudit: '2024-01-15',
    nextAudit: '2025-01-15'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance for healthcare data',
    status: 'Compliant',
    icon: Lock,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Administrative safeguards',
      'Physical safeguards',
      'Technical safeguards',
      'Business associate agreements'
    ],
    lastAudit: '2024-02-01',
    nextAudit: '2025-02-01'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System standard',
    status: 'In Progress',
    icon: Database,
    requirements: [
      'Data encryption in transit and at rest',
      'Access controls and authentication',
      'Data retention and deletion policies',
      'Privacy by design principles'
    ]
  }
];

const securityControls = [
  {
    category: 'Access Control',
    icon: Lock,
    controls: [
      'Multi-factor authentication',
      'Role-based access control',
      'Regular access reviews',
      'Privileged access management'
    ]
  },
  {
    category: 'Data Protection',
    icon: Shield,
    controls: [
      'End-to-end encryption',
      'Data classification',
      'Secure data transmission',
      'Regular security assessments'
    ]
  },
  {
    category: 'Monitoring & Auditing',
    icon: Eye,
    controls: [
      'Real-time threat detection',
      'Security event logging',
      'Regular compliance audits',
      'Incident response procedures'
    ]
  }
];

const certifications = [
  {
    name: 'SOC 2 Type II',
    issuer: 'AICPA',
    validUntil: '2025-01-15',
    status: 'Valid'
  },
  {
    name: 'HIPAA Compliance',
    issuer: 'Independent Auditor',
    validUntil: '2025-02-01',
    status: 'Valid'
  }
];

export default function CompliancePage() {
  return (
    <Layout
      title="Compliance & Security - Zion Tech Group"
      description="Learn about our compliance frameworks, security controls, and certifications that ensure the highest standards of data protection and regulatory compliance."
      keywords="compliance, security, SOC 2, HIPAA, ISO 27001, data protection, regulatory compliance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Security</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We maintain the highest standards of security and regulatory compliance to protect your data and ensure business continuity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance Frameworks</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We adhere to industry-leading compliance standards to ensure your data is protected and your business remains compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`bg-gradient-to-r ${framework.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{framework.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          framework.status === 'Compliant' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {framework.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{framework.description}</p>
                    <ul className="space-y-2">
                      {framework.details?.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                      {framework.requirements?.map((requirement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Controls */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Controls</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive security controls ensure your data remains protected at all times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityControls.map((control, index) => {
                const IconComponent = control.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{control.category}</h3>
                    <ul className="space-y-2">
                      {control.controls.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certifications demonstrate our commitment to maintaining the highest security and compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {cert.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600"><strong>Issuer:</strong> {cert.issuer}</p>
                    <p className="text-gray-600"><strong>Valid Until:</strong> {cert.validUntil}</p>
                  </div>
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
                Contact our security team to learn more about our compliance frameworks and security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Security Team
                </Link>
                <Link
                  href="/security"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
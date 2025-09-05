import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Database, AlertCircle } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

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
      'Confidentiality protection',
      'Processing integrity controls'
    ],
    lastAudit: '2024-01-15',
    nextAudit: '2025-01-15',
    score: '98%'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance for healthcare data protection',
    status: 'Compliant',
    icon: Lock,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Administrative safeguards',
      'Physical safeguards',
      'Technical safeguards',
      'Risk assessment procedures',
      'Breach notification protocols'
    ],
    lastAudit: '2024-02-20',
    nextAudit: '2025-02-20',
    score: '100%'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Data subject rights implementation',
      'Privacy by design',
      'Data protection impact assessments',
      'Consent management',
      'Data breach notification'
    ],
    lastAudit: '2024-03-10',
    nextAudit: '2025-03-10',
    score: '100%'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System certification',
    status: 'Certified',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    details: [
      'Information security policies',
      'Risk management framework',
      'Security controls implementation',
      'Continuous improvement',
      'Management review processes'
    ],
    lastAudit: '2024-01-30',
    nextAudit: '2025-01-30',
    score: '96%'
  }
];

const complianceAreas = [
  {
    category: 'Data Protection',
    icon: Shield,
    description: 'Comprehensive data protection measures and privacy controls',
    requirements: [
      'Data encryption at rest and in transit',
      'Access controls and authentication',
      'Data retention policies',
      'Privacy impact assessments',
      'Data subject rights management'
    ]
  },
  {
    category: 'Security Controls',
    icon: Lock,
    description: 'Multi-layered security controls and monitoring systems',
    requirements: [
      'Network security controls',
      'Endpoint protection',
      'Security monitoring and logging',
      'Incident response procedures',
      'Vulnerability management'
    ]
  },
  {
    category: 'Access Management',
    icon: Users,
    description: 'Robust access control and identity management systems',
    requirements: [
      'Role-based access controls',
      'Multi-factor authentication',
      'Privileged access management',
      'User provisioning and deprovisioning',
      'Access review and certification'
    ]
  },
  {
    category: 'Audit & Monitoring',
    icon: Eye,
    description: 'Continuous monitoring and regular audit processes',
    requirements: [
      'Security event monitoring',
      'Log management and analysis',
      'Regular compliance audits',
      'Penetration testing',
      'Vulnerability assessments'
    ]
  }
];

const complianceMetrics = [
  { label: 'SOC 2 Score', value: '98%', description: 'Last audit score' },
  { label: 'HIPAA Compliance', value: '100%', description: 'Current compliance status' },
  { label: 'GDPR Compliance', value: '100%', description: 'EU data protection compliance' },
  { label: 'Audit Frequency', value: 'Annual', description: 'Compliance audit schedule' }
];

const certifications = [
  {
    name: 'SOC 2 Type II',
    issuer: 'AICPA',
    status: 'Active',
    validUntil: '2025-01-15',
    description: 'Service Organization Control 2 Type II certification'
  },
  {
    name: 'ISO 27001:2013',
    issuer: 'ISO',
    status: 'Active',
    validUntil: '2025-01-30',
    description: 'Information Security Management System certification'
  },
  {
    name: 'HIPAA Compliance',
    issuer: 'HHS',
    status: 'Active',
    validUntil: 'Ongoing',
    description: 'Health Insurance Portability and Accountability Act compliance'
  }
];

export default function CompliancePage() {
  return (
    <MainLayout
      title="Compliance - Zion Tech Group"
      description="Learn about our compliance with industry standards including SOC 2, HIPAA, GDPR, and ISO 27001. Your data protection and regulatory compliance is our priority."
      keywords="compliance, SOC 2, HIPAA, GDPR, ISO 27001, data protection, regulatory compliance, security standards"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Security
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
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
                Compliance Frameworks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We adhere to industry-leading compliance standards to ensure the highest level of security and data protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${framework.color} rounded-lg flex items-center justify-center mb-4`}>
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {framework.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {framework.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      framework.status === 'Compliant' || framework.status === 'Certified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {framework.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      Score: {framework.score}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <strong>Last Audit:</strong> {framework.lastAudit}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Next Audit:</strong> {framework.nextAudit}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
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
                Compliance Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive compliance program covers all critical areas of data protection and security.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {area.category}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Metrics */}
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
                Compliance Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track our compliance performance and security metrics in real-time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-gray-600">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
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
                Certifications & Awards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certifications demonstrate our commitment to maintaining the highest standards of security and compliance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div><strong>Issuer:</strong> {cert.issuer}</div>
                    <div><strong>Status:</strong> <span className="text-green-600 font-medium">{cert.status}</span></div>
                    <div><strong>Valid Until:</strong> {cert.validUntil}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our compliance team is ready to answer your questions and provide detailed information about our security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Compliance Team
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
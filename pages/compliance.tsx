import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Database, AlertCircle } from 'lucide-react';
import Layout from "../components/Layout";

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
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Data protection by design',
      'Privacy impact assessments',
      'Data subject rights',
      'Breach notification procedures'
    ],
    lastAudit: '2024-01-30',
    nextAudit: '2025-01-30'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System standard',
    status: 'In Progress',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    details: [
      'Risk assessment framework',
      'Security policy management',
      'Continuous improvement',
      'Management system implementation'
    ],
    lastAudit: 'N/A',
    nextAudit: '2024-12-31'
  }
];

const complianceAreas = [
  {
    category: 'Data Protection',
    icon: Lock,
    requirements: [
      'Data encryption in transit and at rest',
      'Access controls and authentication',
      'Data retention and deletion policies',
      'Privacy by design principles'
    ]
  },
  {
    category: 'Security Controls',
    icon: Shield,
    requirements: [
      'Network security and firewalls',
      'Intrusion detection and prevention',
      'Vulnerability management',
      'Incident response procedures'
    ]
  },
  {
    category: 'Access Management',
    icon: Users,
    requirements: [
      'Multi-factor authentication',
      'Role-based access controls',
      'Regular access reviews',
      'Privileged access management'
    ]
  },
  {
    category: 'Monitoring & Auditing',
    icon: Eye,
    requirements: [
      'Comprehensive audit logging',
      'Real-time security monitoring',
      'Regular compliance assessments',
      'Third-party security audits'
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
    validUntil: '2025-01-15',
    status: 'Valid'
  },
  {
    name: 'HIPAA Compliance',
    issuer: 'Independent Auditor',
    validUntil: '2025-02-01',
    status: 'Valid'
  },
  {
    name: 'GDPR Compliance',
    issuer: 'EU Data Protection Authority',
    validUntil: '2025-01-30',
    status: 'Valid'
  },
  {
    name: 'ISO 27001',
    issuer: 'ISO',
    validUntil: 'In Progress',
    status: 'Pending'
  }
];

export default function CompliancePage() {
  return (
    <Layout
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Standards</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We maintain compliance with industry-leading standards to ensure the highest level of data protection and security
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {complianceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-gray-900 font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Frameworks</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with multiple industry standards and regulatory frameworks
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-xl flex items-center justify-center mr-4`}>
                      <framework.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{framework.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        framework.status === 'Compliant' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {framework.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{framework.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {framework.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Last Audit:</span>
                      <div className="font-medium">{framework.lastAudit}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Next Audit:</span>
                      <div className="font-medium">{framework.nextAudit}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Areas</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to compliance across all operational areas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={area.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{area.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Certifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our current compliance certifications and their validity status
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Certification</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Issuer</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Valid Until</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {certifications.map((cert, index) => (
                        <motion.tr
                          key={cert.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{cert.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.issuer}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cert.validUntil}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              cert.status === 'Valid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {cert.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Commitment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
              >
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Compliance Commitment</h3>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-4">
                    At Zion Tech Group, compliance is not just a requirement—it's a fundamental part of our commitment to 
                    protecting our clients' data and maintaining the highest standards of security and privacy.
                  </p>
                  <p className="mb-4">
                    We continuously monitor and update our compliance programs to ensure they meet the latest regulatory 
                    requirements and industry best practices. Our dedicated compliance team works closely with all departments 
                    to maintain our certifications and implement necessary controls.
                  </p>
                  <p>
                    Regular audits, assessments, and training ensure that our compliance programs remain effective and 
                    up-to-date with evolving regulations and standards.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Compliance Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Have questions about our compliance programs or need compliance documentation? Contact our compliance team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:compliance@ziontechgroup.com"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <FileText className="mr-2 w-5 h-5" />
                  Compliance Team
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
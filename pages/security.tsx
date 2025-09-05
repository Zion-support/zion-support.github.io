import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Lock,
  Eye,
  AlertTriangle,
  Globe,
  Users,
  Settings,
  FileText,
  Award,
  Zap,
  BarChart3
} from 'lucide-react';
import Layout from '../components/Layout';

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
    icon: Lock,
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Multi-Factor Authentication',
    description: 'Enhanced security with MFA support for all user accounts and administrative access.',
    icon: Shield,
    color: 'from-green-600 to-blue-600'
  },
  {
    title: 'Access Control',
    description: 'Granular access controls and role-based permissions to protect sensitive data.',
    icon: Users,
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Security Monitoring',
    description: '24/7 security monitoring and threat detection to identify and respond to threats.',
    icon: Eye,
    color: 'from-orange-600 to-red-600'
  },
  {
    title: 'Compliance Standards',
    description: 'SOC 2 Type II, ISO 27001, and GDPR compliance to meet industry standards.',
    icon: Award,
    color: 'from-indigo-600 to-purple-600'
  },
  {
    title: 'Data Privacy',
    description: 'Comprehensive data privacy controls and user consent management.',
    icon: FileText,
    color: 'from-teal-600 to-green-600'
  }
];

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    status: 'Certified',
    icon: Shield
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system',
    status: 'Certified',
    icon: Award
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'Compliant',
    icon: Globe
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Compliant',
    icon: Lock
  }
];

const securityMeasures = [
  {
    category: 'Infrastructure Security',
    measures: [
      'Secure data centers with 24/7 monitoring',
      'Redundant systems and backup procedures',
      'Regular security audits and penetration testing',
      'Network segmentation and firewalls'
    ]
  },
  {
    category: 'Application Security',
    measures: [
      'Secure coding practices and code reviews',
      'Regular security updates and patches',
      'Input validation and sanitization',
      'API security and rate limiting'
    ]
  },
  {
    category: 'Data Protection',
    measures: [
      'Data encryption at rest and in transit',
      'Secure key management and rotation',
      'Data anonymization and pseudonymization',
      'Regular data backup and recovery testing'
    ]
  },
  {
    category: 'Operational Security',
    measures: [
      'Employee security training and awareness',
      'Incident response and disaster recovery plans',
      'Regular security assessments and audits',
      'Vendor security assessments'
    ]
  }
];

const threatProtection = [
  {
    threat: 'DDoS Attacks',
    description: 'Distributed Denial of Service protection',
    protection: 'Advanced DDoS mitigation with traffic filtering and rate limiting',
    icon: AlertTriangle
  },
  {
    threat: 'Malware',
    description: 'Malicious software detection and prevention',
    protection: 'Real-time malware scanning and behavioral analysis',
    icon: Shield
  },
  {
    threat: 'Phishing',
    description: 'Social engineering attack prevention',
    protection: 'Email filtering and user awareness training',
    icon: Eye
  },
  {
    threat: 'Data Breaches',
    description: 'Unauthorized data access prevention',
    protection: 'Access controls, encryption, and monitoring',
    icon: Lock
  }
];

export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures, compliance standards, and data protection practices to keep your information safe."
      keywords="security, data protection, encryption, compliance, SOC 2, ISO 27001, GDPR, cybersecurity"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Your data security is our top priority. We implement industry-leading security 
              measures and maintain compliance with the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#security-features"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View Security Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                Contact Security Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security-features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive security measures to protect your data and ensure compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compliance Standards
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We maintain compliance with industry-leading security and privacy standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security Measures
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive security approach covers all aspects of data protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <div key={measureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {measure}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Threat Protection
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Advanced protection against various cyber threats and attacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatProtection.map((threat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <threat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{threat.threat}</h3>
                    <p className="text-gray-600 mb-4">{threat.description}</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <strong>Protection:</strong> {threat.protection}
                    </p>
                  </div>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Questions About Security?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our security team is available to answer any questions about our security 
              measures and compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Security Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/compliance"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View Compliance Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
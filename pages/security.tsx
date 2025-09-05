import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Users,
  Database,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
    icon: Lock,
    details: [
      'AES-256 encryption for data at rest',
      'TLS 1.3 for data in transit',
      'End-to-end encryption for sensitive communications',
      'Regular encryption key rotation'
    ]
  },
  {
    title: 'Access Controls',
    description: 'Multi-layered access controls ensure only authorized personnel can access sensitive data',
    icon: Users,
    details: [
      'Role-based access control (RBAC)',
      'Multi-factor authentication (MFA)',
      'Single sign-on (SSO) integration',
      'Regular access reviews and audits'
    ]
  },
  {
    title: 'Network Security',
    description: 'Advanced network security measures protect against external threats and intrusions',
    icon: Globe,
    details: [
      'Firewall protection and intrusion detection',
      'DDoS protection and mitigation',
      'VPN access for remote workers',
      'Network segmentation and isolation'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Comprehensive data protection measures ensure privacy and compliance',
    icon: Database,
    details: [
      'Data anonymization and pseudonymization',
      'Regular data backups and recovery testing',
      'Data retention and deletion policies',
      'Privacy by design principles'
    ]
  }
];

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system',
    status: 'Certified',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'FedRAMP',
    description: 'Federal Risk and Authorization Management Program',
    status: 'In Progress',
    icon: AlertTriangle,
    color: 'text-yellow-600'
  }
];

const securityMeasures = [
  {
    category: 'Physical Security',
    measures: [
      '24/7 monitored data centers',
      'Biometric access controls',
      'Video surveillance systems',
      'Environmental monitoring',
      'Secure disposal of hardware'
    ]
  },
  {
    category: 'Application Security',
    measures: [
      'Regular security code reviews',
      'Automated vulnerability scanning',
      'Penetration testing',
      'Secure coding practices',
      'Dependency vulnerability management'
    ]
  },
  {
    category: 'Operational Security',
    measures: [
      'Security incident response procedures',
      'Regular security training',
      'Threat monitoring and detection',
      'Security awareness programs',
      'Incident reporting and analysis'
    ]
  }
];

export default function SecurityPage() {
  return (
    <MainLayout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures, compliance certifications, and data protection practices that keep your information safe."
      keywords="security, data protection, compliance, encryption, SOC 2, ISO 27001, GDPR, HIPAA"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security &{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Compliance
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Your data security is our top priority. We implement industry-leading 
                security measures and maintain the highest compliance standards.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Security Consultation
                  </span>
                </Link>
                <Link href="/compliance">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Compliance
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data 
                and ensure the highest level of protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
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

        {/* Compliance Standards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest industry standards and compliance certifications 
                to ensure your data is protected according to global best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {standard.name}
                    </h3>
                    <standard.icon className={`w-6 h-6 ${standard.color}`} />
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {standard.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      standard.status === 'Certified' || standard.status === 'Compliant'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our security approach covers all aspects of data protection, 
                from physical infrastructure to operational procedures.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {securityMeasures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-center text-gray-600">
                        <Shield className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Security Questions or Concerns?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any security-related questions, concerns, or would like to 
                report a security issue, please contact our security team immediately.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Security Team Contact
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For security-related inquiries and incident reporting.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Email: security@ziontechgroup.com</p>
                    <p>Phone: +1 302 464 0950</p>
                    <p>Response Time: &lt; 4 hours</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    General Security Information
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For general security questions and compliance information.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Email: info@ziontechgroup.com</p>
                    <p>Phone: +1 302 464 0950</p>
                    <p>Response Time: &lt; 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
                Let us help you implement enterprise-grade security measures 
                to protect your business and customer data.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Security Consultation
                  </span>
                </Link>
                <Link href="/compliance">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Compliance
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
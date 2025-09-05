import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Shield, CheckCircle, AlertTriangle, Clock, FileText, Users, Lock, Eye, EyeOff, Database } from 'lucide-react';

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2 Type II compliance for security, availability, and confidentiality',
    status: 'Compliant',
    icon: Shield,
    features: ['Security Controls', 'Availability Monitoring', 'Confidentiality Protection']
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection',
    status: 'Compliant',
    icon: Lock,
    features: ['Data Protection', 'Privacy Rights', 'Consent Management']
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance for healthcare data',
    status: 'Compliant',
    icon: Database,
    features: ['Health Data Protection', 'Administrative Safeguards', 'Physical Safeguards']
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management System certification',
    status: 'In Progress',
    icon: CheckCircle,
    features: ['Risk Management', 'Security Policies', 'Continuous Improvement']
  }
];

const securityMeasures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption',
    icon: Lock
  },
  {
    title: 'Access Controls',
    description: 'Multi-factor authentication and role-based access controls',
    icon: Users
  },
  {
    title: 'Audit Logging',
    description: 'Comprehensive audit logs for all system activities',
    icon: FileText
  },
  {
    title: 'Regular Assessments',
    description: 'Regular security assessments and penetration testing',
    icon: Shield
  }
];

export default function CompliancePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Compliance & Security
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                We maintain the highest standards of security and compliance to protect your data and ensure regulatory compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Frameworks</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We adhere to industry-leading compliance frameworks and security standards.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <framework.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{framework.name}</h3>
                  <p className="text-gray-600 mb-4">{framework.description}</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      framework.status === 'Compliant' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {framework.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Measures</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive security measures ensure your data is protected at all times.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <measure.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{measure.title}</h3>
                  <p className="text-gray-600">{measure.description}</p>
                </motion.div>
              ))}
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
                Questions About Our Security?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our security team to learn more about our compliance and security measures.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Security Team
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Database,
  Cloud,
  Zap,
  ArrowRight,
  Star,
  Award,
  Globe
} from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500',
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to secure your systems.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['MFA enforcement', 'Role-based permissions', 'Single sign-on', 'Session management']
  },
  {
    title: 'Threat Detection',
    description: 'Advanced threat detection and response capabilities to protect against cyber attacks.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    details: ['Real-time monitoring', 'Anomaly detection', 'Automated response', 'Incident management']
  },
  {
    title: 'Compliance',
    description: 'Meet industry standards and regulatory requirements with our compliance solutions.',
    icon: Award,
    color: 'from-purple-500 to-violet-500',
    details: ['SOC 2 Type II', 'GDPR compliance', 'HIPAA ready', 'ISO 27001']
  }
];

const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '256-bit', label: 'Encryption Standard' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '0', label: 'Security Breaches' }
];

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Audited security controls and processes',
    status: 'Certified',
    icon: CheckCircle
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance',
    status: 'Compliant',
    icon: CheckCircle
  },
  {
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act',
    status: 'Ready',
    icon: CheckCircle
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system',
    status: 'Certified',
    icon: CheckCircle
  }
];

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive security measures and compliance standards." />
        <meta name="keywords" content="security, compliance, encryption, data protection, cybersecurity" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  First
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your data security is our top priority. We implement industry-leading 
                security measures to protect your information and ensure compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {securityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security measures designed to protect your data and ensure compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We meet and exceed industry standards to ensure your data is protected and compliant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {standard.description}
                  </p>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Security Best Practices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow industry best practices to ensure the highest level of security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Regular Security Audits
                </h3>
                <p className="text-gray-600">
                  We conduct regular security audits and penetration testing to identify and address vulnerabilities.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Continuous Monitoring
                </h3>
                <p className="text-gray-600">
                  Our systems are monitored 24/7 to detect and respond to security threats in real-time.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Secure Key Management
                </h3>
                <p className="text-gray-600">
                  We use secure key management practices to protect your encryption keys and access credentials.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Security?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our security team is available to answer any questions about our security measures and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Security Team
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Download Security Report
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Lock, Users, Shield, Eye, CheckCircle, Clock } from 'lucide-react';


const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500',
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access control to protect sensitive data',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['MFA required', 'Role-based permissions', 'Single sign-on (SSO)', 'Regular access reviews']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security measures including firewalls and intrusion detection',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    details: ['Web Application Firewall', 'DDoS protection', 'Intrusion detection', 'Network segmentation']
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive security monitoring and audit logging for all activities',
    icon: Eye,
    color: 'from-orange-500 to-red-500',
    details: ['24/7 security monitoring', 'Real-time threat detection', 'Comprehensive audit logs', 'Incident response']
  }
];

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Audited controls for security, availability, and confidentiality',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'HIPAA',
    description: 'Healthcare data protection and privacy compliance',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'GDPR',
    description: 'European data protection and privacy regulation',
    status: 'Compliant',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system standard',
    status: 'In Progress',
    icon: Clock,
    color: 'text-yellow-600'
  }
];

const securityPractices = [
  {
    category: 'Data Protection',
    practices: [
      'Regular data backups with encryption',
      'Secure data deletion procedures',
      'Data minimization principles',
      'Privacy by design approach'
    ]
  },
  {
    category: 'Infrastructure Security',
    practices: [
      'Regular security updates and patches',
      'Secure configuration management',
      'Vulnerability assessments',
      'Penetration testing'
    ]
  },
  {
    category: 'Employee Security',
    practices: [
      'Background checks for all employees',
      'Security awareness training',
      'Confidentiality agreements',
      'Regular security briefings'
    ]
  },
  {
    category: 'Incident Response',
    practices: [
      '24/7 security monitoring',
      'Rapid incident response procedures',
      'Regular security drills',
      'Post-incident analysis and improvement'
    ]
  }
];

const securityMetrics = [
  { label: 'Uptime', value: '99.9%', description: 'System availability' },
  { label: 'Response Time', value: '< 1 min', description: 'Security incident response' },
  { label: 'Audit Score', value: '98%', description: 'Last security audit' },
  { label: 'Vulnerabilities', value: '0', description: 'Critical vulnerabilities' }
];

export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures, compliance standards, and data protection practices. Your data security is our top priority."
      keywords="security, data protection, compliance, encryption, SOC 2, HIPAA, GDPR, cybersecurity"
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
                  Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compliance</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your data security is our top priority. Learn about our comprehensive security measures and compliance standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityMetrics.map((metric, index) => (
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

        {/* Security Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security measures to protect your data and systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Standards</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry-leading security and privacy standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Database className="w-8 h-8 text-blue-600" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      standard.status === 'Compliant' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                  <p className="text-gray-600 text-sm">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Practices</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to security across all aspects of our operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Incident <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Response</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our commitment to rapid and effective incident response
                </p>
              </motion.div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Security Incident Response</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">&lt; 1 min</div>
                    <div className="text-gray-600">Detection Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">15 min</div>
                    <div className="text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                </div>
                <p className="text-gray-600 mt-6">
                  Our security team is available 24/7 to respond to any security incidents. We have established 
                  procedures for rapid detection, containment, and resolution of security issues.
                </p>
              </div>
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
                Security Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Have questions about our security measures or need to report a security concern? Contact our security team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:security@ziontechgroup.com"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Security Team
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
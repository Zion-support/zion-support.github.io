import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle, ArrowRight, AlertTriangle, Users, Globe, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard encryption protocols",
    icon: Lock,
    details: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for data in transit",
      "End-to-end encryption for sensitive communications",
      "Regular encryption key rotation"
    ]
  },
  {
    title: "Access Controls",
    description: "Multi-layered access controls ensure only authorized personnel can access your data",
    icon: Users,
    details: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO) integration",
      "Regular access reviews and audits"
    ]
  },
  {
    title: "Network Security",
    description: "Advanced network security measures protect against external threats",
    icon: Globe,
    details: [
      "Firewall protection and intrusion detection",
      "DDoS protection and mitigation",
      "Network segmentation and isolation",
      "Regular security monitoring and logging"
    ]
  },
  {
    title: "Compliance & Auditing",
    description: "Regular audits and compliance with industry security standards",
    icon: Shield,
    details: [
      "SOC 2 Type II compliance",
      "ISO 27001 certification",
      "Regular third-party security audits",
      "Continuous compliance monitoring"
    ]
  }
];

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Comprehensive audit of our security controls and processes",
    status: "Certified",
    icon: "🔒"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    status: "Certified",
    icon: "🛡️"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    status: "Compliant",
    icon: "🇪🇺"
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance",
    status: "Compliant",
    icon: "🇺🇸"
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    status: "Compliant",
    icon: "🏥"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    status: "Compliant",
    icon: "💳"
  }
];

const securityPractices = [
  {
    title: "Secure Development",
    description: "Security is built into every stage of our development process",
    practices: [
      "Secure coding practices and training",
      "Regular security code reviews",
      "Automated security testing",
      "Threat modeling and risk assessment"
    ]
  },
  {
    title: "Incident Response",
    description: "Comprehensive incident response plan for security events",
    practices: [
      "24/7 security monitoring",
      "Rapid incident detection and response",
      "Regular incident response drills",
      "Post-incident analysis and improvement"
    ]
  },
  {
    title: "Employee Training",
    description: "Regular security training and awareness programs",
    practices: [
      "Mandatory security training for all employees",
      "Phishing simulation and testing",
      "Security awareness campaigns",
      "Regular security updates and briefings"
    ]
  },
  {
    title: "Vendor Security",
    description: "Strict security requirements for all third-party vendors",
    practices: [
      "Vendor security assessments",
      "Security requirements in contracts",
      "Regular vendor security reviews",
      "Incident notification requirements"
    ]
  }
];

export default function SecurityPage() {
  return (
    <MainLayout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures, compliance standards, and data protection practices."
      keywords="security, data protection, compliance, encryption, privacy, cybersecurity"
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your data security is our top priority. We implement industry-leading security measures 
                and maintain compliance with the highest standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Security Audit
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Multi-layered security approach protecting your data at every level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We maintain compliance with industry-leading security and privacy standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-red-50 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{standard.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{standard.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    standard.status === 'Certified' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Security Practices
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive security practices ensure continuous protection and improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {practice.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {practice.description}
                  </p>

                  <ul className="space-y-2">
                    {practice.practices.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Report a Security Issue
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you discover a security vulnerability or have concerns about our security practices, 
                please report it to our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:security@ziontechgroup.com" className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  security@ziontechgroup.com
                </a>
                <Link href="/contact" className="px-8 py-4 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold">
                  Contact Security Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Questions About Our Security?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Our security team is available to answer any questions about our security measures and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Security Team
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
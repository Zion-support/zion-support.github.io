import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  Server,
  Key,
  Globe,
  Database,
  Users,
  FileText,
  Award,
  Zap
} from 'lucide-react';

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
    icon: Lock,
    details: ["AES-256 encryption", "TLS 1.3 for data in transit", "End-to-end encryption", "Key management"]
  },
  {
    title: "Access Control",
    description: "Multi-factor authentication and role-based access control to protect sensitive information.",
    icon: Key,
    details: ["Multi-factor authentication", "Role-based permissions", "Single sign-on (SSO)", "Session management"]
  },
  {
    title: "Network Security",
    description: "Advanced network security measures including firewalls, DDoS protection, and intrusion detection.",
    icon: Globe,
    details: ["Web Application Firewall", "DDoS protection", "Intrusion detection", "Network monitoring"]
  },
  {
    title: "Infrastructure Security",
    description: "Secure cloud infrastructure with regular security updates and monitoring.",
    icon: Server,
    details: ["Secure cloud hosting", "Regular security updates", "Infrastructure monitoring", "Backup and recovery"]
  }
];

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Audited security controls for availability, confidentiality, and processing integrity",
    status: "Certified",
    icon: Award
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    status: "Certified",
    icon: Shield
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection",
    status: "Compliant",
    icon: FileText
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    status: "Compliant",
    icon: Users
  }
];

const securityPractices = [
  {
    title: "Regular Security Audits",
    description: "We conduct regular security audits and penetration testing to identify and address vulnerabilities.",
    frequency: "Quarterly"
  },
  {
    title: "Employee Training",
    description: "All employees receive regular security training and awareness programs.",
    frequency: "Monthly"
  },
  {
    title: "Incident Response",
    description: "We have a comprehensive incident response plan for security breaches and data incidents.",
    frequency: "24/7"
  },
  {
    title: "Vulnerability Management",
    description: "Proactive vulnerability scanning and patch management to address security issues quickly.",
    frequency: "Weekly"
  }
];

const dataProtection = [
  {
    category: "Data Collection",
    practices: [
      "Minimal data collection principle",
      "Clear consent mechanisms",
      "Purpose limitation",
      "Data minimization"
    ]
  },
  {
    category: "Data Storage",
    practices: [
      "Encrypted storage systems",
      "Secure data centers",
      "Regular backups",
      "Data retention policies"
    ]
  },
  {
    category: "Data Processing",
    practices: [
      "Secure processing environments",
      "Access logging and monitoring",
      "Data anonymization",
      "Regular security reviews"
    ]
  },
  {
    category: "Data Sharing",
    practices: [
      "Controlled data sharing",
      "Third-party security assessments",
      "Data sharing agreements",
      "Regular compliance audits"
    ]
  }
];

export default function SecurityPage() {
  return (
    <MainLayout 
      title="Security - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and data protection practices."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security &{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Compliance
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your data security is our top priority. We implement industry-leading 
                security measures and maintain the highest compliance standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data and ensure 
                the highest level of protection for our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry-leading security standards and 
                undergo regular audits to ensure the highest level of security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {standard.description}
                    </p>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {standard.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Practices
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our security practices are designed to maintain the highest level of 
                protection and respond quickly to any security threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {practice.title}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {practice.frequency}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
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
                Data Protection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow strict data protection principles to ensure your information 
                is handled securely and in compliance with applicable regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataProtection.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Report Security Issues
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                If you discover a security vulnerability or have security concerns, 
                please report them to our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:security@ziontechgroup.com" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  security@ziontechgroup.com
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Contact Security Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
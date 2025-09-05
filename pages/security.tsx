import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Key, FileText } from 'lucide-react';
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
    ],
    color: "blue"
  },
  {
    title: "Access Control",
    description: "Multi-layered access control with role-based permissions and authentication",
    icon: Key,
    details: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Single sign-on (SSO) integration",
      "Regular access reviews and audits"
    ],
    color: "green"
  },
  {
    title: "Network Security",
    description: "Advanced network security measures to protect against external threats",
    icon: Shield,
    details: [
      "Firewall protection and intrusion detection",
      "DDoS protection and mitigation",
      "Network segmentation and isolation",
      "Real-time threat monitoring"
    ],
    color: "purple"
  },
  {
    title: "Monitoring & Logging",
    description: "Comprehensive monitoring and logging for security events and compliance",
    icon: Eye,
    details: [
      "24/7 security monitoring",
      "Comprehensive audit logging",
      "Real-time threat detection",
      "Automated incident response"
    ],
    color: "orange"
  }
];

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Audited controls for security, availability, and confidentiality",
    status: "Certified",
    icon: CheckCircle,
    color: "green"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    status: "Certified",
    icon: CheckCircle,
    color: "green"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    status: "Compliant",
    icon: CheckCircle,
    color: "blue"
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    status: "Ready",
    icon: AlertTriangle,
    color: "yellow"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    status: "Compliant",
    icon: CheckCircle,
    color: "green"
  },
  {
    name: "FedRAMP",
    description: "Federal Risk and Authorization Management Program",
    status: "In Progress",
    icon: AlertTriangle,
    color: "yellow"
  }
];

const securityPractices = [
  {
    title: "Regular Security Audits",
    description: "We conduct regular internal and external security audits to identify and address potential vulnerabilities.",
    frequency: "Quarterly"
  },
  {
    title: "Employee Training",
    description: "All employees receive regular security training and awareness programs to maintain high security standards.",
    frequency: "Monthly"
  },
  {
    title: "Penetration Testing",
    description: "We perform regular penetration testing to identify and fix security vulnerabilities before they can be exploited.",
    frequency: "Bi-annually"
  },
  {
    title: "Incident Response",
    description: "We have a comprehensive incident response plan to quickly address and mitigate security incidents.",
    frequency: "24/7"
  }
];

const dataProtection = [
  {
    category: "Personal Data",
    measures: [
      "Data minimization and purpose limitation",
      "Consent management and withdrawal",
      "Right to access and portability",
      "Right to erasure and rectification"
    ]
  },
  {
    category: "Business Data",
    measures: [
      "Confidentiality agreements",
      "Data classification and handling",
      "Secure data transmission",
      "Regular data backups"
    ]
  },
  {
    category: "Financial Data",
    measures: [
      "PCI DSS compliance",
      "Encrypted payment processing",
      "Secure financial reporting",
      "Fraud detection and prevention"
    ]
  }
];

export default function SecurityPage() {
  return (
    <MainLayout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures, compliance standards, and data protection practices. Your security is our priority."
      keywords="security, data protection, compliance, encryption, SOC 2, ISO 27001, GDPR, cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  Compliance
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your security is our top priority. We implement comprehensive security measures 
                and maintain the highest compliance standards to protect your data and systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data and systems from threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  green: "from-green-500 to-green-600",
                  purple: "from-purple-500 to-purple-600",
                  orange: "from-orange-500 to-orange-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
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
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry-leading security and privacy standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                const colorClasses = {
                  green: "bg-green-100 text-green-800",
                  blue: "bg-blue-100 text-blue-800",
                  yellow: "bg-yellow-100 text-yellow-800"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClasses[standard.color as keyof typeof colorClasses]}`}>
                        {standard.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {standard.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Security Practices
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our ongoing security practices ensure continuous protection and improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{practice.title}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {practice.frequency}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {practice.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Data Protection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement specific measures to protect different types of data according to their sensitivity and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataProtection.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Questions or Concerns?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  If you have any questions about our security measures or need to report a security concern, 
                  please contact our security team:
                </p>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Team</h3>
                      <p className="text-blue-600">security@ziontechgroup.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">General Contact</h3>
                      <p className="text-blue-600">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-blue-600">+1 302 464 0950</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
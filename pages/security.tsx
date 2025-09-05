import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Users,
  Database,
  Globe,
  FileText,
  Award,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard encryption protocols",
    icon: Lock,
    details: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for data in transit",
      "End-to-end encryption for sensitive data",
      "Regular encryption key rotation"
    ]
  },
  {
    title: "Access Controls",
    description: "Multi-layered access controls ensure only authorized personnel can access your data",
    icon: Users,
    details: [
      "Multi-factor authentication (MFA)",
      "Role-based access controls (RBAC)",
      "Principle of least privilege",
      "Regular access reviews and audits"
    ]
  },
  {
    title: "Network Security",
    description: "Advanced network security measures protect against external threats",
    icon: Globe,
    details: [
      "Firewall protection",
      "DDoS mitigation",
      "Intrusion detection systems",
      "Network segmentation"
    ]
  },
  {
    title: "Monitoring & Logging",
    description: "Comprehensive monitoring and logging for security incident detection",
    icon: Eye,
    details: [
      "24/7 security monitoring",
      "Real-time threat detection",
      "Comprehensive audit logs",
      "Automated incident response"
    ]
  }
];

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Audited controls for security, availability, and confidentiality",
    icon: Award,
    status: "Certified",
    details: "Annual third-party audits ensure our controls meet the highest standards"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    icon: Shield,
    status: "Certified",
    details: "Comprehensive information security management system"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    icon: FileText,
    status: "Compliant",
    details: "Full compliance with EU data protection regulations"
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    icon: Database,
    status: "Compliant",
    details: "Safeguards for protected health information"
  }
];

const securityPractices = [
  {
    title: "Regular Security Audits",
    description: "Quarterly security assessments and penetration testing",
    icon: CheckCircle
  },
  {
    title: "Employee Training",
    description: "Ongoing security awareness training for all staff",
    icon: Users
  },
  {
    title: "Incident Response",
    description: "24/7 incident response team and procedures",
    icon: AlertTriangle
  },
  {
    title: "Vulnerability Management",
    description: "Regular vulnerability scanning and patch management",
    icon: Zap
  }
];

const dataProtection = [
  {
    title: "Data Minimization",
    description: "We only collect and process data that is necessary for our services"
  },
  {
    title: "Data Retention",
    description: "Data is retained only as long as necessary and securely deleted when no longer needed"
  },
  {
    title: "Data Portability",
    description: "You can export your data in standard formats at any time"
  },
  {
    title: "Right to Deletion",
    description: "You can request deletion of your personal data in accordance with applicable laws"
  }
];

export default function SecurityPage() {
  return (
    <MainLayout 
      title="Security - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices."
      keywords="security, data protection, compliance, encryption, SOC 2, ISO 27001, GDPR, HIPAA"
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
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Security & Compliance
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your data security is our top priority. We implement industry-leading security 
                measures and maintain the highest compliance standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Security Team
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
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
                    className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We maintain the highest industry standards and compliance certifications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {standard.description}
                    </p>

                    <div className="mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        standard.status === 'Certified' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {standard.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500">
                      {standard.details}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Security Practices
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ongoing security practices that keep your data protected.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityPractices.map((practice, index) => {
                const IconComponent = practice.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {practice.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {practice.description}
                    </p>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Data Protection Rights
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Your data, your rights. We respect and protect your privacy rights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {dataProtection.map((right, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {right.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Security Concerns?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                If you discover a security vulnerability or have security concerns, 
                please report it to our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:security@ziontechgroup.com" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold">
                  Report Security Issue
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Security Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
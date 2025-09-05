<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
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
import MainLayout from '../components/layout/MainLayout';

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "End-to-end encryption for all data in transit and at rest",
    icon: Lock,
    details: ["AES-256 encryption", "TLS 1.3 protocols", "Zero-knowledge architecture", "Key management"]
  },
  {
    title: "Access Control",
    description: "Multi-factor authentication and role-based access controls",
    icon: Users,
    details: ["MFA enforcement", "RBAC implementation", "SSO integration", "Session management"]
  },
  {
    title: "Network Security",
    description: "Advanced network protection and monitoring",
    icon: Globe,
    details: ["DDoS protection", "Firewall management", "Intrusion detection", "Traffic monitoring"]
  },
  {
    title: "Compliance",
    description: "Industry-standard compliance and certifications",
    icon: Award,
    details: ["SOC 2 Type II", "ISO 27001", "GDPR compliance", "HIPAA ready"]
  }
];

const securityMeasures = [
  {
    category: "Infrastructure Security",
    measures: [
      "Secure cloud infrastructure with AWS, Azure, and GCP",
      "Regular security updates and patches",
      "Network segmentation and isolation",
      "Intrusion detection and prevention systems"
    ]
  },
  {
    category: "Application Security",
    measures: [
      "Secure coding practices and code reviews",
      "Automated vulnerability scanning",
      "Penetration testing and security audits",
      "API security and rate limiting"
    ]
  },
  {
    category: "Data Protection",
    measures: [
      "Data classification and handling procedures",
      "Backup and disaster recovery plans",
      "Data retention and deletion policies",
      "Privacy by design principles"
    ]
  },
  {
    category: "Operational Security",
    measures: [
      "24/7 security monitoring and incident response",
      "Employee security training and awareness",
      "Vendor security assessments",
      "Regular security audits and assessments"
    ]
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Audited controls for security, availability, and confidentiality",
    status: "Certified",
    validUntil: "2025-12-31"
  },
  {
    name: "ISO 27001",
    description: "Information security management system certification",
    status: "Certified",
    validUntil: "2025-06-30"
  },
  {
    name: "GDPR Compliance",
    description: "General Data Protection Regulation compliance",
    status: "Compliant",
    validUntil: "Ongoing"
  },
  {
    name: "HIPAA Ready",
    description: "Health Insurance Portability and Accountability Act ready",
    status: "Ready",
    validUntil: "Ongoing"
  }
];

const incidentResponse = [
  {
    phase: "Detection",
    description: "Automated monitoring and alerting systems",
    timeframe: "Immediate",
    tools: ["SIEM", "EDR", "Network monitoring"]
  },
  {
    phase: "Analysis",
    description: "Rapid assessment and threat classification",
    timeframe: "< 15 minutes",
    tools: ["Threat intelligence", "Forensic analysis", "Expert team"]
  },
  {
    phase: "Containment",
    description: "Isolation and prevention of further damage",
    timeframe: "< 30 minutes",
    tools: ["Network isolation", "Access revocation", "System quarantine"]
  },
  {
    phase: "Recovery",
    description: "System restoration and service resumption",
    timeframe: "< 2 hours",
    tools: ["Backup systems", "Rollback procedures", "Validation testing"]
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  }
];

export default function SecurityPage() {
  return (
<<<<<<< HEAD
    <MainLayout 
      title="Security - Zion Tech Group"
      description="Comprehensive security measures, compliance certifications, and data protection practices at Zion Tech Group."
      keywords="security, data protection, compliance, encryption, SOC 2, ISO 27001, GDPR, cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Your data security is our top priority. We implement industry-leading security measures 
                and maintain the highest compliance standards to protect your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#security-features"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Learn About Our Security
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Security Consultation
                </Link>
              </div>
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
<<<<<<< HEAD
        <section id="security-features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered security approach protecting your data at every level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
=======
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our security approach covers all aspects of data protection and system security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start">
                        <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Certifications & Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain industry-leading certifications and compliance standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {cert.description}
                  </p>
                  <div className="space-y-1">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-600' :
                      cert.status === 'Compliant' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {cert.status}
                    </div>
                    <div className="text-xs text-gray-500">
                      Valid until: {cert.validUntil}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Incident Response
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rapid response procedures to minimize impact and ensure quick recovery.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {incidentResponse.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {phase.phase}
                          </h3>
                          <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium">
                            {phase.timeframe}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {phase.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Questions About Security?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our security team is available to discuss your specific security requirements 
                and answer any questions about our security practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Security Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Privacy Policy
                </Link>
=======
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}
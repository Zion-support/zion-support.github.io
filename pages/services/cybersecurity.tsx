import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Key,
  Database,
  Network,
  UserCheck,
  FileText,
  Search
} from 'lucide-react';
import Layout from '../../components/Layout';

const services = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits to identify vulnerabilities and compliance gaps.',
    features: ['Penetration Testing', 'Vulnerability Scanning', 'Compliance Audits', 'Risk Assessment']
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Implement robust IAM solutions to control user access and protect sensitive data.',
    features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Privileged Access Management']
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'Safeguard your critical data with encryption, backup, and recovery solutions.',
    features: ['Data Encryption', 'Backup Solutions', 'Data Loss Prevention', 'Compliance Management']
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Secure your network infrastructure with firewalls, monitoring, and threat detection.',
    features: ['Firewall Configuration', 'Network Monitoring', 'Intrusion Detection', 'VPN Solutions']
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: '24/7 security monitoring and incident response to protect against threats.',
    features: ['SIEM Implementation', 'Threat Detection', 'Incident Response', 'Security Analytics']
  },
  {
    icon: FileText,
    title: 'Compliance & Governance',
    description: 'Ensure compliance with industry standards and regulatory requirements.',
    features: ['GDPR Compliance', 'SOC 2 Certification', 'ISO 27001', 'HIPAA Compliance']
  }
];

const threats = [
  {
    icon: AlertTriangle,
    title: 'Ransomware Protection',
    description: 'Advanced protection against ransomware attacks with real-time monitoring and response.'
  },
  {
    icon: UserCheck,
    title: 'Phishing Prevention',
    description: 'Employee training and technical controls to prevent phishing attacks.'
  },
  {
    icon: Search,
    title: 'Threat Intelligence',
    description: 'Proactive threat hunting and intelligence gathering to stay ahead of attackers.'
  },
  {
    icon: Key,
    title: 'Cryptographic Security',
    description: 'Implement strong encryption and key management for data protection.'
  }
];

const compliance = [
  { name: 'GDPR', description: 'General Data Protection Regulation' },
  { name: 'SOC 2', description: 'Service Organization Control 2' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
  { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
  { name: 'NIST', description: 'National Institute of Standards and Technology' }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Evaluate your current security posture and identify vulnerabilities.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Develop a comprehensive security strategy and implementation plan.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Deploy security solutions and establish monitoring systems.'
  },
  {
    step: '04',
    title: 'Monitoring',
    description: 'Continuous monitoring and improvement of security measures.'
  }
];

export default function CybersecurityPage() {
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Protect your business with comprehensive cybersecurity services. Security assessment, compliance, monitoring, and incident response."
      keywords="cybersecurity, security assessment, compliance, penetration testing, data protection, network security"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Advanced Cybersecurity Solutions
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Protect your business from evolving cyber threats with our comprehensive 
                security services and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Get Security Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From security assessments to compliance management, we provide comprehensive 
                cybersecurity solutions to protect your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

        {/* Threat Protection */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Threat Protection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of cybercriminals with our proactive threat detection 
                and response capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-red-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <threat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {threat.title}
                  </h3>
                  <p className="text-gray-600">
                    {threat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ensure your business meets industry standards and regulatory requirements 
                with our compliance expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {standard.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {standard.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Security Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure comprehensive security 
                coverage for your organization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-red-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Let our experts help you build 
                a robust defense against cyber threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Get Security Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Security Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
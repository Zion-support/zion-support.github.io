import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  Users, 
  Globe, 
  Database, 
  Zap,
  Phone,
  Mail,
  MapPin
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
    description: 'Multi-factor authentication and role-based access control to protect your systems.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    details: ['Multi-factor authentication', 'Role-based permissions', 'Single sign-on', 'Session management']
  },
  {
    title: 'Threat Detection',
    description: 'Advanced threat detection and monitoring to identify and prevent security breaches.',
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500',
    details: ['Real-time monitoring', 'Anomaly detection', 'Threat intelligence', 'Incident response']
  },
  {
    title: 'Compliance',
    description: 'Meet industry compliance standards including GDPR, HIPAA, and SOC 2.',
    icon: CheckCircle,
    color: 'from-purple-500 to-indigo-500',
    details: ['GDPR compliance', 'HIPAA compliance', 'SOC 2 Type II', 'ISO 27001']
  },
  {
    title: 'Network Security',
    description: 'Comprehensive network security measures to protect your infrastructure.',
    icon: Globe,
    color: 'from-orange-500 to-yellow-500',
    details: ['Firewall protection', 'DDoS mitigation', 'VPN access', 'Network segmentation']
  },
  {
    title: 'Data Backup',
    description: 'Automated backup and disaster recovery solutions to ensure data availability.',
    icon: Database,
    color: 'from-teal-500 to-cyan-500',
    details: ['Automated backups', 'Disaster recovery', 'Data replication', 'Point-in-time recovery']
  }
];

const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '0', label: 'Security Breaches' },
  { number: '100%', label: 'Compliance Rate' }
];

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security - Zion Tech Group | Enterprise Security Solutions</title>
        <meta name="description" content="Comprehensive security solutions including data encryption, threat detection, compliance, and network security for enterprise protection." />
        <meta name="keywords" content="security, cybersecurity, data protection, encryption, compliance, threat detection" />
        <meta property="og:title" content="Security Solutions - Zion Tech Group" />
        <meta property="og:description" content="Protect your business with our comprehensive security solutions and best practices." />
        <meta property="og:url" content="https://ziontechgroup.com/security" />
        <meta property="og:type" content="website" />
      </Head>
      
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Security
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive security solutions to protect your business from cyber threats and ensure compliance with industry standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Security Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive security suite provides multiple layers of protection for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

        {/* Security Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Best Practices Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Security Best Practices</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We follow industry best practices and implement comprehensive security measures to protect your data and systems.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Regular Security Audits</h3>
                      <p className="text-gray-600">We conduct regular security audits and penetration testing to identify and fix vulnerabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Eye className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
                      <p className="text-gray-600">Round-the-clock monitoring and threat detection to ensure immediate response to security incidents.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Rapid Response</h3>
                      <p className="text-gray-600">Quick incident response and recovery procedures to minimize impact of security breaches.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Assessment</h3>
                  <p className="text-gray-600 mb-6">
                    Get a comprehensive security assessment of your current infrastructure and receive recommendations for improvement.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Get Security Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Contact us today to implement comprehensive security solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Security Consultation
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Security Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  Globe,
  Database,
  Cloud,
  Zap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function SecurityPage() {
  const securityServices = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation to identify vulnerabilities and risks',
      features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Compliance audit']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions',
      features: ['End-to-end encryption', 'Data backup solutions', 'Access controls', 'Privacy compliance']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 monitoring and threat detection services',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Damage assessment']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', description: 'Security and availability controls' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'GDPR', description: 'Data protection and privacy' },
    { name: 'HIPAA', description: 'Healthcare data protection' },
    { name: 'PCI DSS', description: 'Payment card industry security' },
    { name: 'NIST', description: 'Cybersecurity framework' }
  ];

  const industries = [
    { name: 'Healthcare', icon: Building2, description: 'Protecting patient data and medical systems' },
    { name: 'Finance', icon: Database, description: 'Securing financial transactions and customer data' },
    { name: 'Government', icon: Globe, description: 'Defending against cyber threats and attacks' },
    { name: 'E-commerce', icon: Cloud, description: 'Securing online transactions and customer information' }
  ];

  return (
    <MainLayout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity solutions including threat assessment, data protection, security monitoring, and incident response services."
      keywords="cybersecurity, security services, data protection, threat assessment, security monitoring, incident response"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20 overflow-hidden">
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
                Protect Your Business with{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Advanced Security
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats. 
                We provide end-to-end security services including assessment, monitoring, and incident response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-red-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Security Assessment
                </Link>
                <Link
                  href="/cybersecurity"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Security Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive cybersecurity solutions designed to protect your business 
                from all types of threats and ensure compliance with industry standards.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help you meet industry compliance requirements and maintain the highest 
                security standards across all frameworks.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {complianceFrameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {framework.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {framework.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide specialized security solutions for various industries, 
                understanding the unique challenges and compliance requirements of each sector.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Get a comprehensive security assessment 
                and protect your business with our expert cybersecurity services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-red-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Security Assessment
                </Link>
                <Link
                  href="/cybersecurity"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Security
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
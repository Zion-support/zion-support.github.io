import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  FileText,
  Lock,
  AlertTriangle,
  Users,
  Building2,
  Globe,
  Database,
  Cloud,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function CompliancePage() {
  const complianceFrameworks = [
    {
      name: 'SOC 2',
      description: 'Security and availability controls for service organizations',
      icon: Shield,
      features: [
        'Security controls implementation',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality protection',
        'Privacy controls'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Lock,
      features: [
        'Information security management system',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Continuous improvement',
        'Management review'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Users,
      features: [
        'Data protection by design',
        'Privacy impact assessments',
        'Data subject rights',
        'Breach notification',
        'Data processing records'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Building2,
      features: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Business associate agreements',
        'Risk assessments'
      ],
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: Database,
      features: [
        'Secure network architecture',
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures',
        'Regular security testing'
      ],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'NIST',
      description: 'National Institute of Standards and Technology Framework',
      icon: Globe,
      features: [
        'Identify cybersecurity risks',
        'Protect critical services',
        'Detect cybersecurity events',
        'Respond to incidents',
        'Recover from incidents'
      ],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const complianceServices = [
    {
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of your current compliance posture',
      icon: FileText
    },
    {
      title: 'Gap Analysis',
      description: 'Identify gaps between current state and compliance requirements',
      icon: AlertTriangle
    },
    {
      title: 'Implementation Support',
      description: 'Help implement necessary controls and processes',
      icon: CheckCircle
    },
    {
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and maintenance of compliance',
      icon: Shield
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA, HITECH, and healthcare-specific regulations' },
    { name: 'Finance', description: 'PCI DSS, SOX, and financial services regulations' },
    { name: 'Government', description: 'FISMA, FedRAMP, and government security standards' },
    { name: 'E-commerce', description: 'PCI DSS, GDPR, and consumer protection laws' },
    { name: 'Education', description: 'FERPA, COPPA, and educational data protection' },
    { name: 'Manufacturing', description: 'Industry-specific security and safety standards' }
  ];

  return (
    <MainLayout
      title="Compliance Services - Zion Tech Group"
      description="Comprehensive compliance services including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and NIST framework implementation and maintenance."
      keywords="compliance services, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, NIST, regulatory compliance, security compliance"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Navigate complex regulatory requirements with our comprehensive compliance services. 
                We help you achieve and maintain compliance with major frameworks and standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Compliance Assessment
                </Link>
                <Link
                  href="/security"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn About Security
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
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
                Compliance Frameworks We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help you achieve compliance with major industry standards and regulatory frameworks 
                across different sectors and regions.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {complianceFrameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${framework.color} flex items-center justify-center mb-6`}>
                      <framework.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {framework.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{framework.description}</p>
                    <ul className="space-y-2">
                      {framework.features.map((feature, featureIndex) => (
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

        {/* Compliance Services */}
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
                Our Compliance Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end compliance services to help you achieve and maintain 
                regulatory compliance across all major frameworks.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {complianceServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
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
                Industry-Specific Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique compliance requirements of different industries 
                and provide specialized solutions for each sector.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Achieve Compliance?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our compliance experts help you navigate regulatory requirements 
                and achieve certification with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Compliance Assessment
                </Link>
                <Link
                  href="/security"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn About Security
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
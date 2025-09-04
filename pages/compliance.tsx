import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  FileText,
  Award,
  Calendar
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const complianceStandards = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 Type II certification for security, availability, and confidentiality",
    status: "Certified",
    lastAudit: "2024-01-15",
    nextAudit: "2025-01-15",
    icon: "🔒"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    status: "Certified",
    lastAudit: "2023-12-01",
    nextAudit: "2024-12-01",
    icon: "🛡️"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection",
    status: "Compliant",
    lastAudit: "2024-01-01",
    nextAudit: "2024-07-01",
    icon: "🇪🇺"
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    status: "Compliant",
    lastAudit: "2023-11-15",
    nextAudit: "2024-11-15",
    icon: "🏥"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard compliance",
    status: "Compliant",
    lastAudit: "2023-10-01",
    nextAudit: "2024-10-01",
    icon: "💳"
  }
];

const complianceAreas = [
  {
    title: "Data Protection",
    description: "Comprehensive data protection measures and privacy controls",
    features: [
      "Data encryption in transit and at rest",
      "Data minimization and purpose limitation",
      "Right to erasure and data portability",
      "Privacy by design principles"
    ]
  },
  {
    title: "Security Controls",
    description: "Robust security controls and monitoring systems",
    features: [
      "Access controls and authentication",
      "Network security and segmentation",
      "Incident response procedures",
      "Regular security assessments"
    ]
  },
  {
    title: "Operational Controls",
    description: "Operational procedures and business continuity",
    features: [
      "Change management processes",
      "Backup and recovery procedures",
      "Vendor management and oversight",
      "Business continuity planning"
    ]
  }
];

export default function CompliancePage() {
  return (
    <MainLayout
      title="Compliance - Zion Tech Group"
      description="Learn about our compliance certifications, data protection measures, and regulatory adherence across multiple standards."
      keywords="compliance, certifications, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, regulatory compliance"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance &{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We maintain the highest standards of compliance and security across 
                multiple industry standards and regulations.
              </p>
            </motion.div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our certifications and compliance status across key industry standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {standard.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {standard.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      standard.status === 'Certified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {standard.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 text-center">
                    {standard.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Last Audit:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(standard.lastAudit).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Next Audit:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(standard.nextAudit).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
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
                Compliance Areas
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Key areas of our compliance program and controls
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Compliance Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                How we maintain and continuously improve our compliance posture
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Planning</h3>
                  <p className="text-gray-600">Regular assessment of compliance requirements and development of implementation plans</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600">Implementation of controls, policies, and procedures to meet compliance requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring & Testing</h3>
                  <p className="text-gray-600">Continuous monitoring and regular testing of controls to ensure effectiveness</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Audit & Certification</h3>
                  <p className="text-gray-600">Regular third-party audits and certification renewals to maintain compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Need Compliance Documentation?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Contact us for compliance reports, certifications, and documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Request Documentation
                </Link>
                <Link href="/security" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Security Information
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
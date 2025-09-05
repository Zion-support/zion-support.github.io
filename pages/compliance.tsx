import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Globe, Users, Lock, ArrowRight, Award, Building } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const complianceFrameworks = [
  {
    name: "SOC 2 Type II",
    description: "Comprehensive audit of our security controls and operational processes",
    status: "Certified",
    validity: "Annual renewal",
    icon: Shield,
    details: [
      "Security controls assessment",
      "Availability monitoring",
      "Processing integrity verification",
      "Confidentiality protection",
      "Privacy controls implementation"
    ],
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    status: "Certified",
    validity: "3-year certification",
    icon: Lock,
    details: [
      "Information security management system",
      "Risk assessment and treatment",
      "Security policy implementation",
      "Continuous improvement processes",
      "Management review and monitoring"
    ],
    color: "from-green-600 to-green-800"
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data processing",
    status: "Compliant",
    validity: "Ongoing compliance",
    icon: Globe,
    details: [
      "Data protection by design",
      "Privacy impact assessments",
      "Data subject rights implementation",
      "Breach notification procedures",
      "Data processing agreements"
    ],
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance for California residents",
    status: "Compliant",
    validity: "Ongoing compliance",
    icon: Users,
    details: [
      "Consumer privacy rights",
      "Data collection transparency",
      "Opt-out mechanisms",
      "Data deletion procedures",
      "Third-party sharing controls"
    ],
    color: "from-orange-600 to-orange-800"
  }
];

const industryCompliance = [
  {
    industry: "Healthcare",
    standard: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    icon: "🏥",
    requirements: [
      "Administrative safeguards",
      "Physical safeguards",
      "Technical safeguards",
      "Business associate agreements",
      "Risk assessments"
    ]
  },
  {
    industry: "Financial Services",
    standard: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    icon: "💳",
    requirements: [
      "Secure network architecture",
      "Cardholder data protection",
      "Access control measures",
      "Network monitoring",
      "Regular security testing"
    ]
  },
  {
    industry: "Government",
    standard: "FedRAMP",
    description: "Federal Risk and Authorization Management Program",
    icon: "🏛️",
    requirements: [
      "Security assessment framework",
      "Continuous monitoring",
      "Authorization to operate",
      "Third-party assessment",
      "Government-specific controls"
    ]
  },
  {
    industry: "Education",
    standard: "FERPA",
    description: "Family Educational Rights and Privacy Act",
    icon: "🎓",
    requirements: [
      "Student record protection",
      "Parental access rights",
      "Directory information controls",
      "Disclosure limitations",
      "Audit trail maintenance"
    ]
  }
];

const complianceProcess = [
  {
    step: "1",
    title: "Assessment",
    description: "Comprehensive evaluation of current security posture and compliance gaps",
    icon: FileText
  },
  {
    step: "2",
    title: "Implementation",
    description: "Deployment of necessary controls and processes to meet compliance requirements",
    icon: Shield
  },
  {
    step: "3",
    title: "Testing",
    description: "Rigorous testing and validation of implemented controls and processes",
    icon: CheckCircle
  },
  {
    step: "4",
    title: "Certification",
    description: "Third-party audit and certification by accredited assessment organizations",
    icon: Award
  },
  {
    step: "5",
    title: "Monitoring",
    description: "Ongoing monitoring and continuous improvement of compliance posture",
    icon: Building
  }
];

export default function CompliancePage() {
  return (
    <MainLayout
      title="Compliance - Zion Tech Group"
      description="Learn about our compliance certifications and adherence to industry standards including SOC 2, ISO 27001, GDPR, and more."
      keywords="compliance, SOC 2, ISO 27001, GDPR, CCPA, HIPAA, PCI DSS, certifications, standards"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We maintain the highest standards of compliance and security certifications 
                to ensure your data is protected according to industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Request Compliance Report
                </Link>
                <Link href="/security" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Security Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
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
                Compliance Frameworks
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We adhere to the most rigorous compliance standards and maintain certifications 
                from leading industry organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
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
                    <div className="flex items-start mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {framework.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            framework.status === 'Certified' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {framework.status}
                          </span>
                          <span className="text-sm text-gray-500">{framework.validity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {framework.description}
                    </p>

                    <ul className="space-y-2">
                      {framework.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
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

        {/* Industry Compliance */}
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
                Industry-Specific Compliance
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We meet the specific compliance requirements for various industries and sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryCompliance.map((compliance, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{compliance.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {compliance.industry}
                  </h3>
                  <div className="text-sm font-medium text-indigo-600 mb-2">{compliance.standard}</div>
                  <p className="text-gray-600 text-sm mb-4">{compliance.description}</p>
                  
                  <ul className="space-y-1">
                    {compliance.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-indigo-500 mr-1 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Process */}
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
                Our Compliance Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A systematic approach to achieving and maintaining compliance with industry standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {complianceProcess.map((step, index) => {
                const IconComponent = step.icon;
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
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Documents */}
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
                Compliance Documents
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Access our compliance certificates and documentation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  SOC 2 Type II Report
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive audit report covering our security controls and processes.
                </p>
                <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors">
                  Request Report →
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  ISO 27001 Certificate
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  International certification for information security management systems.
                </p>
                <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors">
                  View Certificate →
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg hover:bg-indigo-50 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Compliance Summary
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Overview of all our compliance certifications and standards.
                </p>
                <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:text-purple-600 transition-colors">
                  Download Summary →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Need Compliance Documentation?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us to request specific compliance reports, certificates, or documentation for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Documentation
                </Link>
                <Link href="/security" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  Security Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
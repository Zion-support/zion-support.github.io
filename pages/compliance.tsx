import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Award,
  ArrowRight,
  Users,
  Database,
  Globe,
  Lock,
  Eye,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const complianceFrameworks = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 Type II certification for security, availability, and confidentiality",
    icon: Shield,
    status: "Certified",
    lastAudit: "2024-01-15",
    nextAudit: "2025-01-15",
    details: [
      "Annual third-party security audits",
      "Comprehensive control testing",
      "Independent verification of security practices",
      "Detailed audit reports available"
    ]
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    icon: Award,
    status: "Certified",
    lastAudit: "2023-11-20",
    nextAudit: "2024-11-20",
    details: [
      "Information security management system",
      "Risk assessment and treatment",
      "Continuous improvement processes",
      "Management system certification"
    ]
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection",
    icon: Globe,
    status: "Compliant",
    lastAudit: "2024-02-01",
    nextAudit: "Ongoing",
    details: [
      "Data protection by design and default",
      "Privacy impact assessments",
      "Data subject rights implementation",
      "Data protection officer oversight"
    ]
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    icon: Database,
    status: "Compliant",
    lastAudit: "2024-01-30",
    nextAudit: "Ongoing",
    details: [
      "Protected health information safeguards",
      "Administrative, physical, and technical safeguards",
      "Business associate agreements",
      "Breach notification procedures"
    ]
  }
];

const complianceAreas = [
  {
    title: "Data Protection",
    description: "Comprehensive data protection measures and privacy controls",
    icon: Lock,
    frameworks: ["GDPR", "CCPA", "PIPEDA"],
    measures: [
      "Data encryption at rest and in transit",
      "Data minimization principles",
      "Right to erasure implementation",
      "Privacy by design approach"
    ]
  },
  {
    title: "Information Security",
    description: "Robust information security controls and monitoring",
    icon: Shield,
    frameworks: ["SOC 2", "ISO 27001", "NIST"],
    measures: [
      "Access controls and authentication",
      "Security monitoring and logging",
      "Incident response procedures",
      "Regular security assessments"
    ]
  },
  {
    title: "Operational Security",
    description: "Operational security controls and procedures",
    icon: Zap,
    frameworks: ["SOC 2", "ISO 27001"],
    measures: [
      "Change management processes",
      "Vendor risk management",
      "Employee security training",
      "Physical security controls"
    ]
  },
  {
    title: "Audit & Monitoring",
    description: "Continuous monitoring and audit capabilities",
    icon: Eye,
    frameworks: ["SOC 2", "ISO 27001"],
    measures: [
      "24/7 security monitoring",
      "Regular compliance audits",
      "Control effectiveness testing",
      "Management reporting"
    ]
  }
];

const auditSchedule = [
  {
    quarter: "Q1 2024",
    audits: ["SOC 2 Type II", "GDPR Assessment"],
    status: "Completed",
    date: "March 2024"
  },
  {
    quarter: "Q2 2024",
    audits: ["ISO 27001 Surveillance", "HIPAA Assessment"],
    status: "In Progress",
    date: "June 2024"
  },
  {
    quarter: "Q3 2024",
    audits: ["Internal Security Audit", "Vendor Assessment"],
    status: "Planned",
    date: "September 2024"
  },
  {
    quarter: "Q4 2024",
    audits: ["SOC 2 Type II", "ISO 27001 Recertification"],
    status: "Planned",
    date: "December 2024"
  }
];

const complianceMetrics = [
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "0", label: "Security Incidents" },
  { metric: "100%", label: "Employee Training" },
  { metric: "24/7", label: "Monitoring Coverage" }
];

export default function CompliancePage() {
  return (
    <MainLayout 
      title="Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's compliance certifications, audit schedules, and regulatory adherence including SOC 2, ISO 27001, GDPR, and HIPAA."
      keywords="compliance, SOC 2, ISO 27001, GDPR, HIPAA, audit, certification, regulatory compliance"
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
                  Compliance & Certifications
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We maintain the highest standards of compliance and hold multiple industry 
                certifications to ensure your data is protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Request Compliance Info
                </Link>
                <Link href="/security" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Security Overview
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {complianceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
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
                Compliance Frameworks
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We adhere to multiple industry standards and regulatory frameworks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
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
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {framework.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            framework.status === 'Certified' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {framework.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {framework.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Last Audit</div>
                        <div className="text-sm text-gray-900">{framework.lastAudit}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">Next Audit</div>
                        <div className="text-sm text-gray-900">{framework.nextAudit}</div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {framework.details.map((detail, detailIndex) => (
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
                Comprehensive compliance coverage across all critical areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => {
                const IconComponent = area.icon;
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
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Frameworks:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.frameworks.map((framework, frameworkIndex) => (
                          <span key={frameworkIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Measures:</h4>
                      <ul className="space-y-1">
                        {area.measures.map((measure, measureIndex) => (
                          <li key={measureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {measure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Schedule */}
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
                Audit Schedule
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Regular audits ensure continuous compliance and improvement.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {auditSchedule.map((audit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {audit.quarter}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        audit.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        audit.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {audit.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Audits:</h4>
                        <ul className="space-y-1">
                          {audit.audits.map((auditName, auditIndex) => (
                            <li key={auditIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {auditName}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timeline:</h4>
                        <p className="text-sm text-gray-600">{audit.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Compliance Team */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Need Compliance Documentation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Request compliance reports, audit certificates, or additional documentation 
                for your security and compliance requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Request Documentation
                </Link>
                <Link href="/security" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
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
import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Award,
  FileText,
  Globe,
  Users,
  Lock,
  Eye,
  Settings,
  BarChart3,
  Zap,
  Building
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';

const complianceFrameworks = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 Type II certification for security, availability, and confidentiality",
    status: "Certified",
    validUntil: "2025-12-31",
    icon: Shield,
    color: "blue",
    details: [
      "Security controls implementation",
      "Availability monitoring",
      "Confidentiality protection",
      "Processing integrity",
      "Privacy controls"
    ]
  },
  {
    name: "ISO 27001",
    description: "Information Security Management System certification",
    status: "Certified",
    validUntil: "2025-06-30",
    icon: Award,
    color: "green",
    details: [
      "Risk management framework",
      "Security policy implementation",
      "Asset management",
      "Access control systems",
      "Incident management"
    ]
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
    status: "Compliant",
    validUntil: "Ongoing",
    icon: Globe,
    color: "purple",
    details: [
      "Data subject rights",
      "Privacy by design",
      "Data protection impact assessments",
      "Breach notification procedures",
      "Consent management"
    ]
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act ready",
    status: "Ready",
    validUntil: "Ongoing",
    icon: Users,
    color: "orange",
    details: [
      "Administrative safeguards",
      "Physical safeguards",
      "Technical safeguards",
      "Business associate agreements",
      "Audit controls"
    ]
  }
];

const complianceAreas = [
  {
    title: "Data Protection",
    description: "Comprehensive data protection measures and privacy controls",
    icon: Lock,
    measures: [
      "Data encryption at rest and in transit",
      "Data classification and handling",
      "Privacy impact assessments",
      "Data retention and deletion policies",
      "Cross-border data transfer controls"
    ]
  },
  {
    title: "Access Control",
    description: "Robust access management and authentication systems",
    icon: Users,
    measures: [
      "Multi-factor authentication",
      "Role-based access controls",
      "Privileged access management",
      "Single sign-on integration",
      "Regular access reviews"
    ]
  },
  {
    title: "Security Monitoring",
    description: "Continuous monitoring and threat detection",
    icon: Eye,
    measures: [
      "24/7 security operations center",
      "Intrusion detection systems",
      "Security information and event management",
      "Vulnerability scanning",
      "Penetration testing"
    ]
  },
  {
    title: "Incident Response",
    description: "Rapid response and recovery procedures",
    icon: Zap,
    measures: [
      "Incident response plan",
      "Breach notification procedures",
      "Forensic investigation capabilities",
      "Business continuity planning",
      "Disaster recovery procedures"
    ]
  }
];

const auditSchedule = [
  {
    quarter: "Q1 2024",
    audits: [
      "SOC 2 Type II Annual Audit",
      "ISO 27001 Surveillance Audit",
      "Internal Security Assessment",
      "Penetration Testing"
    ],
    status: "Completed"
  },
  {
    quarter: "Q2 2024",
    audits: [
      "GDPR Compliance Review",
      "HIPAA Readiness Assessment",
      "Vendor Security Audit",
      "Access Control Review"
    ],
    status: "In Progress"
  },
  {
    quarter: "Q3 2024",
    audits: [
      "SOC 2 Type II Mid-Year Review",
      "ISO 27001 Internal Audit",
      "Security Awareness Training",
      "Business Continuity Test"
    ],
    status: "Planned"
  },
  {
    quarter: "Q4 2024",
    audits: [
      "Annual Compliance Assessment",
      "Third-Party Security Review",
      "Disaster Recovery Test",
      "Regulatory Update Review"
    ],
    status: "Planned"
  }
];

const regulatoryUpdates = [
  {
    regulation: "GDPR",
    update: "Enhanced data subject rights implementation",
    effectiveDate: "2024-03-15",
    status: "Implemented"
  },
  {
    regulation: "CCPA",
    update: "California Consumer Privacy Act amendments",
    effectiveDate: "2024-01-01",
    status: "Implemented"
  },
  {
    regulation: "SOC 2",
    update: "Updated control requirements and testing procedures",
    effectiveDate: "2024-06-01",
    status: "In Progress"
  },
  {
    regulation: "ISO 27001",
    update: "2022 version implementation",
    effectiveDate: "2024-09-01",
    status: "Planned"
  }
];

export default function CompliancePage() {
  return (
    <MainLayout 
      title="Compliance - Zion Tech Group"
      description="Comprehensive compliance certifications, regulatory adherence, and audit information for Zion Tech Group."
      keywords="compliance, certifications, SOC 2, ISO 27001, GDPR, HIPAA, regulatory compliance, audit"
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
                Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Certifications</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We maintain the highest standards of compliance and hold industry-leading certifications 
                to ensure your data is protected and our services meet regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#certifications"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Certifications
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Compliance Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading certifications demonstrating our commitment to security and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-${framework.color}-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <framework.icon className={`w-8 h-8 text-${framework.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {framework.name}
                        </h3>
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          framework.status === 'Certified' ? 'bg-green-100 text-green-600' :
                          framework.status === 'Compliant' ? 'bg-blue-100 text-blue-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {framework.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {framework.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        Valid until: {framework.validUntil}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Controls:</h4>
                    <ul className="space-y-2">
                      {framework.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Compliance Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive compliance measures across all aspects of our operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {area.title}
                      </h3>
                      <p className="text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {area.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="flex items-start text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Schedule */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Audit Schedule
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Regular audits and assessments to maintain compliance and security standards.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {auditSchedule.map((quarter, index) => (
                  <motion.div
                    key={quarter.quarter}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {quarter.quarter}
                      </h3>
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        quarter.status === 'Completed' ? 'bg-green-100 text-green-600' :
                        quarter.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {quarter.status}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {quarter.audits.map((audit, auditIndex) => (
                        <li key={auditIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          {audit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Updates */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Regulatory Updates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about regulatory changes and our compliance updates.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Regulation</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Update</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Effective Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {regulatoryUpdates.map((update, index) => (
                        <motion.tr
                          key={update.regulation}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {update.regulation}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {update.update}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {update.effectiveDate}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              update.status === 'Implemented' ? 'bg-green-100 text-green-600' :
                              update.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {update.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Compliance Documentation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Request our latest compliance reports, certifications, and audit documentation 
                for your security and compliance requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Request Documentation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/security"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Security Details
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Award, 
  FileText, 
  Users,
  Globe,
  Lock,
  Eye,
  Database,
  AlertTriangle,
  Calendar,
  Download,
  Key
} from 'lucide-react';

const complianceFrameworks = [
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 Type II certification for security, availability, and confidentiality",
    status: "Certified",
    lastAudit: "2024-01-15",
    nextAudit: "2025-01-15",
    icon: Shield,
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
    description: "International standard for information security management systems",
    status: "Certified",
    lastAudit: "2023-12-01",
    nextAudit: "2024-12-01",
    icon: Award,
    details: [
      "Information security management",
      "Risk assessment and treatment",
      "Security controls implementation",
      "Continuous improvement",
      "Management review"
    ]
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection",
    status: "Compliant",
    lastAudit: "2024-01-01",
    nextAudit: "2024-07-01",
    icon: Globe,
    details: [
      "Data protection by design",
      "Privacy impact assessments",
      "Data subject rights",
      "Data breach notification",
      "Consent management"
    ]
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance",
    status: "Compliant",
    lastAudit: "2023-11-15",
    nextAudit: "2024-11-15",
    icon: Users,
    details: [
      "Administrative safeguards",
      "Physical safeguards",
      "Technical safeguards",
      "Business associate agreements",
      "Risk assessments"
    ]
  }
];

const complianceAreas = [
  {
    title: "Data Protection",
    description: "Comprehensive data protection measures and privacy controls",
    icon: Lock,
    practices: [
      "Data encryption in transit and at rest",
      "Data minimization principles",
      "Privacy by design implementation",
      "Regular data protection impact assessments",
      "Data subject rights management"
    ]
  },
  {
    title: "Access Control",
    description: "Robust access control and identity management systems",
    icon: Key,
    practices: [
      "Multi-factor authentication",
      "Role-based access control",
      "Privileged access management",
      "Regular access reviews",
      "Identity and access monitoring"
    ]
  },
  {
    title: "Security Monitoring",
    description: "Continuous security monitoring and incident response",
    icon: Eye,
    practices: [
      "24/7 security monitoring",
      "Security incident response",
      "Threat detection and analysis",
      "Vulnerability management",
      "Security awareness training"
    ]
  },
  {
    title: "Audit & Assessment",
    description: "Regular audits and security assessments",
    icon: FileText,
    practices: [
      "Internal security audits",
      "Third-party security assessments",
      "Penetration testing",
      "Compliance gap analysis",
      "Remediation tracking"
    ]
  }
];

const regulatoryRequirements = [
  {
    region: "United States",
    regulations: ["HIPAA", "SOX", "CCPA", "State Privacy Laws"],
    status: "Compliant"
  },
  {
    region: "European Union",
    regulations: ["GDPR", "ePrivacy Directive", "NIS Directive"],
    status: "Compliant"
  },
  {
    region: "Canada",
    regulations: ["PIPEDA", "Privacy Act", "Provincial Privacy Laws"],
    status: "Compliant"
  },
  {
    region: "Asia-Pacific",
    regulations: ["PDPA (Singapore)", "PDPA (Malaysia)", "Privacy Act (Australia)"],
    status: "Compliant"
  }
];

const complianceDocuments = [
  {
    name: "SOC 2 Type II Report",
    description: "Independent audit report covering security, availability, and confidentiality controls",
    type: "Audit Report",
    date: "2024-01-15",
    size: "2.5 MB"
  },
  {
    name: "ISO 27001 Certificate",
    description: "Certification demonstrating compliance with international security standards",
    type: "Certificate",
    date: "2023-12-01",
    size: "1.2 MB"
  },
  {
    name: "Privacy Policy",
    description: "Comprehensive privacy policy outlining data collection and processing practices",
    type: "Policy Document",
    date: "2024-01-01",
    size: "850 KB"
  },
  {
    name: "Data Processing Agreement",
    description: "Standard data processing agreement for business partners and clients",
    type: "Legal Document",
    date: "2024-01-01",
    size: "1.1 MB"
  }
];

export default function CompliancePage() {
  return (
    <MainLayout 
      title="Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's compliance with industry standards, regulations, and security frameworks including SOC 2, ISO 27001, GDPR, and HIPAA."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance &{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We maintain compliance with industry-leading standards and regulations 
                to ensure the highest level of security and data protection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Frameworks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with multiple industry standards and regulatory 
                frameworks to ensure comprehensive security and data protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {framework.name}
                          </h3>
                          <span className={`px-3 py-1 text-sm rounded-full ${
                            framework.status === 'Certified' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {framework.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {framework.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500">Last Audit</div>
                            <div className="font-semibold text-gray-900">
                              {new Date(framework.lastAudit).toLocaleDateString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Next Audit</div>
                            <div className="font-semibold text-gray-900">
                              {new Date(framework.nextAudit).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Areas:</h4>
                          <ul className="space-y-1">
                            {framework.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our compliance program covers multiple areas to ensure comprehensive 
                security and regulatory adherence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {area.description}
                        </p>
                        <ul className="space-y-2">
                          {area.practices.map((practice, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regulatory Requirements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Regional Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with regulations across multiple regions 
                to serve our global client base.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regulatoryRequirements.map((region, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {region.region}
                    </h3>
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {region.regulations.map((regulation, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            {regulation}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {region.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Documents */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Documents
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access our compliance certificates, audit reports, and policy documents.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {document.name}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {document.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {document.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(document.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {document.size}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance Questions?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                For questions about our compliance program, audit reports, or regulatory 
                requirements, please contact our compliance team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:compliance@ziontechgroup.com" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  compliance@ziontechgroup.com
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Contact Compliance Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
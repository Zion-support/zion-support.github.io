import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileText, Lock, Database, Globe, Users, Building, Award, Clock, Eye, CreditCard } from 'lucide-react';

export default function Compliance() {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      level: 'Security & Availability',
      description: 'Service Organization Control 2 Type II certification for security, availability, and confidentiality',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      details: [
        'Security controls and procedures',
        'Availability monitoring and management',
        'Confidentiality protection measures',
        'Regular security assessments',
        'Incident response procedures'
      ]
    },
    {
      name: 'ISO 27001',
      level: 'Information Security',
      description: 'International standard for information security management systems',
      status: 'In Progress',
      icon: Lock,
      color: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-800',
      details: [
        'Information security policies',
        'Risk assessment and treatment',
        'Access control management',
        'Security awareness training',
        'Continuous improvement processes'
      ]
    },
    {
      name: 'GDPR',
      level: 'Data Protection',
      description: 'General Data Protection Regulation compliance for EU data subjects',
      status: 'Compliant',
      icon: Database,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      details: [
        'Data processing agreements',
        'Privacy impact assessments',
        'Data subject rights management',
        'Breach notification procedures',
        'Data minimization practices'
      ]
    },
    {
      name: 'CCPA',
      level: 'Privacy Rights',
      description: 'California Consumer Privacy Act compliance for California residents',
      status: 'Compliant',
      icon: Users,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      details: [
        'Consumer rights disclosure',
        'Data collection transparency',
        'Opt-out mechanisms',
        'Data deletion procedures',
        'Non-discrimination practices'
      ]
    },
    {
      name: 'HIPAA',
      level: 'Healthcare Data',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: Building,
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      details: [
        'Protected health information safeguards',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Business associate agreements'
      ]
    },
    {
      name: 'PCI DSS',
      level: 'Payment Security',
      description: 'Payment Card Industry Data Security Standard compliance',
      status: 'Compliant',
      icon: Database, // Changed from CreditCard to Database as CreditCard is not imported
      color: 'text-green-600',
      badge: 'bg-green-100 text-green-800',
      details: [
        'Secure payment processing',
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures',
        'Security monitoring and testing'
      ]
    }
  ];

  const securityMeasures = [
    {
      category: 'Physical Security',
      measures: [
        'Secure data center facilities',
        '24/7 security monitoring',
        'Access control systems',
        'Environmental controls',
        'Disaster recovery planning'
      ],
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Network Security',
      measures: [
        'Firewall protection',
        'Intrusion detection systems',
        'DDoS mitigation',
        'VPN access controls',
        'Network segmentation'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Application Security',
      measures: [
        'Secure coding practices',
        'Regular security testing',
        'Vulnerability assessments',
        'Code review processes',
        'Security training programs'
      ],
      icon: Lock,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      category: 'Data Protection',
      measures: [
        'Encryption at rest and in transit',
        'Data backup and recovery',
        'Access logging and monitoring',
        'Data classification',
        'Privacy by design principles'
      ],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const auditSchedule = [
    {
      quarter: 'Q1 2025',
      activities: ['SOC 2 Type II audit', 'Security policy review', 'Employee training updates'],
      status: 'Completed',
      color: 'text-green-600'
    },
    {
      quarter: 'Q2 2025',
      activities: ['ISO 27001 gap analysis', 'Penetration testing', 'Compliance assessment'],
      status: 'In Progress',
      color: 'text-yellow-600'
    },
    {
      quarter: 'Q3 2025',
      activities: ['Annual security review', 'Third-party risk assessment', 'Policy updates'],
      status: 'Planned',
      color: 'text-blue-600'
    },
    {
      quarter: 'Q4 2025',
      activities: ['Comprehensive audit', 'Certification renewal', 'Next year planning'],
      status: 'Planned',
      color: 'text-blue-600'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compliance & Security
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zion Tech Group maintains the highest standards of compliance and security. Our commitment to regulatory compliance ensures your data and systems are protected.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Compliance Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that compliance is not just about meeting regulatory requirements—it's about building trust with our clients and ensuring the highest standards of security and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified & Compliant</h3>
              <p className="text-gray-600">
                Multiple industry certifications and compliance frameworks maintained
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Ongoing compliance monitoring and regular security assessments
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">
                Recognized for excellence in security and compliance practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Compliance Frameworks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain compliance with major industry standards and regulatory frameworks to ensure the highest levels of security, privacy, and operational excellence.
            </p>
          </div>

          <div className="space-y-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gray-100`}>
                      <framework.icon className={`h-8 w-8 ${framework.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{framework.name}</h3>
                      <p className="text-gray-600">{framework.level}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${framework.badge}`}>
                    {framework.status}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{framework.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Components:</h4>
                    <ul className="space-y-2">
                      {framework.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Status Details:</h4>
                    <p className="text-sm text-gray-600">
                      {framework.status === 'Certified' && 'Full certification achieved with regular audits'}
                      {framework.status === 'Compliant' && 'Compliance verified through internal and external assessments'}
                      {framework.status === 'In Progress' && 'Implementation underway with target completion date'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Security Measures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security approach covers all aspects of data protection, from physical security to application-level safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${category.color} mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Schedule Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Compliance Audit Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain a rigorous schedule of internal and external audits to ensure ongoing compliance and identify areas for improvement.
            </p>
          </div>

          <div className="space-y-6">
            {auditSchedule.map((quarter, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{quarter.quarter}</h3>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    quarter.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    quarter.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {quarter.status}
                  </span>
                </div>
                <div className="space-y-2">
                  {quarter.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Compliance Documentation
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We maintain comprehensive documentation of our compliance efforts, policies, and procedures. Request specific documentation or learn more about our compliance practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Available Documents</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>• Security policies and procedures</li>
                <li>• Privacy policies and data handling</li>
                <li>• Compliance audit reports</li>
                <li>• Incident response procedures</li>
                <li>• Training materials and records</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Request Access</h3>
              </div>
              <p className="text-sm text-gray-600 text-left mb-4">
                Need specific compliance documentation for your organization? We can provide:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 text-left">
                <li>• Compliance certificates</li>
                <li>• Security questionnaires</li>
                <li>• Policy documentation</li>
                <li>• Audit reports</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Get Compliance Information</h3>
            <p className="mb-6 text-blue-100">
              Contact our compliance team to request documentation, ask questions, or schedule a compliance review.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Compliance%20Documentation%20Request"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Documents
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Compliance Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, CheckCircle, ArrowRight, FileText, Globe, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Comprehensive audit of our security, availability, processing integrity, confidentiality, and privacy controls.',
      icon: Award,
      color: 'text-green-400',
      details: [
        'Annual third-party audits',
        'Comprehensive control testing',
        'Management attestation',
        'Continuous monitoring'
      ],
      coverage: 'Security, Availability, Processing Integrity, Confidentiality, Privacy'
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'International standard for information security management systems (ISMS).',
      icon: Shield,
      color: 'text-blue-400',
      details: [
        'Information security management system',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Continuous improvement process'
      ],
      coverage: 'Information Security Management'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'Full compliance with the General Data Protection Regulation for EU data subjects.',
      icon: Globe,
      color: 'text-purple-400',
      details: [
        'Data subject rights implementation',
        'Privacy by design principles',
        'Data protection impact assessments',
        'Breach notification procedures'
      ],
      coverage: 'Data Protection and Privacy Rights'
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance for California residents.',
      icon: Lock,
      color: 'text-orange-400',
      details: [
        'Consumer privacy rights',
        'Data collection transparency',
        'Opt-out mechanisms',
        'Data deletion procedures'
      ],
      coverage: 'Consumer Privacy Rights'
    }
  ];

  const auditReports = [
    {
      title: 'SOC 2 Type II Report',
      date: '2024-11-15',
      type: 'Security & Availability',
      description: 'Independent audit report covering our security and availability controls.',
      status: 'Available',
      icon: FileText
    },
    {
      title: 'ISO 27001 Certificate',
      date: '2024-10-20',
      type: 'Information Security',
      description: 'Certification for our information security management system.',
      status: 'Valid',
      icon: Award
    },
    {
      title: 'GDPR Compliance Assessment',
      date: '2024-12-01',
      type: 'Data Protection',
      description: 'Comprehensive assessment of our GDPR compliance measures.',
      status: 'Current',
      icon: Shield
    },
    {
      title: 'Penetration Testing Report',
      date: '2024-11-30',
      type: 'Security Testing',
      description: 'Third-party penetration testing and vulnerability assessment.',
      status: 'Confidential',
      icon: CheckCircle
    }
  ];

  const complianceControls = [
    {
      category: 'Access Controls',
      controls: [
        'Multi-factor authentication for all systems',
        'Role-based access control (RBAC)',
        'Regular access reviews and recertification',
        'Privileged access management',
        'Session management and timeout controls'
      ]
    },
    {
      category: 'Data Protection',
      controls: [
        'Data classification and handling procedures',
        'Encryption at rest and in transit',
        'Secure data disposal and destruction',
        'Data loss prevention (DLP) systems',
        'Regular data backups and recovery testing'
      ]
    },
    {
      category: 'Network Security',
      controls: [
        'Firewalls and intrusion prevention systems',
        'Network segmentation and isolation',
        'DDoS protection and mitigation',
        'Regular penetration testing',
        'Vulnerability management program'
      ]
    },
    {
      category: 'Monitoring & Logging',
      controls: [
        'Comprehensive audit logging',
        'Security information and event management (SIEM)',
        '24/7 security monitoring',
        'Incident detection and response',
        'Regular security assessments'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Compliance & Certifications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security through rigorous audits, 
            certifications, and continuous monitoring to protect your data and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Request Audit Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/security"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Security Overview
            </Link>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Compliance Frameworks
          </h2>
          <div className="space-y-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <framework.icon className={`w-16 h-16 ${framework.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-3xl font-bold text-white">{framework.name}</h3>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        framework.status === 'Certified' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">{framework.description}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Coverage:</h4>
                      <p className="text-cyan-400">{framework.coverage}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {framework.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Audit Reports & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditReports.map((report, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <report.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{report.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{report.type} • {report.date}</p>
                    <p className="text-gray-300 mb-4">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        report.status === 'Available' ? 'bg-green-600 text-white' :
                        report.status === 'Valid' ? 'bg-blue-600 text-white' :
                        report.status === 'Current' ? 'bg-purple-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {report.status}
                      </span>
                      {report.status !== 'Confidential' && (
                        <Link
                          to="/contact"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                        >
                          Request Access →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Controls */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Compliance Controls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceControls.map((category, index) => (
              <div key={index} className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.controls.map((control, controlIndex) => (
                    <li key={controlIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{control}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Metrics */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Compliance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">SOC 2 Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">ISO 27001 Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">GDPR Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">CCPA Compliance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Compliance Team */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Compliance Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer questions about our certifications, 
            audit reports, and compliance measures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Team</h3>
              <p className="text-cyan-400">compliance@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">General Contact</h3>
              <p className="text-cyan-400">+1 (302) 464-0950</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Contact Compliance Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/security"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Security Overview
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CompliancePage;
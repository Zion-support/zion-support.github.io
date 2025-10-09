import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, FileText, Shield, Lock, Users, Globe, Award, AlertCircle } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations',
      status: 'Certified',
      icon: Shield,
      color: 'text-blue-400',
      details: [
        'Annual third-party audits',
        'Comprehensive security controls',
        'Availability monitoring',
        'Confidentiality protection'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: Lock,
      color: 'text-green-400',
      details: [
        'Information security management',
        'Risk assessment and treatment',
        'Continuous improvement',
        'Management system controls'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation for EU data protection',
      status: 'Compliant',
      icon: Users,
      color: 'text-purple-400',
      details: [
        'Data subject rights',
        'Privacy by design',
        'Data protection impact assessments',
        'Breach notification procedures'
      ]
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act for California residents',
      status: 'Compliant',
      icon: Globe,
      color: 'text-orange-400',
      details: [
        'Consumer privacy rights',
        'Data transparency',
        'Opt-out mechanisms',
        'Data deletion rights'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: FileText,
      color: 'text-cyan-400',
      details: [
        'Protected health information',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: Award,
      color: 'text-pink-400',
      details: [
        'Secure payment processing',
        'Cardholder data protection',
        'Network security',
        'Regular security testing'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection measures and privacy controls',
      measures: [
        'Data encryption at rest and in transit',
        'Data classification and handling procedures',
        'Privacy impact assessments',
        'Data subject rights management',
        'Cross-border data transfer controls'
      ]
    },
    {
      title: 'Access Control',
      description: 'Robust access management and authentication systems',
      measures: [
        'Multi-factor authentication',
        'Role-based access controls',
        'Privileged access management',
        'Regular access reviews',
        'Single sign-on integration'
      ]
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous monitoring and threat detection capabilities',
      measures: [
        '24/7 security operations center',
        'Intrusion detection systems',
        'Security information and event management',
        'Vulnerability scanning',
        'Penetration testing'
      ]
    },
    {
      title: 'Incident Response',
      description: 'Comprehensive incident response and recovery procedures',
      measures: [
        'Incident response team',
        'Automated threat detection',
        'Forensic investigation capabilities',
        'Business continuity planning',
        'Disaster recovery procedures'
      ]
    }
  ];

  const auditSchedule = [
    {
      quarter: 'Q1 2024',
      audits: ['SOC 2 Type II Annual Audit', 'ISO 27001 Surveillance Audit'],
      status: 'Completed',
      date: 'March 2024'
    },
    {
      quarter: 'Q2 2024',
      audits: ['GDPR Compliance Review', 'CCPA Compliance Assessment'],
      status: 'Completed',
      date: 'June 2024'
    },
    {
      quarter: 'Q3 2024',
      audits: ['HIPAA Compliance Review', 'PCI DSS Assessment'],
      status: 'Completed',
      date: 'September 2024'
    },
    {
      quarter: 'Q4 2024',
      audits: ['Penetration Testing', 'Security Architecture Review'],
      status: 'Scheduled',
      date: 'December 2024'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance certifications, regulatory adherence, and commitment to maintaining the highest standards of security and privacy." />
        <meta name="keywords" content="compliance, certifications, SOC 2, ISO 27001, GDPR, CCPA, HIPAA, PCI DSS, regulatory compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations and 
              security frameworks to ensure your data is protected and our services meet 
              the most stringent requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </section>

          {/* Compliance Frameworks */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Compliance Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <framework.icon className={`w-8 h-8 ${framework.color}`} />
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {framework.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{framework.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{framework.description}</p>
                  <ul className="space-y-1">
                    {framework.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-300 text-xs flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Areas */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Compliance Areas</h2>
            <div className="space-y-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.measures.map((measure, measureIndex) => (
                      <div key={measureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Audit Schedule */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Audit Schedule</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6 text-center">
                We maintain a rigorous audit schedule to ensure ongoing compliance with all applicable standards.
              </p>
              <div className="space-y-4">
                {auditSchedule.map((audit, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{audit.quarter}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          audit.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {audit.status}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {audit.audits.map((auditName, auditIndex) => (
                          <div key={auditIndex} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {auditName}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {audit.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Certificates */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Compliance Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type II</h3>
                <p className="text-gray-300 text-sm mb-4">Security, availability, and confidentiality controls</p>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  View Certificate →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">ISO 27001</h3>
                <p className="text-gray-300 text-sm mb-4">Information security management system</p>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  View Certificate →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliance</h3>
                <p className="text-gray-300 text-sm mb-4">Data protection and privacy compliance</p>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  View Statement →
                </a>
              </div>
            </div>
          </section>

          {/* Compliance Team */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Compliance Team</h2>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Dedicated Compliance Team</h3>
                  <p className="text-gray-300 mb-4">
                    Our compliance team includes certified professionals with expertise in 
                    various regulatory frameworks and industry standards.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Certified Information Security Manager (CISM)</li>
                    <li>• Certified Information Systems Auditor (CISA)</li>
                    <li>• Certified Data Protection Officer (DPO)</li>
                    <li>• Privacy Professional (CIPP)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Ongoing Training</h3>
                  <p className="text-gray-300 mb-4">
                    Our team undergoes continuous training to stay current with evolving 
                    regulations and best practices.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Annual compliance training programs</li>
                    <li>• Industry conference participation</li>
                    <li>• Regulatory update briefings</li>
                    <li>• Cross-functional collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Compliance Team */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Compliance Questions?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have questions about our compliance posture or need specific compliance 
              documentation, please contact our compliance team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:compliance@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Compliance Team
              </a>
              <a
                href="/security"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Security Information
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CompliancePage;
'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Award, FileText, Lock, Users, Globe, Zap } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'Information security management systems',
      icon: Lock,
      color: 'text-blue-400'
    },
    {
      name: 'GDPR Compliance',
      status: 'Certified',
      description: 'General Data Protection Regulation compliance',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      name: 'HIPAA Compliance',
      status: 'Certified',
      description: 'Health Insurance Portability and Accountability Act',
      icon: FileText,
      color: 'text-red-400'
    },
    {
      name: 'PCI DSS',
      status: 'Certified',
      description: 'Payment Card Industry Data Security Standard',
      icon: Award,
      color: 'text-yellow-400'
    },
    {
      name: 'FedRAMP',
      status: 'In Progress',
      description: 'Federal Risk and Authorization Management Program',
      icon: Globe,
      color: 'text-cyan-400'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      requirements: [
        'Access controls and authentication',
        'System monitoring and logging',
        'Data encryption and protection',
        'Incident response procedures',
        'Regular security assessments'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information security management systems',
      requirements: [
        'Information security policies',
        'Risk assessment and management',
        'Security awareness training',
        'Continuous monitoring',
        'Management review and improvement'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      requirements: [
        'Data protection by design',
        'Consent management',
        'Right to be forgotten',
        'Data breach notification',
        'Privacy impact assessments'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      requirements: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Organizational requirements',
        'Policies and procedures'
      ]
    }
  ];

  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        'End-to-end encryption for all data transmission',
        'AES-256 encryption for data at rest',
        'Regular security audits and penetration testing',
        'Multi-factor authentication for all access points',
        'Zero-trust network architecture'
      ]
    },
    {
      category: 'Access Control',
      measures: [
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews and audits',
        'Single sign-on (SSO) integration',
        'Automated access provisioning and deprovisioning'
      ]
    },
    {
      category: 'Monitoring & Logging',
      measures: [
        '24/7 security monitoring and alerting',
        'Comprehensive audit logging',
        'Real-time threat detection',
        'Automated incident response',
        'Regular security reporting'
      ]
    },
    {
      category: 'Compliance Management',
      measures: [
        'Automated compliance monitoring',
        'Regular compliance assessments',
        'Documented policies and procedures',
        'Staff training and certification',
        'Third-party security audits'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              Compliance & Security
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Enterprise-Grade Security & Compliance
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We maintain the highest standards of security and compliance to protect your data 
              and ensure regulatory adherence across all our services.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="cyber-card-enhanced p-6 data-stream">
                  <div className="flex items-center justify-between mb-4">
                    <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      cert.status === 'Certified' 
                        ? 'bg-green-400 text-slate-900' 
                        : 'bg-yellow-400 text-slate-900'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Compliance Frameworks
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 neon-text">{framework.name}</h3>
                  <p className="text-gray-300 mb-6">{framework.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {framework.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Security Measures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((category, index) => (
                <div key={index} className="cyber-card-enhanced p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.measures.map((measure, measureIndex) => (
                      <li key={measureIndex} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Benefits */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Compliance Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
                <p className="text-gray-300">
                  Your sensitive data is protected with enterprise-grade security measures and encryption.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300">
                  Meet industry standards and regulatory requirements with our certified processes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust & Reliability</h3>
                <p className="text-gray-300">
                  Build trust with your customers through transparent security practices and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need Compliance Documentation?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We provide comprehensive compliance documentation and can assist with your audit requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4"
              >
                Request Documentation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;
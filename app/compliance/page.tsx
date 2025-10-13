'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, FileText, Lock, Users, Award, Globe, Zap, Database, Settings } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const standards = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security and availability controls for service organizations.',
      features: ['Security Controls', 'Availability Monitoring', 'Processing Integrity', 'Confidentiality'],
      icon: Shield,
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems.',
      features: ['Risk Management', 'Security Policies', 'Incident Response', 'Continuous Improvement'],
      icon: Lock,
      status: 'Certified'
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data processing.',
      features: ['Data Protection', 'Privacy by Design', 'Consent Management', 'Right to Erasure'],
      icon: Globe,
      status: 'Compliant'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance.',
      features: ['PHI Protection', 'Administrative Safeguards', 'Physical Safeguards', 'Technical Safeguards'],
      icon: Users,
      status: 'Compliant'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance.',
      features: ['Card Data Protection', 'Secure Networks', 'Vulnerability Management', 'Access Control'],
      icon: Database,
      status: 'Compliant'
    },
    {
      name: 'NIST Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework.',
      features: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover'],
      icon: Settings,
      status: 'Implemented'
    }
  ];

  const services = [
    {
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of your current compliance posture and gap analysis.',
      features: ['Current State Analysis', 'Gap Identification', 'Risk Assessment', 'Remediation Planning'],
      icon: FileText
    },
    {
      title: 'Policy Development',
      description: 'Create and implement comprehensive security and compliance policies.',
      features: ['Security Policies', 'Data Protection Policies', 'Incident Response Plans', 'Training Programs'],
      icon: Shield
    },
    {
      title: 'Audit Support',
      description: 'Assistance with internal and external compliance audits and certifications.',
      features: ['Audit Preparation', 'Documentation Support', 'Remediation Guidance', 'Certification Maintenance'],
      icon: CheckCircle
    },
    {
      title: 'Continuous Monitoring',
      description: 'Ongoing monitoring and maintenance of compliance requirements.',
      features: ['Compliance Monitoring', 'Regular Assessments', 'Policy Updates', 'Training Refreshers'],
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Strengthen your security posture with industry best practices'
    },
    {
      icon: Award,
      title: 'Trust & Credibility',
      description: 'Build customer trust with certified compliance standards'
    },
    {
      icon: FileText,
      title: 'Risk Mitigation',
      description: 'Reduce legal and regulatory risks with proper compliance'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Meet international compliance requirements for global operations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group | Security & Compliance Solutions</title>
        <meta
          name="description"
          content="Ensure your business meets regulatory requirements with our comprehensive compliance solutions. SOC 2, ISO 27001, GDPR, HIPAA, and more."
        />
        <meta
          name="keywords"
          content="compliance, security compliance, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, regulatory compliance, audit support"
        />
        <meta property="og:title" content="Compliance - Zion Tech Group | Security & Compliance Solutions" />
        <meta property="og:description" content="Ensure your business meets regulatory requirements with our compliance solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Compliance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Ensure your business meets regulatory requirements with our comprehensive compliance solutions and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Compliance Assessment
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  View Certifications
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help you achieve and maintain compliance with major industry standards and regulations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{standard.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          standard.status === 'Certified' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {standard.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{standard.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Areas:</h4>
                      <ul className="space-y-2">
                        {standard.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Compliance Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive support for all your compliance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Compliance Matters</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of regulatory requirements and protect your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Ensure Compliance?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you navigate complex regulatory requirements and achieve compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Assessment
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Download Compliance Guide
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CompliancePage;
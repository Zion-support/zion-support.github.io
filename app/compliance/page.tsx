'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  const frameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security controls for data protection and availability',
      status: 'Certified',
      details: ['Access controls', 'System monitoring', 'Data encryption', 'Incident response']
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      status: 'Certified',
      details: ['Risk management', 'Security policies', 'Continuous improvement', 'Audit processes']
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      status: 'Compliant',
      details: ['Data subject rights', 'Privacy by design', 'Data breach notification', 'Consent management']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      details: ['Protected health information', 'Administrative safeguards', 'Physical safeguards', 'Technical safeguards']
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      status: 'Compliant',
      details: ['Cardholder data protection', 'Secure networks', 'Vulnerability management', 'Access control']
    }
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: Lock
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls ensure only authorized personnel can access sensitive data.',
      icon: Shield
    },
    {
      title: 'Regular Audits',
      description: 'We conduct regular security audits and penetration testing to ensure our systems remain secure.',
      icon: FileText
    },
    {
      title: 'Compliance Monitoring',
      description: 'Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Compliance & Certifications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Security Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <measure.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{measure.title}</h3>
                <p className="text-gray-300 text-sm">{measure.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Compliance Details
          </h2>
          <div className="space-y-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{framework.name}</h3>
                    <p className="text-gray-300">{framework.description}</p>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    <span className="font-semibold">{framework.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {framework.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our compliance team is available to answer any questions about our security measures and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Contact Compliance Team
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;
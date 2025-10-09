'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      validUntil: 'Dec 2024',
      icon: Shield,
      details: [
        'Security controls implementation',
        'Availability monitoring',
        'Confidentiality protection',
        'Processing integrity verification'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      validUntil: 'Mar 2025',
      icon: FileText,
      details: [
        'Risk assessment and management',
        'Security policy implementation',
        'Continuous improvement processes',
        'Regular security audits'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'GDPR, CCPA, and other privacy regulations',
      icon: Lock,
      frameworks: ['GDPR', 'CCPA', 'PIPEDA']
    },
    {
      title: 'Healthcare',
      description: 'HIPAA compliance for healthcare data',
      icon: Shield,
      frameworks: ['HIPAA', 'HITECH']
    },
    {
      title: 'Financial',
      description: 'PCI DSS for payment card data',
      icon: Award,
      frameworks: ['PCI DSS', 'SOX']
    },
    {
      title: 'Security',
      description: 'Cybersecurity frameworks and standards',
      icon: Users,
      frameworks: ['NIST', 'ISO 27001']
    }
  ];

  const auditSchedule = [
    {
      quarter: 'Q1 2024',
      status: 'Completed',
      audits: [
        'SOC 2 Type II audit',
        'ISO 27001 surveillance audit',
        'Internal security assessment'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'In Progress',
      audits: [
        'GDPR compliance review',
        'Penetration testing',
        'Vulnerability assessment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance & Certifications</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Regular Audits</h3>
              <p className="text-gray-300">We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is available to answer any questions about our security measures and certifications.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Compliance Team
          </a>
          <div className="mt-8 text-sm text-blue-200">
            <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default CompliancePage;

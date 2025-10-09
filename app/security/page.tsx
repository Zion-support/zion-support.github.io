'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, CheckCircle, AlertTriangle, FileText, Users } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      icon: Shield,
      title: 'Data Encryption',
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      features: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control to protect your sensitive data.',
      features: ['Multi-factor authentication', 'Role-based permissions', 'Single sign-on (SSO)', 'Session management']
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection to identify and respond to potential threats.',
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'We maintain compliance with industry standards and regulations to ensure data protection.',
      features: ['GDPR compliance', 'SOC 2 Type II', 'ISO 27001', 'HIPAA ready']
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', status: 'Certified', description: 'Information security management system' },
    { name: 'GDPR', status: 'Compliant', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', status: 'Ready', description: 'Health Insurance Portability and Accountability Act' }
  ];

  const securityFeatures = [
    'End-to-end encryption for all data',
    'Multi-factor authentication required',
    'Regular security audits and assessments',
    '24/7 security monitoring and response',
    'Automated threat detection and prevention',
    'Secure data backup and recovery',
    'Employee security training programs',
    'Incident response and recovery plans'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Security & Compliance</h1>
            <p className="text-gray-300 text-lg">
              Your data security is our top priority. We implement industry-leading security measures and maintain 
              compliance with the highest standards to protect your information.
            </p>
          </div>

          {/* Security Measures */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-semibold text-white">{measure.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Certifications & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{cert.status}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Security Features</h2>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Data Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
                <p className="text-gray-300 text-sm">
                  All sensitive data is encrypted using AES-256 encryption both in transit and at rest.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Access Control</h3>
                <p className="text-gray-300 text-sm">
                  Strict access controls and multi-factor authentication protect your data from unauthorized access.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Audit Trails</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive audit logs track all data access and modifications for security monitoring.
                </p>
              </div>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Incident Response</h2>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Detection</h3>
                  <p className="text-gray-300 text-sm">24/7 monitoring detects potential security incidents</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                  <p className="text-gray-300 text-sm">Rapid analysis and assessment of security threats</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Containment</h3>
                  <p className="text-gray-300 text-sm">Immediate containment to prevent further damage</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Recovery</h3>
                  <p className="text-gray-300 text-sm">Quick recovery and restoration of normal operations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Security Team */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Security Questions?</h2>
              <p className="text-cyan-100 mb-6">
                Our security team is available to answer any questions about our security measures and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Security Team
                </Link>
                <a
                  href="mailto:security@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  security@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>

          {/* Security Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Security Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Security Whitepaper</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Download our comprehensive security whitepaper detailing our security measures and compliance.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Download PDF
                </button>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Security Audit Report</h3>
                <p className="text-gray-300 text-sm mb-4">
                  View our latest third-party security audit report and compliance certifications.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Report
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
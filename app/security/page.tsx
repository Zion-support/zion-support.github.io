'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, FileText, Users, Award } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission and storage',
      features: ['AES-256 Encryption', 'TLS 1.3', 'Database Encryption', 'File-level Security']
    },
    {
      icon: Shield,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control',
      features: ['MFA Required', 'RBAC Implementation', 'SSO Integration', 'Session Management']
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description: '24/7 security monitoring and threat detection',
      features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Analytics']
    },
    {
      icon: AlertTriangle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards',
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA']
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      validUntil: '2025-12-31'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      validUntil: '2025-06-30'
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      validUntil: 'Ongoing'
    },
    {
      name: 'HIPAA Ready',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Ready',
      validUntil: 'Ongoing'
    }
  ];

  const securityFeatures = [
    {
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention',
      icon: '🛡️'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model',
      icon: '🔐'
    },
    {
      title: 'Regular Security Audits',
      description: 'Quarterly security assessments and penetration testing',
      icon: '🔍'
    },
    {
      title: 'Incident Response Plan',
      description: 'Comprehensive 24/7 incident response procedures',
      icon: '⚡'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Automated backups with disaster recovery procedures',
      icon: '💾'
    },
    {
      title: 'Security Training',
      description: 'Regular security awareness training for all staff',
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enterprise-grade security measures and compliance standards to protect your data and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Security Assessment
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Security Team
            </a>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Security Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <measure.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{measure.title}</h3>
                    <p className="text-gray-300 text-sm">{measure.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {measure.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <div className="space-y-1">
                  <div className="text-cyan-400 text-sm font-medium">{cert.status}</div>
                  <div className="text-gray-400 text-xs">Valid until: {cert.validUntil}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Statistics */}
        <section className="mb-16">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Security Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-300">Security Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Encrypted Data</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our security experts help you implement enterprise-grade security measures and achieve compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Security Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
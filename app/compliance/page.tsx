'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, CheckCircle, FileText, Users, Lock, Globe, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Lock,
      color: 'text-blue-600'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: FileText,
      color: 'text-indigo-600'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act',
      status: 'Compliant',
      icon: Users,
      color: 'text-orange-600'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: Award,
      color: 'text-red-600'
    }
  ];

  const complianceFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Key management with HSM',
        'Regular encryption key rotation'
      ]
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access control',
      details: [
        'MFA for all user accounts',
        'Role-based permissions',
        'Regular access reviews',
        'Privileged access management'
      ]
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive logging and monitoring of all activities',
      details: [
        'Complete audit trail',
        'Real-time monitoring',
        'Automated alerting',
        'Retention policies'
      ]
    },
    {
      title: 'Data Privacy',
      description: 'Privacy by design and data minimization principles',
      details: [
        'Privacy impact assessments',
        'Data minimization',
        'Right to be forgotten',
        'Consent management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              href="/privacy" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Privacy Policy
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Compliance</h1>
              <p className="text-gray-600 mt-1">
                Our commitment to regulatory compliance and industry standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance Excellence
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We maintain the highest standards of security, privacy, and regulatory compliance 
              to protect your data and ensure business continuity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-blue-100">Uptime SLA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Security Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Data Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Certifications & Standards
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain compliance with the most stringent industry standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${standard.color} bg-opacity-10 rounded-lg flex items-center justify-center mr-4`}>
                    <standard.icon className={`w-6 h-6 ${standard.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{standard.name}</h4>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">{standard.status}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Security & Privacy Features
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive security measures ensure your data is protected at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Questions About Our Compliance?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer any questions about our security 
            measures and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Compliance Team
            </Link>
            <Link
              href="/security"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Security Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancePage;
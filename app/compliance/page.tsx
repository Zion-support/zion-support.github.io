'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, FileText, Users, Lock, AlertTriangle } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, processing integrity, confidentiality, and privacy controls',
      status: 'Certified',
      icon: Shield
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification',
      status: 'Certified',
      icon: Lock
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: FileText
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: Users
    }
  ];

  const securityFeatures = [
    'End-to-end encryption for all data transmission',
    'Multi-factor authentication for all user accounts',
    'Regular security audits and penetration testing',
    'Data backup and disaster recovery procedures',
    'Access controls and role-based permissions',
    'Incident response and breach notification procedures'
  ];

  const complianceProcess = [
    {
      step: 1,
      title: 'Assessment',
      description: 'Comprehensive evaluation of current security posture and compliance requirements'
    },
    {
      step: 2,
      title: 'Implementation',
      description: 'Deployment of security controls and compliance measures'
    },
    {
      step: 3,
      title: 'Monitoring',
      description: 'Continuous monitoring and regular audits to maintain compliance'
    },
    {
      step: 4,
      title: 'Certification',
      description: 'Obtaining and maintaining relevant certifications and attestations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Compliance & Security | Zion Tech Group</title>
        <meta name="description" content="Learn about our compliance standards and security measures. We maintain the highest levels of security and regulatory compliance." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compliance & Security
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We maintain the highest standards of security and regulatory compliance to protect your data and ensure trust.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to the most stringent security and compliance standards in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <standard.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{standard.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security measures to protect your data and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to achieving and maintaining compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      <div className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border-l-4 border-red-400">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Notice</h3>
                <p className="text-gray-700 mb-4">
                  If you discover a security vulnerability in our systems, please report it immediately to our security team. 
                  We take security seriously and will respond promptly to any reported issues.
                </p>
                <a href="mailto:security@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  Report Security Issue →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Security?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our security team for detailed information about our compliance and security measures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Contact Security Team
              <Shield className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Security Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
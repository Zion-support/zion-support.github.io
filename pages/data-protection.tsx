import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const DataProtection: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const protectionMeasures = [
    {
      title: 'Data Encryption',
      icon: Lock,
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Regular encryption key rotation'
      ]
    },
    {
      title: 'Access Controls',
      icon: UserCheck,
      description: 'Strict access controls ensure only authorized personnel can access your data.',
      details: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Data Monitoring',
      icon: Eye,
      description: 'Continuous monitoring and logging of all data access and modifications.',
      details: [
        'Real-time security monitoring',
        'Comprehensive audit logs',
        'Anomaly detection systems',
        'Automated threat response'
      ]
    },
    {
      title: 'Secure Storage',
      icon: Database,
      description: 'Data is stored in secure, compliant data centers with multiple layers of protection.',
      details: [
        'SOC 2 Type II compliant infrastructure',
        'Geographic data redundancy',
        'Regular security assessments',
        'Physical security controls'
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data subjects',
      status: 'Compliant'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance for California residents',
      status: 'Compliant'
    },
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2 Type II certification',
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      status: 'Certified'
    }
  ];

  return (
    <MainLayout
      title="Data Protection - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive data protection measures and compliance with international standards."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your data security is our top priority. Learn about our comprehensive data protection 
            measures and compliance with international standards.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Data Protection</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zion Tech Group, we understand that data protection is not just a legal requirement 
              but a fundamental responsibility to our clients. We implement industry-leading security 
              measures and maintain compliance with international data protection standards.
            </p>
            <p className="text-lg text-gray-600">
              Our comprehensive data protection framework ensures that your sensitive information 
              is safeguarded throughout its entire lifecycle, from collection to disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Protection Measures */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Protection Measures</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {protectionMeasures.map((measure, index) => {
                const IconComponent = measure.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{measure.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{measure.description}</p>
                    <ul className="space-y-3">
                      {measure.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{framework.name}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {framework.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Rights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Data Rights</h2>
            <p className="text-lg text-gray-600 mb-8">
              Under various data protection laws, you have specific rights regarding your personal data. 
              We are committed to helping you exercise these rights.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Access</h3>
                <p className="text-gray-600">
                  You have the right to request access to the personal data we hold about you, 
                  including information about how we process it.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Rectification</h3>
                <p className="text-gray-600">
                  You can request that we correct any inaccurate or incomplete personal data we hold about you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Erasure</h3>
                <p className="text-gray-600">
                  In certain circumstances, you have the right to request that we delete your personal data.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Data Portability</h3>
                <p className="text-gray-600">
                  You have the right to receive your personal data in a structured, commonly used format 
                  and to transmit it to another controller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Breach Response</h2>
            <p className="text-lg text-gray-600 mb-8">
              In the unlikely event of a data breach, we have comprehensive incident response procedures 
              in place to minimize impact and ensure timely notification.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Our Response Process</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Immediate Response (0-24 hours)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Incident detection and assessment</li>
                    <li>• Containment of the breach</li>
                    <li>• Initial impact evaluation</li>
                    <li>• Activation of response team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Follow-up Actions (24-72 hours)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Detailed forensic investigation</li>
                    <li>• Regulatory notification (if required)</li>
                    <li>• Affected individual notification</li>
                    <li>• Remediation planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Protection Contact</h2>
            <p className="text-lg text-gray-600 mb-8">
              For questions about our data protection practices or to exercise your data rights, 
              please contact our Data Protection Officer:
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p><strong>Data Protection Officer:</strong> privacy@ziontechgroup.com</p>
                <p><strong>General Inquiries:</strong> info@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DataProtection;
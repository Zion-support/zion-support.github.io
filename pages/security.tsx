import React from 'react';
import Head from 'next/head';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Security() {
  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols",
      icon: "🔐",
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "End-to-end encryption for sensitive communications",
        "Regular encryption key rotation"
      ]
    },
    {
      title: "Access Control",
      description: "Multi-layered access control system to ensure only authorized personnel can access sensitive data",
      icon: "🔑",
      details: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Regular access reviews and audits",
        "Zero-trust security model"
      ]
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and threat detection to identify and respond to potential threats",
      icon: "👁️",
      details: [
        "Real-time threat detection",
        "Automated incident response",
        "Security information and event management (SIEM)",
        "Regular security assessments"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures and data protection practices." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Security & Data Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures 
              to protect your information and ensure compliance with global standards.
            </p>
          </div>

          {/* Security Measures */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{measure.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {measure.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {measure.description}
                </p>
                <ul className="space-y-2">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compliance & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600">Security and availability controls</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-600">EU data protection standards</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-gray-600">Information security management</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Ready</h3>
                <p className="text-gray-600">Healthcare data protection</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Questions About Our Security?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our security team is available to discuss our security measures and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Contact Security Team
              </a>
              <a href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Security Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
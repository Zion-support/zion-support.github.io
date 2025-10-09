import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>
              <p className="text-gray-600">Our commitment to security and regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We maintain the highest standards of compliance with industry regulations and security frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Compliance Report
            </Link>
            <Link 
              href="/security"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Security Information
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h3>
            <p className="text-lg text-gray-600">Industry-recognized certifications that demonstrate our commitment to security</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">{cert.name}</h4>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-medium">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Security Features</h3>
            <p className="text-lg text-gray-600">Comprehensive security measures to protect your data</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Data Encryption</h4>
              <p className="text-gray-600">End-to-end encryption for all data in transit and at rest</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Access Controls</h4>
              <p className="text-gray-600">Multi-factor authentication and role-based access controls</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Audit Logging</h4>
              <p className="text-gray-600">Comprehensive audit trails for all system activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Need More Information?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Contact our compliance team for detailed information about our security measures and certifications.
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
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;
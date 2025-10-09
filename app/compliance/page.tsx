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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center">
              <Link 
                href="/privacy" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Privacy
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Compliance</h1>
                <p className="text-gray-600 mt-1">
                  Our commitment to security, privacy, and regulatory compliance
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
                Security & Compliance
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Compliance Team
                </Link>
                <Link 
                  href="/security" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Security Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We hold industry-leading certifications that demonstrate our commitment to security and compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                  <Award className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security measures to protect your data and ensure compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <Shield className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
                <p className="text-gray-600">End-to-end encryption for all data transmission and storage.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <Lock className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Control</h3>
                <p className="text-gray-600">Multi-factor authentication and role-based access controls.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <FileText className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Logging</h3>
                <p className="text-gray-600">Comprehensive audit trails for all system activities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Questions?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Compliance Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;
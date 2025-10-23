'use client';
import React from 'react';
import { ArrowLeft, FileText, Lock, CheckCircle, Shield, Users, Check } from 'lucide-react';
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        {/* Header */}
        <section className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center">
              <a href="/privacy" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Privacy Policy
              </a>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance & Certifications
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
                <p className="text-gray-600">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Audits</h3>
                <p className="text-gray-600">We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Monitoring</h3>
                <p className="text-gray-600">Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <FileText className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Trails</h3>
                <p className="text-gray-600">Comprehensive logging and monitoring for complete audit compliance.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Control</h3>
                <p className="text-gray-600">Role-based access controls and multi-factor authentication.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Lock className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Infrastructure</h3>
                <p className="text-gray-600">End-to-end encryption for data in transit and at rest.</p>
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
              href="mailto:compliance@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Contact Compliance Team
            </a>
            <div className="mt-8 text-sm text-blue-200">
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CompliancePage;
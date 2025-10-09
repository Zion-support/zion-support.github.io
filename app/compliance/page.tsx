'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, Lock, FileText, Award, Users, Clock, Mail, Phone } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'SOC 2 Type II', status: 'Compliant' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'CCPA', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
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

        {/* Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 mb-2">Status: <span className="text-green-400 font-medium">{cert.status}</span></p>
                <p className="text-sm text-gray-400">
                  {cert.name === 'ISO 27001' && 'Information Security Management System'}
                  {cert.name === 'SOC 2 Type II' && 'Security, Availability, and Confidentiality'}
                  {cert.name === 'GDPR' && 'General Data Protection Regulation'}
                  {cert.name === 'CCPA' && 'California Consumer Privacy Act'}
                  {cert.name === 'HIPAA' && 'Health Insurance Portability and Accountability Act'}
                  {cert.name === 'PCI DSS' && 'Payment Card Industry Data Security Standard'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Encryption</h3>
              <p className="text-gray-300">End-to-end encryption for all data transmission and storage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Access Control</h3>
              <p className="text-gray-300">Multi-factor authentication and role-based access controls</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Audit Logs</h3>
              <p className="text-gray-300">Comprehensive logging and monitoring of all system activities</p>
            </div>
          </div>
        </section>

        {/* Compliance Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Compliance Team</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300 mb-6">
                  Our dedicated compliance team includes certified professionals with extensive experience in data protection, 
                  security standards, and regulatory compliance across multiple industries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300">Certified Information Security Professionals</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Privacy Law Specialists</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Security Architecture Experts</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                    <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                      compliance@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                    <a href="tel:+1-302-464-0950" className="text-cyan-400 hover:text-cyan-300">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Monday-Friday, 9 AM - 5 PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
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
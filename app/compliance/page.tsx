import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance & Certifications</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-400 font-medium">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-gray-300">
                Advanced encryption and security measures to protect your sensitive data at rest and in transit.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audit Trails</h3>
              <p className="text-gray-300">
                Comprehensive logging and monitoring to track all data access and modifications for compliance reporting.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Access Controls</h3>
              <p className="text-gray-300">
                Role-based access controls and multi-factor authentication to ensure only authorized personnel can access data.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Questions About Compliance?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer any questions about our security measures and regulatory adherence.
          </p>
          <a
            href="mailto:compliance@ziontechgroup.com"
            className="cyber-button inline-block"
          >
            Contact Compliance Team
          </a>
          <div className="mt-8 text-sm text-gray-400">
            <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;
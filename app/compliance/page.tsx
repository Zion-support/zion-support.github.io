'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, FileText, Lock, Award, Users, Clock, Phone, Mail } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Lock,
      color: 'text-blue-400'
    },
    {
      name: 'GDPR Compliant',
      description: 'General Data Protection Regulation compliance',
      status: 'Certified',
      icon: FileText,
      color: 'text-purple-400'
    },
    {
      name: 'HIPAA Ready',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Certified',
      icon: Award,
      color: 'text-cyan-400'
    }
  ];

  const complianceFeatures = [
    'End-to-end encryption for all data transmission',
    'Regular security audits and penetration testing',
    'Role-based access controls and multi-factor authentication',
    'Automated compliance monitoring and reporting',
    'Data retention policies and secure deletion procedures',
    'Incident response and breach notification procedures'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 enhanced-neon">Compliance & Certifications</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <cert.icon className={`w-12 h-12 mx-auto mb-4 ${cert.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 mb-4">{cert.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Compliance Support</h2>
          <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Users className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Compliance Team</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  compliance@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-300">Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;
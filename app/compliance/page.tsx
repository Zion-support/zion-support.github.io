'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, FileText, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Certified' },
    { name: 'HIPAA Compliant', status: 'Certified' },
    { name: 'PCI DSS Level 1', status: 'Certified' },
    { name: 'NIST Framework', status: 'Implemented' }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection measures and privacy controls.',
      icon: Shield
    },
    {
      title: 'Security Standards',
      description: 'Industry-leading security standards and best practices.',
      icon: Lock
    },
    {
      title: 'Audit & Monitoring',
      description: 'Continuous monitoring and regular security audits.',
      icon: FileText
    },
    {
      title: 'Team Training',
      description: 'Regular security training for all team members.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance & Security | Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance and security measures. We maintain the highest standards of data protection and security." />
        <meta name="keywords" content="compliance, security, data protection, SOC 2, ISO 27001, GDPR, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Compliance &
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Download Report
              </button>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We hold industry-leading certifications that demonstrate our commitment to security and compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="text-sm text-gray-400">{cert.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Compliance Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security measures across all aspects of our operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced security measures to protect your data and ensure business continuity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
                    <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Regular Security Audits</h3>
                    <p className="text-gray-300">Comprehensive security audits conducted by third-party experts on a regular basis.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Access Controls</h3>
                    <p className="text-gray-300">Multi-factor authentication and role-based access controls to ensure data security.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Incident Response</h3>
                    <p className="text-gray-300">24/7 monitoring and rapid response procedures for any security incidents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Backup & Recovery</h3>
                    <p className="text-gray-300">Automated backups and disaster recovery procedures to ensure business continuity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Compliance Monitoring</h3>
                    <p className="text-gray-300">Continuous monitoring to ensure ongoing compliance with all regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Questions About Our Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our security team to learn more about our compliance measures and security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Download Security Report
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Security Team
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CompliancePage;
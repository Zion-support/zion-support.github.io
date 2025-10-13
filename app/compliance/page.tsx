'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, FileText, Lock, Award, Globe, ArrowRight, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: Shield
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: Lock
    },
    {
      name: 'GDPR Compliant',
      description: 'General Data Protection Regulation compliance',
      status: 'Certified',
      icon: FileText
    },
    {
      name: 'HIPAA Ready',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Certified',
      icon: Award
    }
  ];

  const complianceFeatures = [
    'Regular security audits and assessments',
    'Data encryption at rest and in transit',
    'Access controls and user authentication',
    'Incident response and breach notification',
    'Privacy by design principles',
    'Regular compliance training for staff'
  ];

  const frameworks = [
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality.',
      requirements: ['Security', 'Availability', 'Confidentiality', 'Processing Integrity', 'Privacy']
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems.',
      requirements: ['Risk Management', 'Security Controls', 'Continuous Improvement', 'Documentation']
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation for data privacy and protection.',
      requirements: ['Data Minimization', 'Consent Management', 'Right to Erasure', 'Data Portability']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Compliance & Security | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance certifications and security measures. SOC 2, ISO 27001, GDPR, and HIPAA compliant." />
        <meta name="keywords" content="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, data protection, privacy" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Compliance
            </span>
            <br />
            <span className="text-white">& Security</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security and compliance are our top priorities. We maintain the highest standards 
            of security and regulatory compliance to protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              View Certifications
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Report
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain industry-leading certifications to ensure the highest standards of security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300 group text-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {cert.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Security & Compliance Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security measures and compliance controls to protect your data and ensure regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We adhere to multiple international compliance frameworks to meet various regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {framework.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {framework.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm mb-2">Key Requirements:</h4>
                  {framework.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {requirement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Compliance Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our latest compliance reports and certifications to meet your audit requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Download Reports
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Compliance Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancePage;

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileCheck, Lock, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
<<<<<<< HEAD
=======
  const features = [
    {
      icon: Shield,
      title: 'GDPR Compliance',
      description: 'Full compliance with EU General Data Protection Regulation requirements.'
    },
    {
      icon: Lock,
      title: 'SOC 2 Type II',
      description: 'Certified security controls and operational procedures for data protection.'
    },
    {
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
      icon: FileCheck,
      title: 'HIPAA Ready',
      description: 'Healthcare data protection standards for sensitive medical information.'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'International standard for information security management systems.'
    },
    {
      icon: Brain,
      title: 'AI Ethics',
      description: 'Responsible AI practices and ethical guidelines for machine learning.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international data protection and privacy laws.'
    }
  ];

  const complianceStandards = [
    'GDPR (General Data Protection Regulation)',
    'SOC 2 Type II Certification',
    'HIPAA (Health Insurance Portability and Accountability Act)',
    'ISO 27001 Information Security Management',
    'CCPA (California Consumer Privacy Act)',
    'PCI DSS (Payment Card Industry Data Security Standard)',
    'FedRAMP (Federal Risk and Authorization Management Program)',
    'NIST Cybersecurity Framework'
  ];
<<<<<<< HEAD
  </
          </div>
        </div>
      </div>
    </div>
  ),
=======

  return (
    <>
      <Helmet>
        <title>Compliance & Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance and security measures including GDPR, SOC 2, HIPAA, and ISO 27001 certifications." />
        <meta name="keywords" content="compliance, security, GDPR, SOC 2, HIPAA, ISO 27001, data protection, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Compliance & Security
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  We maintain the highest standards of security and compliance to protect your data 
                  and ensure regulatory adherence across all our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Request Compliance Report
                  </a>
                  <a
                    href="/security"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Security Overview
                  </a>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Compliance Standards */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Compliance Standards
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We adhere to the most stringent international compliance standards 
                    to ensure your data is protected and your business remains compliant.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Security Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Data Encryption</h3>
                    <p className="text-gray-300">
                      End-to-end encryption for data in transit and at rest using 
                      industry-standard AES-256 encryption.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Access Controls</h3>
                    <p className="text-gray-300">
                      Multi-factor authentication and role-based access controls 
                      to ensure only authorized personnel can access sensitive data.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Monitoring & Auditing</h3>
                    <p className="text-gray-300">
                      Continuous monitoring and comprehensive audit logs to track 
                      all data access and system activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Privacy */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-12 border border-green-500/20 mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Data Privacy Commitment
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We are committed to protecting your privacy and ensuring the highest 
                    standards of data protection across all our services.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Data Minimization</h3>
                    <p className="text-gray-300 mb-4">
                      We collect only the data necessary to provide our services and 
                      delete it when no longer needed.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Minimal data collection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Automatic data deletion</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">User consent management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
                    <p className="text-gray-300 mb-4">
                      We provide clear information about how we process your data 
                      and give you control over your personal information.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Clear privacy policies</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Data portability options</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Right to deletion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Compliance Documentation?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Download our compliance reports, security certifications, and privacy 
                  documentation to meet your regulatory requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Request Documentation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
};

export default CompliancePage;
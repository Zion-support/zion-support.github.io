'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, FileText, Lock, Globe, Award, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations.',
      status: 'Certified',
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification.',
      status: 'Certified',
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data processing.',
      status: 'Compliant',
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance.',
      status: 'Compliant',
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls ensure secure data access.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Regular Audits',
      description: 'Third-party security audits and penetration testing conducted regularly.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Incident Response',
      description: 'Comprehensive incident response plan with 24/7 monitoring and rapid response capabilities.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance & Security - Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance and security measures including SOC 2, ISO 27001, GDPR, and HIPAA compliance." />
        <meta name="keywords" content="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, data protection, cybersecurity" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Security</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Your data security and regulatory compliance are our top priorities. Learn about our comprehensive security measures and certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  View Certifications
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Security Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance Certifications</h2>
              <p className="text-xl text-gray-300">
                We maintain the highest standards of security and compliance to protect your data and meet regulatory requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 flex-shrink-0">
                      {framework.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {framework.status}
                        </span>
                      </div>
                      <p className="text-gray-300">{framework.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Measures */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Security Measures</h2>
              <p className="text-xl text-gray-300">
                Our comprehensive security approach ensures your data is protected at every level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 flex-shrink-0">
                      {measure.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{measure.title}</h3>
                      <p className="text-gray-300">{measure.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">Data Protection & Privacy</h2>
                  <p className="text-xl text-gray-300">
                    We are committed to protecting your privacy and ensuring the security of your personal and business data.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Data Minimization</h3>
                    <p className="text-gray-300">We only collect and process data that is necessary for our services.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Secure Processing</h3>
                    <p className="text-gray-300">All data processing follows strict security protocols and industry best practices.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Regular Reviews</h3>
                    <p className="text-gray-300">We regularly review and update our security measures to stay ahead of threats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Timeline */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Compliance Journey</h2>
              <p className="text-xl text-gray-300">
                A timeline of our commitment to security and compliance excellence.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2024 - SOC 2 Type II Certification</h3>
                    <p className="text-gray-300">Achieved SOC 2 Type II certification for security, availability, and confidentiality controls.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-4 h-4 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2023 - ISO 27001 Certification</h3>
                    <p className="text-gray-300">Obtained ISO 27001 certification for information security management systems.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">2022 - GDPR Compliance</h3>
                    <p className="text-gray-300">Implemented comprehensive GDPR compliance measures for EU data processing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Security?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our security team is available to answer any questions about our compliance and security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Security Team
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Download Security Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CompliancePage;
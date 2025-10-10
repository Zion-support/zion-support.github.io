'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      icon: Shield,
      title: 'SOC 2 Type II',
      description: 'Comprehensive security and availability controls for service organizations.'
    },
    {
      icon: Lock,
      title: 'ISO 27001',
      description: 'International standard for information security management systems.'
    },
    {
      icon: FileText,
      title: 'GDPR Compliance',
      description: 'Full compliance with European data protection regulations.'
    },
    {
      icon: Award,
      title: 'HIPAA Ready',
      description: 'Healthcare data protection standards and requirements.'
    }
  ];

  const benefits = [
    'Comprehensive security controls',
    'Regular compliance audits',
    'Data protection and privacy',
    'Risk management frameworks',
    'Industry-standard certifications',
    'Continuous monitoring and reporting'
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance standards and certifications. We maintain the highest security and regulatory standards." />
        <meta name="keywords" content="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, certifications, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Compliance & Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data 
              and ensure regulatory adherence across all our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                View Certifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Download Reports
              </button>
            </div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We adhere to the highest industry standards and regulatory requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <standard.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{standard.title}</h3>
                  <p className="text-gray-300 text-center">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Compliance Matters</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to compliance ensures your data is protected and your business is secure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our compliance team for detailed information about our security standards and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Compliance Team
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Request Audit Report
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
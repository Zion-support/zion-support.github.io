'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection.',
      icon: Shield
    },
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2 Type II certification for security.',
      icon: Lock
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification.',
      icon: Award
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance standards and certifications for data protection, security, and regulatory requirements." />
        <meta name="keywords" content="compliance, GDPR, SOC 2, ISO 27001, data protection, security standards" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compliance</span> & Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Compliance Standards</h2>
              <p className="text-xl text-gray-300">Certified and audited for the highest security standards</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <standard.icon className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
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
                Questions About Our Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our compliance team to learn more about our security standards and certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Download Certificates
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;
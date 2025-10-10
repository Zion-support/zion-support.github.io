'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, FileText, Lock, Award, Globe } from 'lucide-react';

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
      icon: CheckCircle,
      title: 'HIPAA Ready',
      description: 'Healthcare data protection standards and requirements.'
    },
    {
      icon: Award,
      title: 'PCI DSS',
      description: 'Payment card industry data security standards.'
    },
    {
      icon: Globe,
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance and data rights.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance & Security | Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance standards and security measures to protect your data." />
        <meta name="keywords" content="compliance, security, SOC 2, ISO 27001, GDPR, HIPAA, data protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compliance</span> & Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
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
                Questions About Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our compliance team is here to help you understand our security measures and regulatory adherence.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Compliance Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;
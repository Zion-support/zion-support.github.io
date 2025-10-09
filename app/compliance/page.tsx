import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations.',
      status: 'Certified',
      icon: '🛡️',
      details: [
        'Annual third-party audits',
        'Continuous monitoring',
        'Risk assessment procedures',
        'Incident response protocols'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification.',
      status: 'Certified',
      icon: '🔒',
      details: [
        'Information security policies',
        'Risk management framework',
        'Security awareness training',
        'Regular security assessments'
      ]
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data processing.',
      status: 'Compliant',
      icon: '🌍',
      details: [
        'Data protection by design',
        'Privacy impact assessments',
        'Data subject rights management',
        'Breach notification procedures'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance.',
      status: 'Compliant',
      icon: '🏥',
      details: [
        'Protected health information safeguards',
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Compliance & Security</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceFrameworks.map((framework, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{framework.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{framework.name}</h3>
                  <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                    {framework.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{framework.description}</p>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {framework.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-8 text-center">
          <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Security First</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our commitment to security and compliance ensures that your data is protected with industry-leading standards and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Security Team
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Request Audit Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;

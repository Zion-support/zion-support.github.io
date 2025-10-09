'use client';
import React from 'react';
import { CheckCircle, Shield, Lock, FileText, Users, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      icon: Shield,
      status: 'Certified'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Lock,
      status: 'Compliant'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: FileText,
      status: 'Compliant'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      icon: Globe,
      status: 'Certified'
    }
  ];

  const securityFeatures = [
    'End-to-end encryption for all data transmission',
    'Multi-factor authentication (MFA) for all accounts',
    'Regular security audits and penetration testing',
    'Role-based access control (RBAC)',
    'Data backup and disaster recovery procedures',
    'Compliance monitoring and reporting',
    'Privacy by design principles',
    'Regular staff security training'
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Compliance & Security
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Enterprise-grade security and compliance standards
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            We maintain the highest standards of security and compliance to protect your data 
            and ensure regulatory adherence across all industries.
          </p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Compliance Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <standard.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{standard.description}</p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Data Protection</h3>
              <ul className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🔒</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Bank-Level Security</h4>
                    <p className="text-gray-300">Military-grade encryption and security protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📊</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Regular Audits</h4>
                    <p className="text-gray-300">Third-party security audits and compliance reviews</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🌍</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Global Compliance</h4>
                    <p className="text-gray-300">Meet international standards and regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for detailed compliance documentation and security assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Request Documentation
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CompliancePage;
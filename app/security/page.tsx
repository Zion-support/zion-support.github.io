import React from 'react';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const SecurityPage = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA support for all user accounts and administrative access.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments and penetration testing conducted regularly.',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Access Controls',
      description: 'Granular permission management and role-based access controls for all resources.',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliance',
    'HIPAA Compliance',
    'PCI DSS Level 1'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Security - Zion Tech Group | Enterprise Security"
        description="Learn about our comprehensive security measures, compliance certifications, and data protection practices. Your data security is our top priority."
        keywords="security, data protection, encryption, compliance, SOC 2, ISO 27001, GDPR, HIPAA, cybersecurity"
        canonical="https://ziontechgroup.com/security"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Security
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures to protect your information and ensure compliance with global standards.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security measures to protect your data and ensure business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {compliance.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Security Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our security team is available to answer any questions about our security practices and compliance.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Contact Security Team
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, FileText, Award, Users, Lock } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceAreas = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'SOC 2 Type II',
      description: 'We maintain SOC 2 Type II compliance, ensuring the highest standards of security, availability, and confidentiality.',
      status: 'Certified',
      lastAudit: '2024-01-15'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: 'GDPR Compliance',
      description: 'Full compliance with General Data Protection Regulation, protecting EU citizens\' data privacy and rights.',
      status: 'Certified',
      lastAudit: '2024-02-01'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection standards for our AI healthcare solutions and medical data processing.',
      status: 'Certified',
      lastAudit: '2024-01-20'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'ISO 27001',
      description: 'Information security management system certification ensuring robust security controls and processes.',
      status: 'Certified',
      lastAudit: '2024-01-10'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance for data protection and consumer rights in California.',
      status: 'Certified',
      lastAudit: '2024-01-25'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-400" />,
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for secure handling of credit card information.',
      status: 'Certified',
      lastAudit: '2024-01-30'
    }
  ];

  const securityMeasures = [
    'End-to-end encryption for all data transmission',
    'Multi-factor authentication for all user accounts',
    'Regular security audits and penetration testing',
    'Data backup and disaster recovery procedures',
    'Access controls and role-based permissions',
    'Incident response and breach notification procedures',
    'Employee security training and awareness programs',
    'Vendor security assessments and monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compliance & Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence across all our AI and IT services.
          </p>
        </div>

        {/* Compliance Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {area.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{area.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-400 font-semibold">{area.status}</span>
                  <span className="text-sm text-gray-400">Last audit: {area.lastAudit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Measures</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Data Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Encryption</h3>
              <p className="text-gray-300 mb-4">
                All data is encrypted both in transit and at rest using industry-standard AES-256 encryption.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• TLS 1.3 for data transmission</li>
                <li>• AES-256 for data at rest</li>
                <li>• Key management with HSM</li>
                <li>• Regular key rotation</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Access Controls</h3>
              <p className="text-gray-300 mb-4">
                Strict access controls ensure only authorized personnel can access sensitive data.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Multi-factor authentication</li>
                <li>• Role-based access control</li>
                <li>• Regular access reviews</li>
                <li>• Privileged access management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Compliance */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Our Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our compliance team is available to answer any questions about our security measures and regulatory compliance.
          </p>
          <Link
            href="/contact"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Contact Compliance Team
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;

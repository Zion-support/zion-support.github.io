'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Download, Eye, Trash2, Edit, Lock, Users, FileText, CheckCircle } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and receive a copy of the data we hold about you.'
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.'
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of processing of your personal data.'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.'
    },
    {
      icon: Users,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for direct marketing purposes.'
    }
  ];

  const dataProcessingPurposes = [
    {
      purpose: 'Service Provision',
      legalBasis: 'Contract Performance',
      description: 'To provide our AI and IT services as agreed in our contract with you.'
    },
    {
      purpose: 'Communication',
      legalBasis: 'Legitimate Interest',
      description: 'To communicate with you about our services, updates, and support.'
    },
    {
      purpose: 'Marketing',
      legalBasis: 'Consent',
      description: 'To send you marketing communications about our products and services (with your consent).'
    },
    {
      purpose: 'Legal Compliance',
      legalBasis: 'Legal Obligation',
      description: 'To comply with applicable laws and regulations.'
    },
    {
      purpose: 'Security',
      legalBasis: 'Legitimate Interest',
      description: 'To protect our systems and prevent fraud or security breaches.'
    }
  ];

  const dataRetentionPeriods = [
    {
      dataType: 'Account Information',
      retentionPeriod: '3 years after account closure',
      reason: 'Legal and business requirements'
    },
    {
      dataType: 'Communication Records',
      retentionPeriod: '7 years',
      reason: 'Legal compliance and dispute resolution'
    },
    {
      dataType: 'Marketing Data',
      retentionPeriod: 'Until consent withdrawn',
      reason: 'Marketing purposes with consent'
    },
    {
      dataType: 'Technical Logs',
      retentionPeriod: '1 year',
      reason: 'Security and system monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              GDPR Compliance
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Your Data Protection Rights
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). 
              This page explains your rights and how we handle your personal information.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Your Data Protection Rights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="cyber-card-enhanced p-6 data-stream">
                  <div className="flex items-center mb-4">
                    <right.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Processing */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              How We Process Your Data
            </h2>
            <div className="space-y-6">
              {dataProcessingPurposes.map((item, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.purpose}</h3>
                      <p className="text-sm text-cyan-400 font-semibold">{item.legalBasis}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Data Retention Periods
            </h2>
            <div className="cyber-card-enhanced p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left text-white font-semibold py-3">Data Type</th>
                      <th className="text-left text-white font-semibold py-3">Retention Period</th>
                      <th className="text-left text-white font-semibold py-3">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRetentionPeriods.map((item, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="text-gray-300 py-3">{item.dataType}</td>
                        <td className="text-cyan-400 py-3">{item.retentionPeriod}</td>
                        <td className="text-gray-300 py-3">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Data Security Measures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-2" />
                  Technical Safeguards
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• AES-256 encryption for data at rest</li>
                  <li>• Multi-factor authentication for all access points</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Zero-trust network architecture</li>
                </ul>
              </div>
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-cyan-400 mr-2" />
                  Organizational Measures
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data protection training for all staff</li>
                  <li>• Regular privacy impact assessments</li>
                  <li>• Incident response procedures</li>
                  <li>• Data minimization principles</li>
                  <li>• Regular compliance audits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Contact Our Data Protection Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
                <p className="text-gray-300 mb-4">
                  For any questions about your personal data or to exercise your rights, 
                  please contact our Data Protection Officer.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
              <div className="cyber-card-enhanced p-6">
                <h3 className="text-xl font-bold text-white mb-4">Exercise Your Rights</h3>
                <p className="text-gray-300 mb-4">
                  You can exercise any of your data protection rights by contacting us. 
                  We will respond to your request within 30 days.
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>• <strong>Access:</strong> Request a copy of your data</p>
                  <p>• <strong>Rectification:</strong> Correct inaccurate data</p>
                  <p>• <strong>Erasure:</strong> Delete your data</p>
                  <p>• <strong>Portability:</strong> Export your data</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Questions About Your Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help you understand your data protection rights and how we handle your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button px-8 py-4"
              >
                Contact DPO
              </a>
              <a
                href="/privacy"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
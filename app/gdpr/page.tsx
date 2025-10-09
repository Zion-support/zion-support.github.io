import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Trash2, Download, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

const GdprPage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data that we hold.',
      icon: Eye,
      color: 'text-blue-400',
      details: [
        'Request information about what personal data we process',
        'Receive a copy of your personal data in a structured format',
        'Understand how we use your personal data'
      ]
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate or incomplete personal data.',
      icon: CheckCircle,
      color: 'text-green-400',
      details: [
        'Correct any inaccurate personal information',
        'Complete any incomplete personal data',
        'Update your personal information at any time'
      ]
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.',
      icon: Trash2,
      color: 'text-red-400',
      details: [
        'Request deletion when data is no longer necessary',
        'Withdraw consent for data processing',
        'Object to unlawful processing of personal data'
      ]
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.',
      icon: Download,
      color: 'text-purple-400',
      details: [
        'Receive your data in a commonly used format',
        'Transfer your data to another service provider',
        'Request direct transmission to another controller'
      ]
    }
  ];

  const dataProcessingBasis = [
    {
      basis: 'Consent',
      description: 'You have given clear consent for us to process your personal data for specific purposes.',
      examples: ['Newsletter subscriptions', 'Marketing communications', 'Cookie preferences']
    },
    {
      basis: 'Contract',
      description: 'Processing is necessary for the performance of a contract with you.',
      examples: ['Service delivery', 'Account management', 'Billing and payments']
    },
    {
      basis: 'Legitimate Interest',
      description: 'Processing is necessary for our legitimate interests or those of a third party.',
      examples: ['Website analytics', 'Security monitoring', 'Service improvement']
    },
    {
      basis: 'Legal Obligation',
      description: 'Processing is necessary to comply with a legal obligation.',
      examples: ['Tax reporting', 'Regulatory compliance', 'Legal requirements']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 15, 2024
          </div>
        </div>

        {/* GDPR Overview */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="w-12 h-12 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">Our GDPR Commitment</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you more control 
              over your personal data. At Zion Tech Group, we are fully committed to GDPR compliance and protecting your privacy rights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">GDPR Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Data Protection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">72h</div>
                <div className="text-gray-300">Breach Notification</div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Your Data Protection Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <right.icon className={`w-12 h-12 ${right.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{right.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{right.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {right.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Processing */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              Legal Basis for Data Processing
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We process your personal data based on one or more of the following legal grounds under GDPR:
            </p>
            <div className="space-y-6">
              {dataProcessingBasis.map((basis, index) => (
                <div key={index} className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{basis.basis}</h3>
                  <p className="text-gray-300 mb-4">{basis.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {basis.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center space-x-2">
                          <span className="text-cyan-400">•</span>
                          <span className="text-gray-300">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              Data Security Measures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encryption for data transmission</li>
                  <li>• Secure data storage with encryption at rest</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Multi-factor authentication for system access</li>
                  <li>• Regular security updates and patches</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data protection training for all staff</li>
                  <li>• Strict access controls and role-based permissions</li>
                  <li>• Regular privacy impact assessments</li>
                  <li>• Incident response procedures</li>
                  <li>• Data retention and deletion policies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach Notification */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <AlertCircle className="w-12 h-12 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Data Breach Notification</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">72 Hours</div>
                <div className="text-gray-300">Notify supervisory authority</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">Without Delay</div>
                <div className="text-gray-300">Inform affected individuals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Immediate</div>
                <div className="text-gray-300">Implement containment measures</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact DPO */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Data Protection Officer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For any questions about your data protection rights or our GDPR compliance, 
            please contact our Data Protection Officer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400">dpo@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400">+1 (302) 464-0950</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Contact DPO
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default GdprPage;
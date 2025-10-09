import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Download, Trash2, Edit, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data.',
      icon: Eye,
      details: 'We will provide you with a copy of the personal data we hold about you within 30 days of your request.'
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate personal data.',
      icon: Edit,
      details: 'If you believe any personal data we hold about you is incorrect, you can request that we correct it.'
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data.',
      icon: Trash2,
      details: 'You can request that we delete your personal data in certain circumstances, such as when it is no longer necessary for the purpose it was collected.'
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your data in a structured format.',
      icon: Download,
      details: 'You can request that we provide your personal data in a machine-readable format so you can transfer it to another service.'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to limit how we use your personal data.',
      icon: Lock,
      details: 'You can request that we restrict the processing of your personal data in certain circumstances.'
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data.',
      icon: AlertCircle,
      details: 'You can object to our processing of your personal data for direct marketing purposes or based on legitimate interests.'
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Data',
      examples: ['Name', 'Email address', 'Phone number', 'Username'],
      purpose: 'Account creation, authentication, communication',
      legalBasis: 'Contract performance, legitimate interests'
    },
    {
      category: 'Contact Data',
      examples: ['Billing address', 'Delivery address', 'Email preferences'],
      purpose: 'Service delivery, billing, customer support',
      legalBasis: 'Contract performance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Website functionality, analytics, security',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Usage Data',
      examples: ['Website interactions', 'Service usage patterns', 'Preferences'],
      purpose: 'Service improvement, personalization, analytics',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing consent', 'Campaign responses'],
      purpose: 'Marketing communications, promotional offers',
      legalBasis: 'Consent'
    }
  ];

  const securityMeasures = [
    'Encryption of data in transit and at rest',
    'Regular security assessments and penetration testing',
    'Access controls and authentication mechanisms',
    'Staff training on data protection',
    'Incident response procedures',
    'Regular backups and disaster recovery plans',
    'Privacy by design principles',
    'Data minimization practices'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="w-16 h-16 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              GDPR <span className="text-cyan-400">Compliance</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our commitment to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our GDPR Commitment</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Zion Tech Group, we are committed to protecting your privacy and personal data. 
              We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This page explains how we collect, use, store, and protect your personal data, and outlines your rights 
              under GDPR. We believe in transparency and giving you control over your personal information.
            </p>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Personal Data We Collect</h2>
          <div className="space-y-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Examples</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Purpose</h4>
                    <p className="text-gray-300 text-sm">{type.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Legal Basis</h4>
                    <p className="text-gray-300 text-sm">{type.legalBasis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Your Rights Under GDPR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <right.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{right.description}</p>
                  </div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">{right.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Exercise Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How to Exercise Your Rights</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300 mb-4">
                  To exercise any of your rights, please contact us using one of the following methods:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Email: privacy@ziontechgroup.com</li>
                  <li>• Phone: +1 302 464 0950</li>
                  <li>• Address: 364 E Main St STE 1008, Middletown, DE 19709</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                <p className="text-gray-300 mb-4">
                  We will respond to your request within 30 days of receipt. 
                  In some cases, we may need additional time to process complex requests.
                </p>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-semibold mb-2">Required Information</h4>
                  <p className="text-gray-300 text-sm">
                    Please include your full name, email address, and a description of your request 
                    to help us process it quickly and accurately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Data Security Measures</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Measures</h3>
                <ul className="space-y-2">
                  {securityMeasures.slice(0, 4).map((measure, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Organizational Measures</h3>
                <ul className="space-y-2">
                  {securityMeasures.slice(4).map((measure, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Data Retention</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes 
              for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Retention Periods</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Account data: Until account deletion + 30 days</li>
                  <li>• Marketing data: Until consent withdrawal</li>
                  <li>• Analytics data: 26 months maximum</li>
                  <li>• Legal compliance: As required by law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Deletion Process</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Automatic deletion after retention period</li>
                  <li>• Secure deletion methods used</li>
                  <li>• Backup data also deleted</li>
                  <li>• Confirmation provided to you</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact DPO */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Data Protection Officer
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our data protection practices or wish to exercise your rights, 
            please contact our Data Protection Officer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact DPO
            </Link>
            <Link
              to="/privacy"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GDPRPage;
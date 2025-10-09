import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Eye, Database, User, Lock, Download, Trash2 } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data.',
      icon: Eye,
      details: [
        'Request information about what personal data we hold about you',
        'Receive a copy of your personal data in a structured format',
        'Understand how your data is being processed'
      ]
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to have inaccurate personal data corrected.',
      icon: Database,
      details: [
        'Correct any inaccurate personal information',
        'Complete incomplete personal data',
        'Update your personal information at any time'
      ]
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data.',
      icon: Trash2,
      details: [
        'Request deletion of your personal data',
        'Withdraw consent for data processing',
        'Object to processing of your personal data'
      ]
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your data in a portable format.',
      icon: Download,
      details: [
        'Receive your data in a machine-readable format',
        'Transfer your data to another service provider',
        'Request direct transfer of your data'
      ]
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to limit how we process your personal data.',
      icon: Lock,
      details: [
        'Restrict processing of your personal data',
        'Object to automated decision-making',
        'Request human review of automated decisions'
      ]
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to certain types of processing.',
      icon: Shield,
      details: [
        'Object to direct marketing',
        'Object to processing for research purposes',
        'Object to processing based on legitimate interests'
      ]
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
      examples: ['Billing address', 'Shipping address', 'Email preferences'],
      purpose: 'Service delivery, customer support',
      legalBasis: 'Contract performance, legitimate interests'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Website functionality, security, analytics',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Usage Data',
      examples: ['Website interactions', 'Service usage patterns', 'Preferences'],
      purpose: 'Service improvement, personalization',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing responses', 'Survey data'],
      purpose: 'Marketing communications, service promotion',
      legalBasis: 'Consent, legitimate interests'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zion Tech Group is committed to protecting your privacy and ensuring compliance 
            with the General Data Protection Regulation (GDPR).
          </p>
          <div className="text-sm text-gray-400">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* What is GDPR */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What is GDPR?</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect 
              on May 25, 2018, in the European Union. It strengthens and unifies data protection for individuals within 
              the EU and addresses the export of personal data outside the EU.
            </p>
            <p className="text-gray-300 leading-relaxed">
              GDPR gives individuals greater control over their personal data and requires organizations to be more 
              transparent about how they collect, use, and protect personal information.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Your Rights Under GDPR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <right.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{right.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{right.description}</p>
                <ul className="space-y-2">
                  {right.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data We Collect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Personal Data We Collect</h2>
          <div className="space-y-6">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{dataType.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples</h4>
                    <ul className="space-y-1">
                      {dataType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Purpose</h4>
                    <p className="text-gray-300 text-sm">{dataType.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Legal Basis</h4>
                    <p className="text-gray-300 text-sm">{dataType.legalBasis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Processing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">How We Process Your Data</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Lawful Basis for Processing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span><strong>Contract:</strong> Processing is necessary for the performance of a contract with you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or those of a third party</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span><strong>Legal Obligation:</strong> Processing is necessary to comply with a legal obligation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Data Retention</h3>
                <p className="text-gray-300">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                  unless a longer retention period is required or permitted by law. When we no longer need your personal data, 
                  we will securely delete or anonymize it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Encryption of data in transit and at rest</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Regular security assessments and updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Access controls and authentication mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Employee training on data protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span className="text-gray-300">Incident response procedures</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact DPO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Data Protection Officer</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-4">
              We have appointed a Data Protection Officer (DPO) to oversee our data protection activities. 
              You can contact our DPO with any questions or concerns about how we handle your personal data.
            </p>
            <div className="space-y-2">
              <p className="text-white">
                <strong>Email:</strong> dpo@ziontechgroup.com
              </p>
              <p className="text-white">
                <strong>Phone:</strong> +1 (302) 464-0950
              </p>
              <p className="text-white">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>

        {/* Exercise Your Rights */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Exercise Your Rights</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            You can exercise any of your GDPR rights by contacting us. We will respond to your request 
            within one month of receipt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
            </Link>
            <a
              href="mailto:dpo@ziontechgroup.com"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Email DPO
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GDPRPage;
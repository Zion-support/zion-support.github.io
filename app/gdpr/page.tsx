import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Download, Eye, Trash2, Edit, Lock, CheckCircle, AlertCircle, Clock, User } from 'lucide-react';

const GDPRCompliancePage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to know what personal data we process about you and how we use it.',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      details: [
        'Request a copy of your personal data',
        'Information about processing purposes',
        'Data retention periods',
        'Third parties with access to your data'
      ]
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.',
      icon: Edit,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      details: [
        'Update incorrect information',
        'Complete incomplete data',
        'Verify data accuracy',
        'Request confirmation of changes'
      ]
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      icon: Trash2,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      details: [
        'Data no longer necessary',
        'Withdrawal of consent',
        'Unlawful processing',
        'Objection to processing'
      ]
    },
    {
      title: 'Right to Portability',
      description: 'You can receive your data in a structured, machine-readable format.',
      icon: Download,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      details: [
        'Export your data',
        'Transfer to another service',
        'Structured format (JSON, CSV)',
        'Direct transmission when possible'
      ]
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can limit how we process your personal data.',
      icon: Lock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      details: [
        'Dispute data accuracy',
        'Unlawful processing objection',
        'Retention period extension',
        'Processing limitation'
      ]
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing based on legitimate interests or for marketing.',
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      details: [
        'Marketing communications',
        'Profiling for marketing',
        'Legitimate interest processing',
        'Scientific research processing'
      ]
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Data',
      examples: ['Name', 'Email address', 'Username', 'Account ID'],
      purpose: 'Account creation and management',
      legalBasis: 'Contract performance',
      retention: 'Account lifetime + 7 years'
    },
    {
      category: 'Contact Data',
      examples: ['Email address', 'Phone number', 'Mailing address', 'Social media profiles'],
      purpose: 'Communication and support',
      legalBasis: 'Contract performance and legitimate interests',
      retention: 'Account lifetime + 3 years'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Website functionality and analytics',
      legalBasis: 'Legitimate interests',
      retention: '2 years'
    },
    {
      category: 'Usage Data',
      examples: ['Page views', 'Click patterns', 'Session duration', 'Feature usage'],
      purpose: 'Service improvement and analytics',
      legalBasis: 'Legitimate interests',
      retention: '2 years'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing responses', 'Survey responses'],
      purpose: 'Marketing and communication',
      legalBasis: 'Consent',
      retention: 'Until consent withdrawn'
    }
  ];

  const securityMeasures = [
    {
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption.',
      icon: Lock,
      details: ['TLS 1.3 for data in transit', 'AES-256 for data at rest', 'End-to-end encryption for sensitive data']
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.',
      icon: User,
      details: ['Role-based access control', 'Multi-factor authentication', 'Regular access reviews', 'Principle of least privilege']
    },
    {
      title: 'Data Minimization',
      description: 'We only collect and process data that is necessary for our legitimate purposes.',
      icon: CheckCircle,
      details: ['Purpose limitation', 'Data minimization', 'Storage limitation', 'Accuracy maintenance']
    },
    {
      title: 'Regular Audits',
      description: 'Regular security audits and assessments ensure ongoing compliance.',
      icon: Shield,
      details: ['Annual security audits', 'Penetration testing', 'Vulnerability assessments', 'Compliance monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance, your data protection rights, and how we handle your personal information." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, personal data, compliance, EU regulation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (GDPR).
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Data Protection Rights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${right.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <right.icon className={`w-6 h-6 ${right.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{right.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{right.description}</p>
                <ul className="space-y-2">
                  {right.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Personal Data We Process</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Legal Basis</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dataTypes.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {data.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.examples.join(', ')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.purpose}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.legalBasis}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.retention}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Data Security Measures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <measure.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{measure.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{measure.description}</p>
                <ul className="space-y-2">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Exercise Rights */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Exercise Your Rights</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Making a Request</h3>
                <p className="text-gray-700 mb-4">
                  To exercise any of your data protection rights, you can contact us using any of the methods below:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Email: <a href="mailto:privacy@ziontechgroup.com" className="text-purple-600 hover:underline">privacy@ziontechgroup.com</a></li>
                  <li>• Phone: <a href="tel:+13024640950" className="text-purple-600 hover:underline">+1 (302) 464-0950</a></li>
                  <li>• Mail: 364 E Main St STE 1008, Middletown, DE 19709</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Need</h3>
                <p className="text-gray-700 mb-4">
                  To process your request, we may need to verify your identity. Please provide:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Your full name and email address</li>
                  <li>• Description of the right you wish to exercise</li>
                  <li>• Any specific information you're looking for</li>
                  <li>• Proof of identity (if required)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-700 mb-4">
                  We will respond to your request within one month of receipt. In complex cases, we may extend this period by up to two additional months.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Standard response time: 30 days</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Cost</h3>
                <p className="text-gray-700">
                  Exercising your data protection rights is free of charge. We will not charge you for responding to your request unless it is manifestly unfounded or excessive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Data Protection Officer</h2>
          <p className="text-xl text-gray-300 mb-8">
            For any questions about our data processing activities or to exercise your rights, contact our Data Protection Officer.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Data Protection Officer</h3>
                <p className="text-gray-600">Zion Tech Group</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Email: <a href="mailto:dpo@ziontechgroup.com" className="text-purple-600 hover:underline">dpo@ziontechgroup.com</a></p>
                <p>Phone: <a href="tel:+13024640950" className="text-purple-600 hover:underline">+1 (302) 464-0950</a></p>
                <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRCompliancePage;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Eye, Download, Trash2, Edit, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data.',
      icon: '👁️',
      details: 'We will provide you with a copy of the personal data we hold about you, including how we use it and who we share it with.'
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate personal data.',
      icon: '✏️',
      details: 'If you believe any personal data we hold about you is incorrect or incomplete, you can request that we correct it.'
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data.',
      icon: '🗑️',
      details: 'You can request that we delete your personal data in certain circumstances, such as when it is no longer necessary for the purpose it was collected.'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of processing of your personal data.',
      icon: '⏸️',
      details: 'You can request that we limit how we use your personal data in certain circumstances.'
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured format.',
      icon: '📤',
      details: 'You can request that we provide your personal data in a machine-readable format so you can transfer it to another service.'
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data.',
      icon: '🚫',
      details: 'You can object to our processing of your personal data for certain purposes, such as direct marketing.'
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Data',
      description: 'Information that identifies you personally',
      examples: ['Name', 'Email address', 'Phone number', 'Mailing address', 'Date of birth'],
      purpose: 'To provide our services and communicate with you',
      legalBasis: 'Contract performance and legitimate interest'
    },
    {
      category: 'Technical Data',
      description: 'Information about your device and how you use our services',
      examples: ['IP address', 'Browser type', 'Operating system', 'Device information', 'Usage patterns'],
      purpose: 'To improve our services and ensure security',
      legalBasis: 'Legitimate interest and consent'
    },
    {
      category: 'Usage Data',
      description: 'Information about how you interact with our services',
      examples: ['Pages visited', 'Time spent on site', 'Features used', 'Search queries', 'Click patterns'],
      purpose: 'To analyze and improve our services',
      legalBasis: 'Legitimate interest and consent'
    },
    {
      category: 'Marketing Data',
      description: 'Information used for marketing and communication purposes',
      examples: ['Communication preferences', 'Marketing consent', 'Campaign responses', 'Survey responses'],
      purpose: 'To send you relevant marketing communications',
      legalBasis: 'Consent'
    }
  ];

  const securityMeasures = [
    {
      title: 'Encryption',
      description: 'All personal data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      icon: '🔐'
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls ensure that only authorized personnel can access personal data on a need-to-know basis.',
      icon: '👥'
    },
    {
      title: 'Regular Audits',
      description: 'We conduct regular security audits and assessments to ensure our data protection measures remain effective.',
      icon: '🔍'
    },
    {
      title: 'Staff Training',
      description: 'All staff members receive regular training on data protection and privacy best practices.',
      icon: '🎓'
    },
    {
      title: 'Incident Response',
      description: 'We have procedures in place to detect, investigate, and respond to any data security incidents.',
      icon: '🚨'
    },
    {
      title: 'Data Minimization',
      description: 'We only collect and process the minimum amount of personal data necessary for our purposes.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your privacy rights and our commitment to data protection under the General Data Protection Regulation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Exercise Your Rights
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is GDPR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is GDPR?
            </h2>
            <p className="text-xl text-gray-600">
              Understanding your rights under the General Data Protection Regulation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 mb-6">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you 
                greater control over your personal data. It applies to all organizations that process personal data 
                of EU residents, regardless of where the organization is located.
              </p>
              <p className="text-gray-600 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring full compliance with GDPR. 
                This page explains your rights and how we handle your personal data.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Lawfulness, fairness, and transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Purpose limitation and data minimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Accuracy and storage limitation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Integrity and confidentiality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Accountability and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Rights Under GDPR
            </h2>
            <p className="text-xl text-gray-600">
              You have several important rights regarding your personal data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{right.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{right.title}</h3>
                <p className="text-gray-600 mb-4">{right.description}</p>
                <p className="text-gray-500 text-sm">{right.details}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Personal Data We Collect
            </h2>
            <p className="text-xl text-gray-600">
              Transparent information about the data we process
            </p>
          </div>
          <div className="space-y-8">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{dataType.category}</h3>
                <p className="text-gray-600 mb-6">{dataType.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {dataType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Purpose:</h4>
                    <p className="text-gray-600 mb-4">{dataType.purpose}</p>
                    <h4 className="font-semibold text-gray-900 mb-3">Legal Basis:</h4>
                    <p className="text-gray-600">{dataType.legalBasis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600">
              Security measures we implement to safeguard your personal information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{measure.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{measure.title}</h3>
                <p className="text-gray-600 text-sm">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exercise Your Rights
            </h2>
            <p className="text-xl text-gray-600">
              How to request access, correction, or deletion of your personal data
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Request</h3>
                <p className="text-gray-600 mb-6">
                  To exercise any of your rights under GDPR, you can contact us using any of the methods below. 
                  We will respond to your request within 30 days.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Edit className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Online form (coming soon)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Include</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Your full name and contact information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Description of the right you wish to exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Any relevant account information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Proof of identity (for security purposes)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data Protection Officer
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            For any questions about our data protection practices or to exercise your rights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dpo@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 dpo@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Last updated: December 15, 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;
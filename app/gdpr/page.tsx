import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Database, Users, Lock, Mail } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const gdprRights = [
    {
      title: 'Right to Access',
      description: 'You have the right to obtain confirmation of whether we process your personal data and access to that data.',
      icon: Eye,
      details: [
        'Request a copy of your personal data',
        'Information about processing purposes',
        'Categories of personal data processed',
        'Recipients of your data',
        'Retention periods'
      ]
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to have inaccurate personal data corrected and incomplete data completed.',
      icon: Database,
      details: [
        'Correct inaccurate information',
        'Complete incomplete data',
        'Update outdated information',
        'Verify data accuracy',
        'Notify third parties of corrections'
      ]
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.',
      icon: Lock,
      details: [
        'Data no longer necessary',
        'Withdrawal of consent',
        'Unlawful processing',
        'Objection to processing',
        'Compliance with legal obligations'
      ]
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to limit how we process your personal data in certain situations.',
      icon: Shield,
      details: [
        'Dispute data accuracy',
        'Unlawful processing',
        'Object to processing',
        'Data no longer needed',
        'Pending verification'
      ]
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.',
      icon: Users,
      details: [
        'Receive data in common format',
        'Transfer data to another controller',
        'Direct transmission when possible',
        'Structured and machine-readable',
        'No hindrance to transmission'
      ]
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for certain purposes.',
      icon: Mail,
      details: [
        'Direct marketing',
        'Legitimate interests',
        'Scientific research',
        'Statistical purposes',
        'Profiling for marketing'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance and your data protection rights under the General Data Protection Regulation." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, EU regulation, data subject rights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GDPR Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Your data protection rights under the General Data Protection Regulation
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Zion Tech Group is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). This page explains your rights and how we protect your personal data.
              </p>
              <p className="text-lg text-gray-600">
                The GDPR gives you specific rights regarding your personal data. We are committed to respecting these rights and providing you with the tools to exercise them.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gdprRights.map((right, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <right.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{right.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{right.description}</p>
                  <ul className="space-y-2">
                    {right.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Exercise Your Rights */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Exercise Your Rights</h2>
              <p className="text-gray-600 mb-6">
                To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within one month.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Methods</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Email: privacy@ziontechgroup.com</p>
                    <p>• Phone: +1 (302) 464-0950</p>
                    <p>• Mail: 364 E Main St STE 1008, Middletown, DE 19709</p>
                    <p>• Online: Use our contact form</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Information</h3>
                  <p className="text-gray-600 mb-2">When making a request, please provide:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Your full name and contact information</li>
                    <li>• Description of the right you wish to exercise</li>
                    <li>• Any relevant account information</li>
                    <li>• Proof of identity (if required)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Your Data Rights?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our Data Protection Officer for assistance with your GDPR rights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact DPO
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GDPRPage;
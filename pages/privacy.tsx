import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const privacySections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide directly (name, email, phone number)',
        'Usage data and analytics from our website and services',
        'Technical information such as IP address, browser type, and device information',
        'Communication records when you contact us for support or inquiries'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our technology services',
        'To communicate with you about our services and updates',
        'To process transactions and manage your account',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to maintain data protection'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate or incomplete data',
        'Right to request deletion of your personal information',
        'Right to opt-out of marketing communications'
      ]
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights."
      keywords="privacy policy, data protection, personal information, GDPR compliance, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-200 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our website or services, you agree to the collection and use of information in accordance 
                  with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Privacy Sections */}
              <div className="space-y-8">
                {privacySections.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <section.icon className="w-8 h-8 text-blue-600 mr-4" />
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Policy Updates</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Privacy;
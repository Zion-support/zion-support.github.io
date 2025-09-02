import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, UserCheck, Database, Globe } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide (name, email, phone number)',
        'Business information (company name, industry, project requirements)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions with our services)',
        'Communication records (emails, chat logs, support tickets)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our services',
        'Communicate with you about projects and services',
        'Process payments and billing',
        'Send marketing communications (with your consent)',
        'Analyze usage patterns to enhance user experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Globe,
      content: [
        'We do not sell your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'We may disclose information if required by law or to protect our rights',
        'We may share information in connection with a business transfer or merger',
        'We may share aggregated, non-personal information for research purposes'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'We regularly audit our security practices and update them as needed',
        'We maintain backup systems with appropriate security controls'
      ]
    },
    {
      title: 'Your Rights',
      icon: UserCheck,
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate information',
        'Right to delete your personal information',
        'Right to restrict processing of your information',
        'Right to data portability',
        'Right to object to processing',
        'Right to withdraw consent at any time'
      ]
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group collects, uses, and protects your personal information."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-600 mb-6">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>
            <p className="text-lg text-gray-600">
              By using our website or services, you agree to the collection and use of information in accordance with 
              this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-lg text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small data files stored on your device that help us:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                Remember your preferences and settings
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                Analyze website traffic and usage patterns
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                Provide personalized content and advertisements
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                Improve website functionality and performance
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              You can control cookie settings through your browser preferences. However, disabling cookies 
              may affect the functionality of our website.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-lg text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
              this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Privacy;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Shield, Database, User, Settings } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';

  const dataTypes = [
    {
      category: 'Personal Information',
      icon: <User className="w-6 h-6" />,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: <Database className="w-6 h-6" />,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: <Settings className="w-6 h-6" />,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['Analytics data', 'Performance metrics', 'Error logs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Provide and maintain our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices and support messages</li>
              <li>• Respond to your comments and questions</li>
              <li>• Improve our services and develop new features</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
            <p className="text-gray-300 mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy, please contact us at privacy@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
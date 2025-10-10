'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, 
                and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  Information We Collect
                </h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Account credentials and preferences</li>
                  <li>Communication records and support requests</li>
                  <li>Usage data and analytics information</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Lock className="w-8 h-8 text-cyan-400 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Database className="w-8 h-8 text-cyan-400 mr-3" />
                  Data Security
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-8 h-8 text-cyan-400 mr-3" />
                  Your Rights
                </h2>
                <p className="text-gray-300 mb-4">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
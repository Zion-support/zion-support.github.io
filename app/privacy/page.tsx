'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, device information',
      examples: ['Log files', 'Analytics data', 'Error reports']
    },
    {
      category: 'Cookies and Tracking',
      icon: Eye,
      description: 'Information collected through cookies and similar technologies',
      examples: ['Session cookies', 'Analytics cookies', 'Preference cookies']
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct inaccurate information',
    'Delete your personal data',
    'Restrict data processing',
    'Data portability',
    'Object to processing',
    'Withdraw consent'
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to protecting your privacy and personal data" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Data Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <dataType.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{dataType.category}</h3>
                  <p className="text-gray-300 text-sm mb-4">{dataType.description}</p>
                  <ul className="space-y-1">
                    {dataType.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-400 text-xs">• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rights Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us About Privacy</h2>
              <p className="text-gray-300 mb-8">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">(302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Zion Tech Group Privacy Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
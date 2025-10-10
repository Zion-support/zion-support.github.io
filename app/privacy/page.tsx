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
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company and job title',
        'Account credentials'
      ]
    },
    {
      category: 'Usage Data',
      icon: Database,
      items: [
        'Website usage patterns',
        'Service interaction data',
        'Device and browser information',
        'IP address and location data'
      ]
    },
    {
      category: 'Technical Data',
      icon: Server,
      items: [
        'Log files and error reports',
        'Performance metrics',
        'Security event data',
        'System configuration information'
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we have about you',
      icon: Eye
    },
    {
      title: 'Correct Inaccuracies',
      description: 'Update or correct any inaccurate personal information',
      icon: CheckCircle
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal data from our systems',
      icon: AlertTriangle
    },
    {
      title: 'Data Portability',
      description: 'Export your data in a machine-readable format',
      icon: Database
    },
    {
      title: 'Restrict Processing',
      description: 'Limit how we process your personal data',
      icon: Lock
    },
    {
      title: 'Object to Processing',
      description: 'Opt out of certain types of data processing',
      icon: Shield
    }
  ];

  const securityMeasures = [
    'End-to-end encryption for all data transmission',
    'Regular security audits and penetration testing',
    'Access controls and multi-factor authentication',
    'Data anonymization and pseudonymization',
    'Regular staff training on data protection',
    'Incident response and breach notification procedures'
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zion Tech Group - Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights, data security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, 
                and protect your personal information when you use our services.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Information We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dataTypes.map((dataType, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <dataType.icon className="w-6 h-6 text-cyan-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{dataType.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {dataType.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Provide and maintain our services
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Process transactions and payments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Send service-related communications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Business Operations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Improve our services and user experience
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Conduct analytics and research
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      Comply with legal obligations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Key className="w-6 h-6 mr-3 text-cyan-400" />
                Your Privacy Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <right.icon className="w-6 h-6 text-cyan-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                Data Security
              </h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {measure}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    privacy@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
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
      description: 'Information that can be used to identify you personally',
      examples: ['Name', 'Email address', 'Phone number', 'Company name', 'Job title']
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our services',
      examples: ['Pages visited', 'Time spent on site', 'Features used', 'Search queries', 'Click patterns']
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'Technical information about your device and connection',
      examples: ['IP address', 'Browser type', 'Operating system', 'Device information', 'Cookies']
    }
  ];

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services',
      icon: Server
    },
    {
      title: 'Communication',
      description: 'To respond to your inquiries and provide support',
      icon: Mail
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services',
      icon: Database
    },
    {
      title: 'Security',
      description: 'To protect against fraud and ensure security',
      icon: Shield
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: FileText
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: AlertTriangle
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: Shield
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
              <Globe className="w-4 h-4" />
              <span>Effective immediately</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-8">
              We collect several types of information from and about users of our services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Information */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-8">
              We use the information we collect for various purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <purpose.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{purpose.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sharing */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-300 mb-8">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <right.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Security */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-3" />
                <span>Encryption of data in transit and at rest</span>
              </li>
              <li className="flex items-center">
                <Lock className="w-5 h-5 text-green-400 mr-3" />
                <span>Regular security assessments and updates</span>
              </li>
              <li className="flex items-center">
                <Key className="w-5 h-5 text-green-400 mr-3" />
                <span>Access controls and authentication mechanisms</span>
              </li>
              <li className="flex items-center">
                <Database className="w-5 h-5 text-green-400 mr-3" />
                <span>Secure data storage and backup procedures</span>
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Types of Cookies We Use:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span><strong>Essential Cookies:</strong> Necessary for website functionality</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span><strong>Analytics Cookies:</strong> Help us understand website usage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span><strong>Functional Cookies:</strong> Remember your preferences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span><strong>Marketing Cookies:</strong> Used for targeted advertising</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
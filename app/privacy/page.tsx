'use client';

import React from 'react';


import { Database, Mail } from 'lucide-react';

  const lastUpdated = 'October 8, 2024';

  const dataTypes = [
    {
      category: 'Personal Information',
      examples: ['Name', 'Email address', 'Phone number', 'Company name', 'Job title'],
      purpose: 'To provide services and communicate with you'
    },
    {
      category: 'Technical Information',
      examples: ['IP address', 'Browser type', 'Device information', 'Usage patterns'],
      purpose: 'To improve our services and website functionality'
    },
    {
      category: 'Business Information',
      examples: ['Project requirements', 'Service preferences', 'Communication history'],
      purpose: 'To deliver customized solutions and support'
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Correct Information',
      description: 'Update or correct any inaccurate personal information',
      icon: <Database className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Delete Data',
      description: 'Request deletion of your personal data under certain circumstances',
      icon: <Lock className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: <Users className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security, Zion Tech Group" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Last updated: {lastUpdated}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-300 mb-4">
              Zion Tech Group ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              (https://ziontechgroup.com) and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="text-gray-300">
              We are committed to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) 
              and the California Consumer Privacy Act (CCPA).
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Information We Collect</h2>
          <div className="space-y-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">{type.category}</h3>
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium mb-2">Examples:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium mb-2">Purpose:</h4>
                  <p className="text-gray-300">{type.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Service Delivery</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and payments</li>
                  <li>• Deliver customer support</li>
                  <li>• Send service-related communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Business Operations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Improve our website and services</li>
                  <li>• Conduct analytics and research</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Prevent fraud and ensure security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Data Sharing and Disclosure</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our website and conducting our business.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {right.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{right.title}</h3>
                </div>
                <p className="text-gray-300">{right.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Data Security</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Encrypted data storage</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Organizational Measures</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Staff training on data protection</li>
                  <li>• Limited access to personal data</li>
                  <li>• Regular policy reviews</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Cookies and Tracking</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-6">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. 
              You can control cookie settings through your browser preferences.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-300">Required for the website to function properly and cannot be disabled.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-300">Help us understand how visitors interact with our website to improve performance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                <p className="text-gray-300">Used to deliver relevant advertisements and track campaign effectiveness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy or wish to exercise your privacy rights, 
              please contact us using the information below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+1 (302) 464-0950</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Changes to This Policy</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new privacy policy on this page and updating the 
              "Last updated" date. We encourage you to review this privacy policy periodically for any changes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us About Privacy
            <Mail className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
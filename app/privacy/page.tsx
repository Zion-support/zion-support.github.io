'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, CheckCircle, Database, Lock, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent on site', 'Click patterns']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      examples: ['Analytics data', 'Performance metrics', 'Error logs']
    }
  ];

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services',
      icon: Settings
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and send important updates',
      icon: Eye
    },
    {
      title: 'Analytics',
      description: 'To improve our website and services',
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
      description: 'Request access to your personal information',
      icon: Eye
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: Settings
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: Database
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>

            {/* Data We Collect */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Information We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                How We Use Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {purposes.map((purpose, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <purpose.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{purpose.title}</h3>
                    </div>
                    <p className="text-gray-300">{purpose.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Your Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <right.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-cyan-400" />
                Questions About Privacy?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">privacy@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">(302) 464-0950</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPage;
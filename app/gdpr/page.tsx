'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Eye, FileText, Download, Trash2, Edit, Shield, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

const GdprPage: React.FC = () => {
  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and receive a copy of the data we hold about you.'
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.'
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of processing of your personal data.'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for certain purposes.'
    }
  ];

  const dataTypes = [
    'Contact information (name, email, phone)',
    'Account information (username, preferences)',
    'Usage data (website interactions, service usage)',
    'Technical data (IP address, browser type, device information)',
    'Communication data (support tickets, emails)',
    'Marketing data (newsletter subscriptions, preferences)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Zion Tech Group is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-gray-800 rounded-lg p-6 mb-12">
            <p className="text-gray-300">
              <strong className="text-white">Last Updated:</strong> December 2024
            </p>
          </div>

          {/* What is GDPR */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">What is GDPR?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. 
                It applies to all organizations that process personal data of EU residents, regardless of where the organization is located.
              </p>
              <p className="text-gray-300 leading-relaxed">
                GDPR gives individuals greater control over their personal data and requires organizations to be transparent about how they collect, use, and protect personal information.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-8">Your Rights Under GDPR</h2>
            <div className="grid gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <right.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {right.title}
                      </h3>
                      <p className="text-gray-300">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Personal Data We Collect</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                We collect the following types of personal data:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {dataTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">How We Use Your Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Service Delivery</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and payments</li>
                  <li>• Send service-related communications</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Improvement & Analytics</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Analyze usage patterns</li>
                  <li>• Improve our services</li>
                  <li>• Develop new features</li>
                  <li>• Conduct research and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Data Security</h2>
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-semibold text-white">We Protect Your Data</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-100">
                <div>
                  <h4 className="font-semibold mb-2">Technical Measures</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Encryption in transit and at rest</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls and authentication</li>
                    <li>• Secure data centers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organizational Measures</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Staff training on data protection</li>
                    <li>• Data protection policies</li>
                    <li>• Regular compliance reviews</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Exercise Your Rights</h2>
              <p className="text-gray-100 mb-6">
                To exercise any of your GDPR rights or if you have questions about our data practices, 
                please contact our Data Protection Officer at kleber@ziontechgroup.com
              </p>
              <Link
                href="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Contact Us
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GdprPage;

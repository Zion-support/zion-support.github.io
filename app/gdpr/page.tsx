'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Download, Eye, Trash2, Edit, Lock } from 'lucide-react';

const GDPRPage: React.FC = () => {
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
    {
      category: 'Contact Information',
      examples: ['Name', 'Email address', 'Phone number', 'Mailing address'],
      purpose: 'Communication and service delivery',
      legalBasis: 'Contract performance and legitimate interest'
    },
    {
      category: 'Account Information',
      examples: ['Username', 'Password (hashed)', 'Account preferences', 'Service usage data'],
      purpose: 'Account management and service provision',
      legalBasis: 'Contract performance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Website functionality and analytics',
      legalBasis: 'Legitimate interest and consent'
    },
    {
      category: 'Communication Data',
      examples: ['Support tickets', 'Email correspondence', 'Chat logs', 'Feedback'],
      purpose: 'Customer support and service improvement',
      legalBasis: 'Contract performance and legitimate interest'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GDPR Compliance</h1>
            <p className="text-gray-300 text-lg">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Protection Commitment</h2>
              <p className="text-gray-300 mb-4">
                At Zion Tech Group, we take data protection seriously. This page explains how we collect, use, and protect your information 
                in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
              <p className="text-gray-300">
                We are committed to transparency, security, and respecting your privacy rights.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start mb-4">
                    <right.icon className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                    <h3 className="text-xl font-semibold text-white">{right.title}</h3>
                  </div>
                  <p className="text-gray-300">{right.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Data We Collect</h2>
            <div className="space-y-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{dataType.category}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-200 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {dataType.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-200 mb-2">Purpose:</h4>
                      <p className="text-sm text-gray-300 mb-3">{dataType.purpose}</p>
                      
                      <h4 className="text-sm font-medium text-gray-200 mb-2">Legal Basis:</h4>
                      <p className="text-sm text-gray-300">{dataType.legalBasis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Use Your Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Service Provision</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and payments</li>
                  <li>• Send service-related communications</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Improvement & Analytics</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Analyze usage patterns and trends</li>
                  <li>• Improve our services and features</li>
                  <li>• Conduct research and development</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Data Security</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication</li>
                <li>• Employee training on data protection</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Data Retention</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required or permitted by law. Our retention periods are:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Account data: Until account deletion or 3 years of inactivity</li>
                <li>• Transaction data: 7 years for tax and legal compliance</li>
                <li>• Communication data: 3 years from last contact</li>
                <li>• Analytics data: 2 years (anonymized after 1 year)</li>
              </ul>
            </div>
          </section>

          {/* Your Rights - How to Exercise */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">How to Exercise Your Rights</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                To exercise any of your data protection rights, please contact us using the information below. 
                We will respond to your request within 30 days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">What to Include</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Your full name and contact information</li>
                    <li>• Description of the right you wish to exercise</li>
                    <li>• Any relevant account information</li>
                    <li>• Proof of identity (if required)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Updates to This Policy</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300">
                We may update this GDPR compliance page from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
                and, where appropriate, through other communication channels.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Questions or Concerns?</h2>
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">We're Here to Help</h3>
              <p className="text-cyan-100 mb-6">
                If you have any questions about our data protection practices or this GDPR compliance page, 
                please don't hesitate to contact us.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
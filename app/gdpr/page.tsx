'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, FileText, Award, Users, Lock, Eye, Edit, Trash2, Download, Ban } from 'lucide-react';

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
      description: 'You have the right to receive your personal data in a structured, commonly used format.'
    },
    {
      icon: Ban,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for direct marketing purposes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Zion Tech Group is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
            </p>
          </header>

          <div className="space-y-12">
            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Your Data Protection Rights</h2>
              <p className="text-gray-300 mb-8">
                Under GDPR, you have several important rights regarding your personal data. We are committed to helping you exercise these rights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-purple-400 mr-4 mt-1">
                        <right.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                        <p className="text-gray-300 text-sm">{right.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How We Protect Your Data</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Measures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• End-to-end encryption</li>
                    <li>• Secure data transmission</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls and authentication</li>
                    <li>• Data backup and recovery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Organizational Measures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Privacy by design principles</li>
                    <li>• Staff training and awareness</li>
                    <li>• Data protection impact assessments</li>
                    <li>• Regular compliance reviews</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Company information</li>
                    <li>• Usage data and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Information</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Website usage analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Our Data Protection Officer</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our data protection practices or wish to exercise your rights, please contact our Data Protection Officer.
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                    <p className="text-gray-300 mb-2">
                      <strong>Email:</strong> privacy@ziontechgroup.com
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong>Phone:</strong> (302) 464-0950
                    </p>
                    <p className="text-gray-300">
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
                    <p className="text-gray-300">
                      We will respond to your request within 30 days of receipt. For complex requests, we may extend this period by up to 60 days, and we will inform you of any delay.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
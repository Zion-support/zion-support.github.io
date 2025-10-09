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

  const dataProcessingActivities = [
    {
      purpose: 'Service Provision',
      legalBasis: 'Contract Performance',
      dataTypes: ['Name', 'Email', 'Phone', 'Company'],
      retentionPeriod: 'Duration of contract + 7 years'
    },
    {
      purpose: 'Marketing Communications',
      legalBasis: 'Consent',
      dataTypes: ['Email', 'Name', 'Preferences'],
      retentionPeriod: 'Until consent withdrawn'
    },
    {
      purpose: 'Website Analytics',
      legalBasis: 'Legitimate Interest',
      dataTypes: ['IP Address', 'Browser Info', 'Usage Data'],
      retentionPeriod: '26 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              GDPR Compliance
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Data Protection & Privacy Rights
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our commitment to data protection and privacy in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Your Data Protection Rights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <right.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Processing Activities */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              How We Process Your Data
            </h2>
            <div className="space-y-6">
              {dataProcessingActivities.map((activity, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Purpose</h3>
                      <p className="text-gray-300 text-sm">{activity.purpose}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Legal Basis</h3>
                      <p className="text-gray-300 text-sm">{activity.legalBasis}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Data Types</h3>
                      <p className="text-gray-300 text-sm">{activity.dataTypes.join(', ')}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Retention Period</h3>
                      <p className="text-gray-300 text-sm">{activity.retentionPeriod}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Exercise Your Rights
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              To exercise any of your data protection rights, please contact us using the information below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Data Protection Officer</h3>
                <p className="text-gray-300 mb-4">Contact our DPO for data protection matters</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">General Inquiries</h3>
                <p className="text-gray-300 mb-4">For general data protection questions</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Postal Address</h3>
                <p className="text-gray-300 mb-4">Send written requests to</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
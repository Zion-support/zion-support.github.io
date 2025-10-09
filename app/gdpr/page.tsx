'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Download, Eye, Trash2, Edit, Lock } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your data protection rights and our commitment to privacy
            </p>
            <p className="text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Your Data Protection Rights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      <right.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {right.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Controller Information */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Data Controller Information
            </h2>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Zion Tech Group
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>364 E Main St STE 1008</p>
                <p>Middletown, DE 19709</p>
                <p>United States</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 (302) 464-0950</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Exercise Your Rights
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              To exercise any of your data protection rights, please contact us using the information below.
            </p>
            
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-4">
                Email: kleber@ziontechgroup.com<br />
                Phone: +1 (302) 464-0950
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GdprPage;
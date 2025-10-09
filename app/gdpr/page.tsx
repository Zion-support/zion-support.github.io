'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, FileText, Award, Users, Lock, Eye, Edit, Trash2, Download, AlertCircle } from 'lucide-react';

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
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.'
    },
    {
      icon: AlertCircle,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for certain purposes.'
    },
    {
      icon: Shield,
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of processing of your personal data.'
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
            <p className="text-xl text-gray-300">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </div>

          {/* Your Rights Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Your Rights Under GDPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <right.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{right.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Collection Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">How We Collect and Use Your Data</h2>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Data We Collect</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Contact information (name, email, phone)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Website usage data and analytics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Communication preferences
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Service usage information
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">How We Use It</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Provide and improve our services
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Communicate with you about our services
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Analyze website performance and usage
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Comply with legal obligations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Us About Your Data</h2>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 mb-6">
                If you have any questions about our data practices or want to exercise your rights under GDPR, 
                please contact our Data Protection Officer:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Email: <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">(302) 464-0950</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
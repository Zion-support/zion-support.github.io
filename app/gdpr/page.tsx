'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      description: 'You have the right to receive your personal data in a structured, commonly used format.'
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
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GDPR Compliance</h1>
            <p className="text-gray-300 text-lg">
              Your privacy and data protection rights under the General Data Protection Regulation (GDPR).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rights.map((right, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <right.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">{right.title}</h3>
                </div>
                <p className="text-gray-300">{right.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-300 mb-4">
              To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p><strong>Phone:</strong> +1 302 464 0950</p>
              <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Lawfulness, Fairness & Transparency</h3>
                <p className="text-gray-300 text-sm">We process personal data lawfully, fairly, and in a transparent manner.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Purpose Limitation</h3>
                <p className="text-gray-300 text-sm">We collect personal data for specified, explicit, and legitimate purposes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
                <p className="text-gray-300 text-sm">We only collect personal data that is adequate, relevant, and limited to what is necessary.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300 text-sm">We keep personal data accurate and up to date.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Storage Limitation</h3>
                <p className="text-gray-300 text-sm">We retain personal data only for as long as necessary for the purposes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm">We implement appropriate technical and organizational measures to protect personal data.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
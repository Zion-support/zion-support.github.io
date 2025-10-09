'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GdprPage: React.FC = () => {
  const rights = [
    {
      icon: '👁️',
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and information about how it is processed.'
    },
    {
      icon: '✏️',
      title: 'Right to Rectification',
      description: 'You have the right to have inaccurate personal data corrected or incomplete data completed.'
    },
    {
      icon: '🗑️',
      title: 'Right to Erasure',
      description: 'You have the right to request the deletion of your personal data in certain circumstances.'
    },
    {
      icon: '⏸️',
      title: 'Right to Restrict Processing',
      description: 'You have the right to request the restriction of processing of your personal data.'
    },
    {
      icon: '📦',
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, commonly used format.'
    },
    {
      icon: '🚫',
      title: 'Right to Object',
      description: 'You have the right to object to the processing of your personal data in certain circumstances.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
            </p>
          </header>

          {/* Your Rights Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{right.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                      <p className="text-gray-300">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Exercise Your Rights</h2>
              <p className="text-gray-300 mb-6">
                To exercise any of your data protection rights, please contact us using the information below.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GdprPage;
'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">GDPR Compliance</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to GDPR</h2>
            <p className="text-gray-300 mb-6">
              We are fully compliant with the General Data Protection Regulation (GDPR) and are committed to protecting your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <ul className="text-gray-300 mb-6 list-disc list-inside">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational measures to ensure the security of your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              For any GDPR-related inquiries, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
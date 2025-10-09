'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Zion Tech Group is committed to protecting your privacy and ensuring compliance with 
              the General Data Protection Regulation (GDPR).
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Under GDPR, you have the right to access, rectify, erase, restrict, and port your data.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Processing</h2>
            <p className="text-gray-300 mb-6">
              We process your data lawfully, fairly, and transparently in accordance with GDPR requirements.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPRPage;
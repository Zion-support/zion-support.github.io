'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Get help with our AI and IT solutions. Our support team is here to assist you.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Support</h2>
            <p className="text-gray-300 mb-6">
              Reach out to our support team for technical assistance and guidance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
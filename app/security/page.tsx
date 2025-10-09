'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Security</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Learn about our security measures and how we protect your data.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Security Measures</h2>
            <p className="text-gray-300 mb-6">
              We implement industry-standard security practices to protect your information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;
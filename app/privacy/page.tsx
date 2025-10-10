'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              This privacy policy describes how Zion Tech Group collects, uses, and protects your information.
            </p>
            <p className="text-gray-600">
              Last updated: January 8, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
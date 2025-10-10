'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              These terms of service govern your use of Zion Tech Group's services and website.
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

export default TermsPage;
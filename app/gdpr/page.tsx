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
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 mb-6">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). 
              This page explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Data Controller</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group is the data controller for the personal data we process. You can contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;

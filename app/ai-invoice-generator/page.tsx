import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AI Invoice Generator - Zion Tech Group',
  description: 'Automated invoice generation powered by AI for streamlined business operations.',
};

export default function AIInvoiceGeneratorPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">AI Invoice Generator</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

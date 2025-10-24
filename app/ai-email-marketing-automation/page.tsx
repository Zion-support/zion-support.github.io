import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AI Email Marketing Automation - Zion Tech Group',
  description: 'Advanced AI-powered email marketing automation solutions for modern businesses.',
};

export default function AIEmailMarketingAutomationPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">AI Email Marketing Automation</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

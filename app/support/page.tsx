'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get help and support for our services.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Support
            </h2>
            <p className="text-gray-300 mb-4">
              Email: kleber@ziontechgroup.com
            </p>
            <p className="text-gray-300">
              Phone: (302) 464-0950
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;

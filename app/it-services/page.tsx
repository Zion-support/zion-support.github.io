'use client';

import React from 'react';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">IT Services</h1>
        <p className="text-xl text-gray-300">Comprehensive IT solutions coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default ITServicesPage;
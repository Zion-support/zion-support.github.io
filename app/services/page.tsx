'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Comprehensive AI and IT solutions for your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI Services</h2>
              <p className="text-gray-300">Advanced artificial intelligence solutions</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">IT Services</h2>
              <p className="text-gray-300">Comprehensive IT infrastructure solutions</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Micro SAAS</h2>
              <p className="text-gray-300">Affordable, powerful AI-driven tools</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
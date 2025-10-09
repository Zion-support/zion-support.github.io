'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Compliance & Security
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Enterprise-grade security and compliance
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CompliancePage;

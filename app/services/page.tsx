'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Comprehensive AI and IT solutions
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              We offer a wide range of AI and IT services to help your business grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Leading provider of AI and IT solutions for modern businesses.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group privacy page." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Privacy
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12">
              Welcome to our privacy page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPage;

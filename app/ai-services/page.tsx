'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive AI services including machine learning, natural language processing, and computer vision solutions." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business operations and drive innovation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AiServicesPage;

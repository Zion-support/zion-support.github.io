'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Our comprehensive AI and IT services to transform your business." />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to drive your business forward.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ServicesPage;

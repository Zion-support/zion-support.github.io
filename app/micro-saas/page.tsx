'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro-saas - Zion AI | AI & IT Solutions</title>
        <meta name="description" content="Discover our micro-saas services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro-saas
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Coming soon - We're working on this page.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;

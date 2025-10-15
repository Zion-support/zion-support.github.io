'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Docs page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Docs
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocsPage;

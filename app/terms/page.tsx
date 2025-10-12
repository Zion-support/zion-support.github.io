'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Terms page" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page is under construction. Please check back soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsPage;

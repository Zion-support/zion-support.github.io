'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aicybersecuritysuitePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Professional Ai Cybersecurity Suite services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Cybersecurity Suite
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional Ai Cybersecurity Suite services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default aicybersecuritysuitePage;

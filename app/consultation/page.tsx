'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our AI and technology experts. Get personalized recommendations for your business." />
        <meta name="keywords" content="consultation, AI consultation, technology consultation, free consultation" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Consultation
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Coming soon - Schedule a free consultation with our AI and technology experts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;
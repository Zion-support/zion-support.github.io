'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service for using our AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="text-gray-300 text-lg space-y-4">
            <p>These terms of service govern your use of our AI and IT solutions.</p>
            <p>By using our services, you agree to be bound by these terms.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
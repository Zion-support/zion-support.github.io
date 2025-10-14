import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service for Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please read our terms of service carefully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service for Zion Tech Group website and services." />
        <meta name="keywords" content="terms of service, terms, legal" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Terms of Service</span>
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg">
              Terms of service will be available soon. Please contact us for more information about our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
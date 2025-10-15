import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Terms of Service</h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="mb-4">Last updated: January 15, 2024</p>
            <p className="mb-6">These Terms of Service govern your use of our website and services.</p>
            <p className="mb-4">By using our services, you agree to these terms.</p>
            <p className="mb-4">For questions about these terms, please contact us at legal@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;

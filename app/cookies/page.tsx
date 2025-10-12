'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="text-gray-300 text-lg space-y-4">
            <p>We use cookies to enhance your experience and analyze our website traffic.</p>
            <p>You can control cookie settings through your browser preferences.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
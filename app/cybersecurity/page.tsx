import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cybersecurity Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            Protect your business with our advanced cybersecurity solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;

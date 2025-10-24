'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />
        <meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecurityConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity consulting solutions and services" />
        <meta name="keywords" content="cybersecurity, consulting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Cybersecurity Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cybersecurity consulting solutions and services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityConsultingPage;

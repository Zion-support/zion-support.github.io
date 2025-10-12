'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Ai Analytics services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-analytics, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Ai Analytics
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ai analytics services by Zion Tech Group.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">We're working on bringing you comprehensive ai analytics solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAnalyticsPage;
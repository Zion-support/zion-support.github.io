'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Agricultural Intelligence <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered agricultural intelligence solutions for modern farming operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;
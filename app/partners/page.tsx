'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Partners - Zion Tech Group AI and IT Solutions" />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partners
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Partners - Zion Tech Group AI and IT Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;

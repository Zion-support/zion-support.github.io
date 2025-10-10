'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="IT services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">IT Services</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;

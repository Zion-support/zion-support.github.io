'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group services" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SupportPage;

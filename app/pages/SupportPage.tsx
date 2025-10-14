import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group services" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Support</h1>
          <p className="text-lg text-gray-300">
            This is the Support page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
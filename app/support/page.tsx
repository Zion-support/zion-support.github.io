import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group support page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
          <p className="text-xl text-gray-600">
            Welcome to our support page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

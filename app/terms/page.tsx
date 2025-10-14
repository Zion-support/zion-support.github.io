import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group terms page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms</h1>
          <p className="text-xl text-gray-600">
            Welcome to our terms page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

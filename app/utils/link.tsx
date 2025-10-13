'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LinkPageProps {
  // Add any props if needed
}

const LinkPage: React.FC<LinkPageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Link Services - Zion Tech Group</title>
        <meta name="description" content="Professional link services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Link Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional link solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
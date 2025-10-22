'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Support Services - Zion Tech Group</title>
        <meta name="description" content="Get reliable IT support and maintenance services to keep your systems running smoothly and efficiently." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">IT Support Services</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Get reliable IT support and maintenance services to keep your systems running smoothly.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItSupportPage;
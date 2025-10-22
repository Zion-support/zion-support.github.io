'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Build robust and scalable IT infrastructure with our comprehensive technology solutions and expert support." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">IT Infrastructure Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Build robust and scalable IT infrastructure with our comprehensive technology solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItInfrastructurePage;
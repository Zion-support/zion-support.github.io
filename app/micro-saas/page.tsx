'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and scale micro SaaS applications with our specialized development and deployment solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Micro SaaS Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Build and scale micro SaaS applications with our specialized development solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;
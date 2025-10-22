'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and scale micro SaaS applications with our specialized development and deployment services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and scale micro SaaS applications with our specialized development and deployment services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
              <p className="text-gray-600">Quickly develop and deploy micro SaaS applications.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">Build scalable, cloud-native applications that grow with your business.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-600">Integrate with existing systems and third-party services.</p>
            </div>
          </div>
        </div> (Fix merge conflicts in TypeScript files)
      </div>
    </>
  );
};

export default MicroSaasPage;
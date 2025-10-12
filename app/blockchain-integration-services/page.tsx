'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlockchainIntegrationServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Integration Services - Zion Tech Group</title>
        <meta name="description" content="Blockchain Integration Services services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="blockchain-integration-services, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Integration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional blockchain integration services services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced blockchain integration services solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainIntegrationServicesPage;
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlockchainIntegrationServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blockchain Integration Services - Coming Soon | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Blockchain integration services coming soon. Integrate blockchain technology into your business with our expert services." 
        />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blockchain Integration Services</h1>
          <p className="text-gray-300 mb-8">Coming Soon</p>
          <p className="text-gray-400">This service is under development</p>
        </div>
      </div>
    </div>
  );
}
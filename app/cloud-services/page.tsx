import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Comprehensive Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert cloud services including migration, infrastructure management, and optimization. Secure, scalable, and cost-effective cloud solutions for your business." />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive cloud solutions for modern businesses
          </p>
        </div>
      </div>
    </div>
  );
}
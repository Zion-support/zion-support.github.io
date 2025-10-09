import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Scalable Cloud Solutions</title>
        <meta name="description" content="Scalable cloud infrastructure and migration services for modern businesses. Starting at $799/month." />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Scalable cloud infrastructure and migration services for modern businesses 
                with auto-scaling and disaster recovery capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;
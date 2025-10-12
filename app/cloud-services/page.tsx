import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Learn more about our cloud services solutions at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Services <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cloud services solutions
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              This page is coming soon. Contact us to learn more about our cloud services solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;

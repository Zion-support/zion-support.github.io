import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            IT Services
          </h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="text-lg mb-6">
              Comprehensive IT services to support your business technology needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;
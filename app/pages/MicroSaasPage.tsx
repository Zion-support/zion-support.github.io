import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Micro SaaS Solutions
          </h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="text-lg mb-6">
              Discover our innovative micro SaaS solutions designed to streamline your business operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;
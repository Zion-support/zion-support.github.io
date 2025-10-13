import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CloudInfrastructurePage - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group CloudInfrastructurePage page" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CloudInfrastructurePage
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;

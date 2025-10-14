import React from 'react';
import { Helmet } from 'react-helmet-async';
const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services from Zion Tech Group including infrastructure management, support, and digital transformation." />
        <meta name="keywords" content="IT services, infrastructure management, IT support, digital transformation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure and drive business growth.
          </p>
        </div>
      </div>
    </>
  );
};
export default ITServicesPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Cloud infrastructure solutions from Zion Tech Group including AWS, Azure, and Google Cloud services." />
        <meta name="keywords" content="cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud infrastructure solutions designed to scale your business with AWS, Azure, and Google Cloud platforms.
          </p>
        </div>
      </div>
    </>
  );
};
export default CloudInfrastructurePage;
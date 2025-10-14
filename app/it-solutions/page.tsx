import React from 'react';
import { Helmet } from 'react-helmet-async';
const ITSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions from Zion Tech Group including infrastructure, cloud services, and digital transformation." />
        <meta name="keywords" content="IT solutions, infrastructure, cloud services, digital transformation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive IT solutions designed to accelerate your business growth.
          </p>
        </div>
      </div>
    </>
  );
};
export default ITSolutionsPage;
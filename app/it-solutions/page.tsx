import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions and services" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">IT Solutions</h1>
          <p className="text-lg text-gray-300">
            Explore our comprehensive IT solutions designed to modernize your infrastructure.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;


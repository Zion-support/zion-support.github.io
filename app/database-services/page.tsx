import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Service - Zion Tech Group</title>
        <meta name="description" content="Professional IT services and solutions for businesses." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-6">IT Service</h1>
        <p className="text-xl text-gray-300">Coming Soon - Professional IT solutions</p>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Micro SaaS Solutions</h1>
          <p className="text-lg text-gray-300">
            Discover our innovative micro SaaS solutions designed for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;


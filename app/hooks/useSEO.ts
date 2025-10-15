import React from 'react';
import { Helmet } from 'react-helmet-async';

const UseSEOTsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>UseSEO.Ts | Zion Tech Group</title>
        <meta name="description" content="Professional useseo.ts services and solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">UseSEO.Ts</h1>
          <p className="text-xl text-gray-300">Professional useseo.ts services and solutions.</p>
        </div>
      </div>
    </>
  );
};

export default UseSEOTsPage;
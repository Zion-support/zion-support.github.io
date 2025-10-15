import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Micro SaaS solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-300">Micro SaaS solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSPage;
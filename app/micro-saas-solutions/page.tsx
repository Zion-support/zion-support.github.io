import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS solutions from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Micro SaaS Solutions</h1>
          <p className="text-lg text-gray-300">
            Discover our micro SaaS solutions and services.
          </p>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;

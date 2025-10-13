import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ServicesPage - Zion Tech Group</title>
        <meta name="description" content="ServicesPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">ServicesPage</h1>
          <p className="text-lg text-gray-300">
            This is the ServicesPage page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

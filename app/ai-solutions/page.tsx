import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="AI solutions from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">AI Solutions</h1>
          <p className="text-lg text-gray-300">
            Discover our AI solutions and services.
          </p>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;

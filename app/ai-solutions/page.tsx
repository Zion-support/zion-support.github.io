import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai-solutions - Zion Tech Group</title>
        <meta name="description" content="Ai-solutions - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Ai-solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Welcome to Ai-solutions at Zion Tech Group.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;

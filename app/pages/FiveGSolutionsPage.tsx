import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta name="description" content="5G solutions for next-generation connectivity" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1>
          <p className="text-xl text-gray-300">5G solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
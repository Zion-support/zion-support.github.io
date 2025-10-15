import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cloud Solutions</h1>
          <p className="text-xl text-gray-300">Comprehensive cloud solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;
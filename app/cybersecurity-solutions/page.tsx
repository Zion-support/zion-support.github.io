import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CybersecuritySolutions - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group cybersecurity-solutions services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">CybersecuritySolutions</h1>
            <p className="text-xl text-gray-300 mb-8">Zion Tech Group cybersecurity-solutions solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;

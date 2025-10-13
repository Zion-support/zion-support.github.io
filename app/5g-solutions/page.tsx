import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="5G Solutions solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutions;

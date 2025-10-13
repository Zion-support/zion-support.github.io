import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGNetworkInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network infrastructure solutions for modern businesses. Build robust and scalable 5G networks." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">5G Network Infrastructure</h1>
          <p className="text-gray-300 text-lg">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default FiveGNetworkInfrastructurePage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGPrivateNetworksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G private network solutions for modern businesses. Secure and dedicated 5G networks for enterprise use." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">5G Private Networks</h1>
          <p className="text-gray-300 text-lg">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default FiveGPrivateNetworksPage;
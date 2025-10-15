import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Real Estate - Zion Tech Group</title>
        <meta name="description" content="Professional ai real estate services by Zion Tech Group." />
      </Helmet>
      <SEOHead
        title="Ai Real Estate - Zion Tech Group"
        description="Professional ai real estate services by Zion Tech Group."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Ai Real Estate</h1>
          <p className="text-gray-300">Professional ai real estate services coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Page;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiEmailMarketingPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group</title>
        <meta name="description" content="Professional AI email marketing solutions and services" />
        <meta name="keywords" content="ai, email, marketing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              AI Email Marketing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AI email marketing solutions and services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiEmailMarketingPage;

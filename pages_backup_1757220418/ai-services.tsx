import React from 'react';
import Head from 'next/head';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI services and solutions" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Coming Soon - AI Services Page
          </p>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
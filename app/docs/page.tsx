'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Docs services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="docs, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Docs
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional docs services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced docs solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
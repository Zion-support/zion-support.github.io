'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Learn about our strategic partnerships and how we collaborate with leading technology companies to deliver exceptional solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about our strategic partnerships and how we collaborate with leading technology companies to deliver exceptional solutions.
            </p>
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">Partnership information coming soon</div>
              <p className="text-gray-500">We're building strategic partnerships with industry leaders</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MicroSaasPage() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Micro SaaS Services</h1>
          <p className="text-xl text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}
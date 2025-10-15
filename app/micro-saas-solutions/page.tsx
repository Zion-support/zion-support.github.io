import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MicroSAASSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-300">Micro SaaS solutions for modern businesses.</p>
          </div>
        </div>
      </div>
    </>
  );
}
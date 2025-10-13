import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function aiexpensetracker() {
  return (
    <>
      <Helmet>
        <title>ai expense tracker - Zion Tech Group</title>
        <meta name="description" content="Professional ai expense tracker services for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">ai expense tracker</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
'use client';
import React from 'react';
<<<<<<< HEAD

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">MicroSaaSPage</h1>
          <p className="text-gray-300 text-lg">This page is under development.</p>
        </div>
      </div>
    </div>
=======
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Pages - Zion Tech Group</title>
        <meta name="description" content="Professional pages services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pages</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  );
}
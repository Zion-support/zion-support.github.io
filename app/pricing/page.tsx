<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Pricing plans for Zion Tech Group AI solutions, cybersecurity, and cloud services." />
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Professional pricing services by Zion Tech Group." />
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
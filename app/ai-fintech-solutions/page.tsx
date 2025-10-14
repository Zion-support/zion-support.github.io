<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Page() {
  return (
    <React.Fragment>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
      <Helmet>
        <title>Ai Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ai fintech solutions services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Ai Fintech Solutions</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
<<<<<<< HEAD
    </React.Fragment>
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  );
}
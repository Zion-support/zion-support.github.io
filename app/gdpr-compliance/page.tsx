<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GdprCompliancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gdpr Compliance - Zion Tech Group</title>
        <meta name="description" content="Gdpr Compliance services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="gdpr-compliance, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Gdpr Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional gdpr compliance services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced gdpr compliance solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
};

export default GdprCompliancePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070

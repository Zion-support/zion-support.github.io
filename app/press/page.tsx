<<<<<<< HEAD
<<<<<<< HEAD
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

const PressPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Press - Zion Tech Group</title>
        <meta name="description" content="Press services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="press, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Press
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional press services by Zion Tech Group.
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PressPage() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Press() {
>>>>>>> cursor/fix-errors-and-merge-to-main-5443
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Press - Zion Tech Group</title>
        <meta name="description" content="Advanced press solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced press solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
<<<<<<< HEAD
=======

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
};

export default PressPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Press
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced press solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5443

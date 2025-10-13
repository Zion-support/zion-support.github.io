import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function gdpr() {
=======
export default function GdprPage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Gdpr - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Gdpr solutions by Zion Tech Group" />
=======
        <meta name="description" content="Advanced gdpr solutions by Zion Tech Group" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold mb-8">Gdpr</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gdpr
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
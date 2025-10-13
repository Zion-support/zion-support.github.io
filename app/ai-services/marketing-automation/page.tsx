import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function marketingAutomation() {
=======
export default function Page() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Marketing Automation</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
=======
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive page solutions designed to meet your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
          </p>
        </div>
      </div>
    </div>
  );
}
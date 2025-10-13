import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function edgeComputing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Edge Computing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Edge Computing</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function EdgeComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced edge computing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Edge Computing
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
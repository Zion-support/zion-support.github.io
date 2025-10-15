import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function EdgeComputingPage() {
  return (
    <>
      <Helmet>
        <title>Edge Computing | Zion Tech Group</title>
        <meta name="description" content="Edge Computing solutions and services from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Edge Computing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our edge computing solutions and services designed to help your business grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
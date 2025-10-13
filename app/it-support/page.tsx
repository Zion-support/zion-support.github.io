import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function itSupport() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>It Support - Zion Tech Group</title>
        <meta name="description" content="It Support solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">It Support</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function LayoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Layout - Zion Tech Group</title>
        <meta name="description" content="Advanced Layout solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Layout
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
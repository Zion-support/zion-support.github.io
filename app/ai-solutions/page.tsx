import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AISolutionsPage() {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Solutions</h1>
          <p className="text-lg text-gray-600">
            Discover our cutting-edge AI solutions designed for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
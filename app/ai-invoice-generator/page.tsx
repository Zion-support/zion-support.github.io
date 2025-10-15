import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiinvoicegeneratorPage() {
  return (
    <>
      <Helmet>
        <title>Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Professional ai invoice generator solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Invoice Generator</h1>
          <p className="text-lg text-gray-600">
            Professional ai invoice generator solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}

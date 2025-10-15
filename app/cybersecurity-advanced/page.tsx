import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CybersecurityAdvancedPage() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Advanced - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity advanced solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cybersecurity Advanced</h1>
          <p className="text-lg text-gray-600">
            Professional cybersecurity advanced solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
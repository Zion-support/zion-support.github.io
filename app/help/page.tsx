import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HelpPage() {
  return (
    <>
      <Helmet>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Help & Support</h1>
          <p className="text-lg text-gray-600">
            Get help and support for our services and solutions.
          </p>
        </div>
      </div>
    </>
  );
}
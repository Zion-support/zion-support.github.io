import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and usage policies." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Read our terms and conditions for using our services.
          </p>
        </div>
      </div>
    </>
  );
}
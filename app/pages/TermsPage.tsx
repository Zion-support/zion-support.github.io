import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and usage policies." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              Read our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </>;
);
}
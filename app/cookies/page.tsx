import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about our cookie usage and preferences." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Information about how we use cookies on our website.
          </p>
        </div>
      </div>
    </>
  );
}
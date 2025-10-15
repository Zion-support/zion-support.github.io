import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h1>
          <p className="text-lg text-gray-600">
            Meet the talented professionals behind our success.
          </p>
        </div>
      </div>
    </>
  );
}
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Professional pricing services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional pricing solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MicroSAASSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for niche markets." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Micro SaaS Solutions</h1>
          <p className="text-lg text-gray-600">
            Specialized micro SaaS solutions designed for niche markets and specific needs.
          </p>
        </div>
      </div>
    </>
  );
}
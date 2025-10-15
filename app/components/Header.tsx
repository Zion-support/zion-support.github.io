import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Header() {
  return (
    <>
      <Helmet>
        <title>Header - Zion Tech Group</title>
        <meta name="description" content="Professional Header services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Header
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional Header services delivered with excellence by our expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIServicesPage() {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services to transform your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Services</h1>
          <p className="text-lg text-gray-600">
            Transform your business with our comprehensive AI solutions.
          </p>
        </div>
      </div>
    </>
  );
}
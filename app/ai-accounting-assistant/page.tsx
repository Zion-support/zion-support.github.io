import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiAccountingAssistantPage() {
  return (
    <>
      <Helmet>
        <title>Ai Accounting Assistant | Zion Tech Group</title>
        <meta name="description" content="Ai Accounting Assistant solutions and services from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ai Accounting Assistant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our ai accounting assistant solutions and services designed to help your business grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
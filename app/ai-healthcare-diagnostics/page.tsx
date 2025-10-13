import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiHealthcareDiagnosticsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Ai Healthcare Diagnostics solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Healthcare Diagnostics</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
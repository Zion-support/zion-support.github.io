import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiCodeAssistantPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced ai code assistant pro solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ai Code Assistant Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced ai code assistant pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}
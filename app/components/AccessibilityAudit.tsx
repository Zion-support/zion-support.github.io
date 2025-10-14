import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AccessibilityAudit() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Accessibility Audit - Zion Tech Group</title>
        <meta name="description" content="Professional accessibility audit services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Accessibility Audit
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional accessibility audit solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Comprehensive documentation for all our AI and IT solutions.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-6">
            Learn how to integrate our solutions into your business with our step-by-step guides.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Reference</h2>
          <p className="text-gray-600 mb-6">
            Complete API documentation for all our services and endpoints.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Need help? Contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
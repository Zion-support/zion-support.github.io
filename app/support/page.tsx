import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group's AI and IT solutions. 24/7 customer support available." />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            We provide comprehensive support for all our AI and IT solutions. Our team is here to help you succeed.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you with any questions or issues you may have.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For support, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
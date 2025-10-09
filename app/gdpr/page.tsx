import React from 'react';
import { Helmet } from 'react-helmet-async';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance and data protection measures." />
        <link rel="canonical" href="https://ziontechgroup.com/gdpr" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Zion Tech Group is fully compliant with the General Data Protection Regulation (GDPR) and committed to protecting your personal data.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
          <p className="text-gray-600 mb-6">
            We implement robust data protection measures to ensure your personal information is secure and handled in accordance with GDPR requirements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-6">
            Under GDPR, you have the right to access, rectify, erase, and port your personal data. Contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For GDPR-related inquiries, contact our Data Protection Officer at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's security measures and data protection practices." />
        <link rel="canonical" href="https://ziontechgroup.com/security" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            At Zion Tech Group, we take security seriously and implement comprehensive measures to protect your data and systems.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Measures</h2>
          <p className="text-gray-600 mb-6">
            We employ industry-standard security practices including encryption, access controls, and regular security audits.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For security-related inquiries, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
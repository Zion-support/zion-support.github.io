import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Privacy Policy</h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="mb-4">Last updated: January 15, 2024</p>
            <p className="mb-6">This Privacy Policy explains how we collect, use, and protect your information.</p>
            <p className="mb-4">We are committed to protecting your privacy and personal data.</p>
            <p className="mb-4">For questions about this policy, please contact us at privacy@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

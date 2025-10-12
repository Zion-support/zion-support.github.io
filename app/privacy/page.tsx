'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Read our privacy policy to understand how we protect your data." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="text-gray-300 text-lg space-y-4">
            <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.</p>
            <p>We are committed to protecting your personal data and ensuring transparency in our data practices.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
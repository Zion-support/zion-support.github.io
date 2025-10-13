import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy policy for Zion Tech Group website and services." />
        <meta name="keywords" content="privacy policy, data protection, privacy" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Privacy Policy</span>
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg">
              This privacy policy will be available soon. Please contact us for more information about how we handle your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
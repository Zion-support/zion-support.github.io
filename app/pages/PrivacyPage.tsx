import React from 'react';
import { Helmet } from 'react-helmet-async';

constPrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and data protection practices" />
        <meta name="keywords" content="privacy policy, data protection, privacy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h-1 className="text-4-xl font-bold text-white mb-8">Privacy Policy</h-1>
            <div className="text-gray-400">
              <p>Privacypolicycontent coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
exportdefault Privacy Page;
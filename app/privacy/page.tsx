import React from 'react';
import { Helmet  } from 'react-helmet-async';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group privacy policy and data protection information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-4xl">
            <p className="text-gray-300 text-lg mb-6">
              This privacy policy is under construction. Please check back later for our complete privacy policy.
            </p>
            <p className="text-gray-300">
              For any privacy-related questions, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}';

export default PrivacyPage';


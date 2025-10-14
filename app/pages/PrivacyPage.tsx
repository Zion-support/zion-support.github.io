import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and data protection practices" />
        <meta name="keywords" content="privacy policy, data protection, privacy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center">
            <h1 className="text-4xl font-boldtext-white mb-8">Privacy Policy</h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Our privacy policy and data protection practices
            </p>
            <div className="text-gray-4 0 0">
              <p>Privacy policy content coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
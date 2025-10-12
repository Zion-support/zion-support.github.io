import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group website and services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our privacy policy and data protection practices
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              Our privacy policy is coming soon. Contact us for more information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;

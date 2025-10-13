import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Information We Collect</h2>
                <p className="text-gray-300">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">How We Use Your Information</h2>
                <p className="text-gray-300">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Information Sharing</h2>
                <p className="text-gray-300">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@ziontechgroup.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
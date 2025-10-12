import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how we protect your privacy and data at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-cyan-400">Policy</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at 
                  <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
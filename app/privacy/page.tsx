import React from 'react';
import { Helmet  } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            
            <div className="max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Account credentials and preferences</li>
                  <li>Communication records and support requests</li>
                  <li>Usage data and analytics information</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-cyan-400 mt-2">
                  Email: privacy@ziontechgroup.com<br />
                  Phone: +1 302 464 0950
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
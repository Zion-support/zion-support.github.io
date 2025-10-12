import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const PrivacyPage: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn about how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, GDPR, privacy rights, data security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Privacy <span className="text-cyan-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-16 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and company information.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and ensure the security of our platform.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy, please contact us at 
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
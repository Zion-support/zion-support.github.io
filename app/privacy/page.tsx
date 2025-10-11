'use client';
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Name and contact information</li>
              <li>• Business information and requirements</li>
              <li>• Payment and billing information</li>
              <li>• Communication preferences</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• To provide and deliver our services</li>
              <li>• To process transactions and send related information</li>
              <li>• To send technical notices and support messages</li>
              <li>• To respond to your comments and questions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            <p className="text-gray-300">
              We may share your information in the following circumstances:
            </p>
            <ul className="text-gray-300 space-y-2 mt-4">
              <li>• With your explicit consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and prevent fraud</li>
              <li>• In connection with a business transfer</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-300">
              However, no method of transmission over the internet or electronic storage is 100% secure, 
              so we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="text-gray-300 space-y-2">
              <p>Email: privacy@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Last updated: January 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

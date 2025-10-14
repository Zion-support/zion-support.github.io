import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide and deliver our AI and IT solutions</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to access, update, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1-302-464-0950
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
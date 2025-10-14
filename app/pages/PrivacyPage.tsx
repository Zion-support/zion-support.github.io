import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR compliance" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +1-302-464-0950
                </p>
                <p className="text-gray-300">
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

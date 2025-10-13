'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Name, email address, and contact information</li>
              <li>Company information and job title</li>
              <li>Payment and billing information</li>
              <li>Communications with us</li>
              <li>Information you provide in surveys or feedback forms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist us in operating our business</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Delete your personal information</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to provide our services 
              and fulfill the purposes outlined in this privacy policy, unless a longer retention 
              period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. International Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data during such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                <strong>Zion Tech Group</strong><br />
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                Email: privacy@ziontechgroup.com<br />
                Phone: +1-302-464-0950
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
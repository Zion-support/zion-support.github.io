import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Privacy: NextPage = () => {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information."
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Personal information (name, email address, phone number)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Website usage data and analytics</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>To provide and improve our services</li>
                <li>To communicate with you about our services</li>
                <li>To process transactions and payments</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
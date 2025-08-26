import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<<< HEAD:src/pages/Terms.tsx.backup.1756208062
=======
import Link from 'next/link';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e899

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Learn about the terms and conditions governing the use of our services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group" />
      </Helmet>
      
========
const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://ziontechgroup.com/terms"
      />
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/Terms.tsx
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700">
                  These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service") operated by Zion Tech Group ("Company," "we," "us," or "our").
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  Zion Tech Group provides technology solutions and services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>AI and machine learning solutions</li>
                  <li>Cybersecurity services</li>
                  <li>Cloud computing and DevOps</li>
                  <li>IT infrastructure management</li>
                  <li>Digital transformation consulting</li>
                  <li>Software development and consulting</li>
                  <li>Talent recruitment and placement</li>
                  <li>Technology marketplace services</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our Service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
                <p className="text-gray-700">
                  You must be at least 18 years old to create an account and use our services.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Attempt to reverse engineer or compromise our security</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-700 mb-4">
                  You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
                </p>
                <p className="text-gray-700">
                  By using our Service, you consent to the collection and use of information as detailed in our Privacy Policy.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  For paid services, the following terms apply:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>All fees are due upon receipt unless otherwise specified</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Payment is non-refundable unless otherwise stated</li>
                  <li>Late payments may result in service suspension</li>
                  <li>We use secure third-party payment processors</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Availability and Modifications</h2>
                <p className="text-gray-700 mb-4">
                  We strive to maintain high service availability but do not guarantee uninterrupted access. We may:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Modify or discontinue features temporarily or permanently</li>
                  <li>Perform maintenance that may affect service availability</li>
                  <li>Update the Service to improve functionality and security</li>
                  <li>Suspend access for violations of these Terms</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="text-gray-700">
                  Our total liability to you for any claims arising from the use of our Service shall not exceed the amount you paid us in the twelve months preceding the claim.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties that the Service will be uninterrupted or error-free</li>
                  <li>Warranties regarding the accuracy or reliability of information</li>
                  <li>Warranties that defects will be corrected</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 mb-4">
                  You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit or transmit</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including without limitation if you breach these Terms.
                </p>
                <p className="text-gray-700 mb-4">
                  Upon termination, your right to use the Service will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 mb-4">
                  Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in Delaware, in accordance with the rules of the American Arbitration Association.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-700">
                  Your continued use of the Service after any changes constitutes acceptance of the new Terms.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Zion Tech Group</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email: <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">legal@ziontechgroup.com</a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Phone: <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 (302) 464-0950</a>
                  </p>
                  <p className="text-gray-700">
                    Address: Delaware, United States
                  </p>
                </div>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                </p>
              </section>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Terms;
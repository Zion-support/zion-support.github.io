import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, AI services, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">2. Description of Service</h2>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cloud infrastructure, cybersecurity solutions, and digital transformation services. We reserve the right to modify or discontinue the service at any time without notice.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">3. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">Users are responsible for:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of their account credentials</li>
                  <li>Using the service in compliance with applicable laws and regulations</li>
                  <li>Notifying us immediately of any unauthorized use of their account</li>
                  <li>Ensuring their use of the service does not violate any third-party rights</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">4. Intellectual Property Rights</h2>
                <p className="text-gray-300 mb-6">
                  All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on or through our service are the property of Zion Tech Group or their respective owners. Users may not use, reproduce, or distribute any content without prior written permission.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">5. Privacy Policy</h2>
                <p className="text-gray-300 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">6. Payment Terms</h2>
                <p className="text-gray-300 mb-4">Payment terms include:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Fees are due in advance unless otherwise agreed</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change our fees at any time with 30 days notice</li>
                  <li>Late payments may result in service suspension</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">8. Indemnification</h2>
                <p className="text-gray-300 mb-6">
                  You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your use of the service.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">9. Termination</h2>
                <p className="text-gray-300 mb-6">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">10. Governing Law</h2>
                <p className="text-gray-300 mb-6">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">11. Changes to Terms</h2>
                <p className="text-gray-300 mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">12. Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p className="text-gray-300 mb-2"><strong>Phone:</strong> +1-302-464-0950</p>
                  <p className="text-gray-300"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
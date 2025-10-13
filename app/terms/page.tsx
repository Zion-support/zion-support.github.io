'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group's AI and IT solutions. Read our terms and conditions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Description</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group provides AI and IT solutions including but not limited to artificial intelligence services, cybersecurity solutions, cloud services, and technical consulting. We reserve the right to modify or discontinue any service at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              Users are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of their account credentials</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Not using our services for any illegal or unauthorized purpose</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Links</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Modifications</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                <strong>Zion Tech Group</strong><br />
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                Email: legal@ziontechgroup.com<br />
                Phone: +1-302-464-0950
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
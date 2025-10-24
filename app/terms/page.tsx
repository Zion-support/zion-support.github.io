import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Terms of Service for Zion Tech Group - Our terms and conditions for using our services.',
  robots: 'noindex, nofollow',
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="text-gray-300 space-y-6">
            <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Zion Tech Group provides AI and IT solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Artificial Intelligence consulting and implementation</li>
                <li>IT infrastructure and cloud solutions</li>
                <li>Software development and customization</li>
                <li>Data analytics and business intelligence</li>
                <li>Cybersecurity services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">Users are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using the service for illegal or unauthorized purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Service Availability</h2>
              <p className="mb-4">
                We strive to maintain high service availability but do not guarantee uninterrupted access. 
                We reserve the right to modify or discontinue services with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                All content, trademarks, and intellectual property rights in our services are owned by 
                Zion Tech Group or our licensors. Users may not reproduce or distribute our content 
                without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, 
                for any reason whatsoever, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which Zion Tech Group operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p>Email: legal@ziontechgroup.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
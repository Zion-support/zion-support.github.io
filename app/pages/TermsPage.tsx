import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, ScaleIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the conditions for using Zion Tech Group's services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6">
                <ScaleIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Please read these terms carefully before using our services.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Last updated: October 13, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DocumentTextIcon className="w-4 h-4" />
                  <span>Version 2.1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                      the terms and provision of this agreement. If you do not agree to abide by the above, 
                      please do not use this service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Service Availability</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We strive to provide continuous service availability, but we do not guarantee that our services 
                      will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                      any part of our services at any time without notice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use our services in compliance with applicable laws</li>
                      <li>Not engage in any illegal or unauthorized activities</li>
                      <li>Respect the intellectual property rights of others</li>
                      <li>Not attempt to gain unauthorized access to our systems</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Payment for our services is due according to the terms specified in your service agreement. 
                      We accept various payment methods and reserve the right to change our pricing at any time 
                      with 30 days' notice to existing customers.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All fees are non-refundable unless otherwise specified</li>
                      <li>Late payments may result in service suspension</li>
                      <li>You are responsible for all applicable taxes</li>
                      <li>Refunds are subject to our refund policy</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      All content, trademarks, service marks, trade names, logos, and other intellectual property 
                      displayed on our website are the property of Zion Tech Group or their respective owners. 
                      You may not use, reproduce, or distribute any content without our written permission.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                      use of our services, to understand our practices regarding the collection and use of your 
                      personal information.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                      or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                      damages, including without limitation, loss of profits, data, use, goodwill, or other 
                      intangible losses, resulting from your use of our services.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We may terminate or suspend your account and bar access to our services immediately, without 
                      prior notice or liability, under our sole discretion, for any reason whatsoever and without 
                      limitation, including but not limited to a breach of the Terms.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      These Terms shall be interpreted and governed by the laws of the State of California, 
                      without regard to its conflict of law provisions. Our failure to enforce any right or 
                      provision of these Terms will not be considered a waiver of those rights.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                      If a revision is material, we will provide at least 30 days' notice prior to any new terms 
                      taking effect.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-slate-800 rounded-lg p-6">
                      <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-gray-300 mb-8">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Legal Team
              </Link>
              <Link
                to="/privacy"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

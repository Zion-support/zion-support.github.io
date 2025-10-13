import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, DocumentTextIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Read our comprehensive privacy policy and learn how we protect your data at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We collect information you provide directly to us, such as when you create an account, 
                      use our services, or contact us for support. This may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Communications with our support team</li>
                      <li>Feedback and survey responses</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Develop new products and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and prevent fraud</li>
                      <li>With trusted service providers who assist in our operations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication systems</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate or incomplete data</li>
                      <li>Delete your personal information</li>
                      <li>Object to processing of your data</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                      and provide personalized content. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-slate-800 rounded-lg p-6">
                      <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-300 mb-8">
              We're here to help. Contact our privacy team for any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/terms"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

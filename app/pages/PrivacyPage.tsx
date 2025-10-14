import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR, privacy rights" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Use our services or contact us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  This may include your name, email address, phone number, company information, and any other information you choose to provide.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer</li>
                  <li>With service providers who assist us in operating our business</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">4. Data Security</h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 mb-6">
                  We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">6. Your Rights and Choices</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">7. Data Retention</h2>
                <p className="text-gray-300 mb-6">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">8. International Data Transfers</h2>
                <p className="text-gray-300 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are subject to appropriate safeguards and comply with applicable data protection laws.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">9. Children's Privacy</h2>
                <p className="text-gray-300 mb-6">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">10. Changes to This Policy</h2>
                <p className="text-gray-300 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">11. Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
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

export default PrivacyPage;
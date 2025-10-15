import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, privacy, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <CalendarIcon className="w-5 h-5" />
              <span>Last updated: January 1, 2024</span>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Create an account or profile</li>
                  <li>Use our services or contact us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  This may include your name, email address, phone number, company information, and any other information you choose to provide.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transfer</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">5. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-6">
                  We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">7. Data Retention</h2>
                <p className="text-gray-300 mb-6">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">8. International Transfers</h2>
                <p className="text-gray-300 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. Children's Privacy</h2>
                <p className="text-gray-300 mb-6">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">10. Changes to This Policy</h2>
                <p className="text-gray-300 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: +1-302-464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our privacy practices or your personal information, please don't hesitate to contact us.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Contact Us <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <CalendarIcon className="w-5 h-5" />
              <span>Last updated: January 1, 2024</span>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Service Availability</h2>
                <p className="text-gray-300 mb-6">
                  We strive to provide continuous service availability, but we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">4. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Maintaining the confidentiality of their account information</li>
                  <li>All activities that occur under their account</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for any unlawful or prohibited purpose</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property</h2>
                <p className="text-gray-300 mb-6">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. Privacy Policy</h2>
                <p className="text-gray-300 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">8. Governing Law</h2>
                <p className="text-gray-300 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. Changes to Terms</h2>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">10. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our terms of service, please don't hesitate to contact us.
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

export default TermsPage;

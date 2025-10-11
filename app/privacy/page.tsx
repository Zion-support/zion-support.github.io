'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group - How we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR, CCPA" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Last updated: December 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-lg p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Account information (username, password)</li>
                    <li>Payment information (billing address, payment method)</li>
                    <li>Communication data (messages, feedback)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-gray-300 mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="text-gray-300">
                    <p>Email: privacy@ziontechgroup.com</p>
                    <p>Phone: (302) 464-0950</p>
                    <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPage;
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information."
        keywords={['privacy policy', 'data protection', 'personal information', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Last updated: January 2024
            </p>

            <div className="cyber-card p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Business information (company name, job title, industry)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and deliver our AI and IT services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <p className="text-gray-300 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist us in operating our business</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content.
                </p>
                <p className="text-gray-300 mb-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: privacy@ziontechgroup.com</p>
                  <p>Phone: +1 302 464 0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
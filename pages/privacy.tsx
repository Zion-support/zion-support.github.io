import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy - Zion Tech Group">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="prose prose-lg max-w-none">
                  <h2>Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>

                  <h2>How We Use Your Information</h2>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, 
                    process transactions, and communicate with you.
                  </p>

                  <h2>Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>

                  <h2>Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at 
                    privacy@ziontechgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
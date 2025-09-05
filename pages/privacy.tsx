import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <p className="text-gray-700 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> kleber@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify 
                    you of any material changes by posting the new Privacy Policy on this page and updating 
                    the "Last updated" date.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
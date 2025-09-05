import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, User, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information Sharing
              </h2>
              
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-800">
                  <strong>Email:</strong> kleber@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
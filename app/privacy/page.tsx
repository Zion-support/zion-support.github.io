import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
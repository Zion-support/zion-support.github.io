import { motion } from 'framer-motion';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2024
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: kleber@ziontechgroup.com
              <br />
              Phone: +1 302 464 0950
              <br />
              Address: 364 E Main St STE 1008 Middletown DE 19709
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
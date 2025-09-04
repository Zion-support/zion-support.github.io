import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Our terms and conditions for using our services." />
      </Head>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last updated:</strong> January 15, 2024
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-700 mb-6">
                  The materials on our website are provided on an &apos;as is&apos; basis. Zion Tech Group makes 
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                  out of the use or inability to use the materials on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-700 mb-6">
                  The materials appearing on our website could include technical, typographical, or 
                  photographic errors. We do not warrant that any of the materials are accurate, 
                  complete, or current.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                <p className="text-gray-700 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible 
                  for the contents of any such linked site.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                <p className="text-gray-700 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
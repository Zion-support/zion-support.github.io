import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and how we protect your data." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@ziontechgroup.com
              </p>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-yellow-800">
                  <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify 
                  you of any material changes by posting the new Privacy Policy on this page and updating 
                  the "Last updated" date.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
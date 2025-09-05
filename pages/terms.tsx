import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, AlertCircle } from 'lucide-react'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of service and usage agreement for our services." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, 
                applications, and other products and services (collectively, the "Services").
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of Services</h2>
              <p className="text-gray-600 mb-6">
                You may use our Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Services in any way that could damage, disable, or impair our Services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                The Services and their original content, features, and functionality are owned by Zion Tech Group 
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Zion Tech Group, its directors, employees, partners, agents, suppliers, or affiliates 
                be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms, please contact us at legal@ziontechgroup.com
              </p>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-yellow-800">
                  <strong>Note:</strong> These Terms of Service are effective as of the date listed above and will 
                  remain in effect until modified or terminated in accordance with the provisions herein.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Users, Phone, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - AI, IT, and Micro SaaS Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                Our terms and conditions for using Zion Tech Group services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
                <p className="text-gray-700 mb-6">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Availability</h2>
                <p className="text-gray-700 mb-6">
                  We strive to maintain high service availability but do not guarantee uninterrupted access to our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Privacy Policy</h2>
                <p className="text-gray-700 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Questions About Our Terms?</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-indigo-400" />
                  <a href="mailto:legal@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">
                    legal@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-indigo-400" />
                  <a href="tel:+1-555-0123" className="text-indigo-400 hover:text-indigo-300">
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
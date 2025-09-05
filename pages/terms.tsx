import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand your rights and responsibilities when using our services." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, service conditions" />
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Please read these terms carefully before using our services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use License</h2>
                <p className="text-gray-700 mb-6">
                  Permission is granted to temporarily download one copy of the materials on our website 
                  for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer</h2>
                <p className="text-gray-700 mb-6">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitations</h2>
                <p className="text-gray-700 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                  out of the use or inability to use the materials on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy of Materials</h2>
                <p className="text-gray-700 mb-6">
                  The materials appearing on our website could include technical, typographical, or 
                  photographic errors. We do not warrant that any of the materials are accurate, 
                  complete, or current.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Links</h2>
                <p className="text-gray-700 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible 
                  for the contents of any such linked site.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications</h2>
                <p className="text-gray-700 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-700 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of Delaware and you irrevocably submit to the exclusive jurisdiction of the courts 
                  in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
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
                    <strong>Note:</strong> These Terms of Service are effective as of the date listed above and will 
                    remain in effect until modified or terminated in accordance with the provisions herein.
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
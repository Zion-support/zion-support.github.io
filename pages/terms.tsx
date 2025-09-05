import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand your rights and obligations when using Zion Tech Group services." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services.
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                
                <p className="text-gray-600 mb-6">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, 
                  applications, and any related services (collectively, the "Services"). By accessing or using our Services, 
                  you agree to be bound by these Terms.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                  Description of Services
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Zion Tech Group provides technology consulting, AI services, cloud solutions, and software development services. 
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time without notice.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                  User Responsibilities
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Compliance
                      </h3>
                      <p className="text-gray-600">
                        You agree to use our Services in compliance with all applicable laws and regulations. 
                        You are responsible for ensuring that your use of our Services does not violate any third-party rights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Prohibited Uses
                      </h3>
                      <p className="text-gray-600">
                        You may not use our Services for any unlawful purpose or to solicit others to perform unlawful acts. 
                        You may not transmit any viruses, malware, or other harmful code through our Services.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                  Intellectual Property
                </h2>
                
                <p className="text-gray-600 mb-6">
                  All content, features, and functionality of our Services are owned by Zion Tech Group and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                  Limitation of Liability
                </h2>
                
                <p className="text-gray-600 mb-6">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                  Contact Information
                </h2>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Email:</strong> kleber@ziontechgroup.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +1 302 464 0950
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                </div>

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
      </section>
    </div>
  );
}
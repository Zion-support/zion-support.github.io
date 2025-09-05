import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, Users, Mail, Phone } from 'lucide-react';

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and user agreement." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6" />
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
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-6">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, 
                  applications, and any related services provided by us.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Services</h2>
                <p className="text-gray-600 mb-6">
                  You may use our services only in compliance with these Terms and all applicable laws and regulations.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h3>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>• Violating any applicable laws or regulations</li>
                  <li>• Infringing on intellectual property rights</li>
                  <li>• Transmitting harmful or malicious content</li>
                  <li>• Attempting to gain unauthorized access to our systems</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  All content and materials on our services are protected by intellectual property rights and are owned by 
                  Zion Tech Group or our licensors.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy</h2>
                <p className="text-gray-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                  use, and protect your information.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
                <p className="text-gray-600 mb-6">
                  Our services are provided "as is" without warranties of any kind, either express or implied.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, or consequential damages.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      <span>+1 302 464 0950</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mt-8">
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

export default TermsPage;
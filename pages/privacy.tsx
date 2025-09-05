import React from 'react';
import Layout from '../src/components/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <Layout 
      title="Privacy Policy - Zion Tech Group"
      description="Learn about how we collect, use, and protect your personal information in accordance with privacy laws and best practices."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <p className="text-lg text-blue-200">
                Last updated: January 15, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <p className="text-gray-600 mb-6">
                    At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Database className="w-6 h-6 text-blue-600 mr-2" />
                        Personal Information
                      </h3>
                      <p className="text-gray-600">
                        We may collect personal information such as your name, email address, phone number, and company information 
                        when you contact us or use our services.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Eye className="w-6 h-6 text-green-600 mr-2" />
                        Usage Information
                      </h3>
                      <p className="text-gray-600">
                        We collect information about how you use our website, including pages visited, time spent on site, 
                        and other analytics data to improve our services.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Lock className="w-6 h-6 text-purple-600 mr-2" />
                        Technical Information
                      </h3>
                      <p className="text-gray-600">
                        We may collect technical information such as your IP address, browser type, operating system, 
                        and device information for security and functionality purposes.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <UserCheck className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      To provide and improve our services
                    </li>
                    <li className="flex items-start">
                      <UserCheck className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      To communicate with you about our services
                    </li>
                    <li className="flex items-start">
                      <UserCheck className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      To process transactions and payments
                    </li>
                    <li className="flex items-start">
                      <UserCheck className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      To send you marketing communications (with your consent)
                    </li>
                    <li className="flex items-start">
                      <UserCheck className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      To comply with legal obligations
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
                  <p className="text-gray-600 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                    internet or electronic storage is 100% secure.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Access</h3>
                      <p className="text-gray-600">You have the right to request access to your personal information.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction</h3>
                      <p className="text-gray-600">You can request correction of inaccurate personal information.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
                      <p className="text-gray-600">You can request deletion of your personal information.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Portability</h3>
                      <p className="text-gray-600">You can request a copy of your data in a portable format.</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 302 464 0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>

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
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
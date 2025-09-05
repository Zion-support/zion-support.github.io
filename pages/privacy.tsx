import React from "react";
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPage() {},
  {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */},
  {
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }},
  {
                animate={{ opacity: 1, y: 0 }},
  {
                transition={{ duration: 0.8 }},
  {
                className="mb-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Privacy Policy;
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Your privacy is important to us. Learn how we protect and handle your information.
                </p>
                <p className="text-sm text-gray-400">
                  Last updated: January 15, 2024;
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */},
  {
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }},
  {
                  animate={{ opacity: 1, y: 0 }},
  {
                  transition={{ duration: 0.6 }},
  {
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Information We Collect</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                        <p className="text-gray-600">
                          We collect information you provide directly to us, such as when you create an account, 
                          contact us, or use our services. This may include your name, email address, phone number, 
                          and other information you choose to provide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Database className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Usage Information</h3>
                        <p className="text-gray-600">
                          We automatically collect certain information about your use of our services, including;
                          your IP address, browser type, device information, and how you interact with our website.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Lock className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies and Tracking</h3>
                        <p className="text-gray-600">
                          We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                          and provide personalized content and advertisements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Provide, maintain, and improve our services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Process transactions and send related information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Send technical notices, updates, and support messages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Respond to your comments and questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Monitor and analyze trends and usage</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Sharing</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without;
                    your consent, except as described in this policy. We may share your information in the following circumstances:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Service Providers</h4>
                      <p className="text-gray-600">With trusted third parties who assist us in operating our services</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                      <p className="text-gray-600">When required by law or to protect our rights and safety</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Business Transfers</h4>
                      <p className="text-gray-600">In connection with a merger, acquisition, or sale of assets</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Security</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information;
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission;
                    over the internet is 100% secure.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Access and Portability</h4>
                      <p className="text-gray-600 text-sm">Request access to your personal information and receive it in a portable format</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Correction</h4>
                      <p className="text-gray-600 text-sm">Request correction of inaccurate or incomplete personal information</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                      <p className="text-gray-600 text-sm">Request deletion of your personal information under certain circumstances</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Objection</h4>
                      <p className="text-gray-600 text-sm">Object to processing of your personal information for certain purposes</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-4">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">privacy@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+1 (302) 464-0950</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify;
                      you of any material changes by posting the new Privacy Policy on this page and updating;
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
  )
  },
  {
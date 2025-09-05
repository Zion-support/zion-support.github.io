import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's services and website."
      keywords="terms of service, user agreement, service terms, legal terms, user guidelines"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Please read these terms carefully before using our services.
                </p>
                <p className="text-sm text-gray-400">
                  Last updated: January 15, 2024
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Agreement to Terms</h2>
                  
                  <p className="text-gray-600 mb-6">
                    By accessing and using Zion Tech Group's services, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                    prohibited from using our services.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Use License</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Scale className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Permitted Use</h3>
                        <p className="text-gray-600">
                          Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                          website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                          not a transfer of title.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Restrictions</h3>
                        <p className="text-gray-600">
                          You may not modify or copy the materials, use them for any commercial purpose or public display, 
                          or attempt to reverse engineer any software contained on the website.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Availability</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <p className="text-gray-600">
                      We strive to provide continuous service availability, but we do not guarantee that our services 
                      will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                      any part of our services at any time without notice.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">User Responsibilities</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Accurate Information</h4>
                      <p className="text-gray-600">Provide accurate and complete information when using our services</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Compliance</h4>
                      <p className="text-gray-600">Comply with all applicable laws and regulations</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Security</h4>
                      <p className="text-gray-600">Maintain the security of your account credentials</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Prohibited Activities</h4>
                      <p className="text-gray-600">Do not engage in any illegal or unauthorized activities</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Intellectual Property</h2>
                  
                  <p className="text-gray-600 mb-6">
                    All content, trademarks, and other intellectual property on our website and services are owned by 
                    Zion Tech Group or our licensors. You may not use, reproduce, or distribute any content without 
                    our express written permission.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                    of our services, to understand our practices.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Limitation of Liability</h2>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                    <p className="text-gray-600">
                      In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without 
                      limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                      the use or inability to use our services, even if we have been notified orally or in writing of 
                      the possibility of such damage.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Indemnification</h2>
                  
                  <p className="text-gray-600 mb-6">
                    You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, directors, 
                    employees, and agents from and against any claims, damages, obligations, losses, liabilities, 
                    costs, or debt, and expenses (including attorney's fees).
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Termination</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We may terminate or suspend your access to our services immediately, without prior notice or 
                    liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Governing Law</h2>
                  
                  <p className="text-gray-600 mb-6">
                    These Terms shall be interpreted and governed by the laws of the State of Delaware, without 
                    regard to its conflict of law provisions. Our failure to enforce any right or provision of 
                    these Terms will not be considered a waiver of those rights.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Changes to Terms</h2>
                  
                  <p className="text-gray-600 mb-6">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will try to provide at least 30 days notice prior to any new 
                    terms taking effect.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">legal@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+1 (302) 464-0950</span>
                      </div>
                      <div className="text-gray-600 text-sm mt-2">
                        <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p className="text-yellow-800">
                      <strong>Note: </strong> These Terms of Service are effective as of the date listed above and will 
                      remain in effect until modified or terminated in accordance with the provisions herein.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
}
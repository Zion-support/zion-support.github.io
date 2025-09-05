import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, User, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                  Information We Collect
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Personal Information
                      </h3>
                      <p className="text-gray-600">
                        We collect information you provide directly to us, such as when you create an account, 
                        contact us, or use our services. This may include your name, email address, phone number, 
                        and other contact information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Usage Information
                      </h3>
                      <p className="text-gray-600">
                        We automatically collect certain information about your use of our services, including 
                        your IP address, browser type, device information, pages visited, time spent on pages, 
                        and other usage statistics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Cookies and Tracking
                      </h3>
                      <p className="text-gray-600">
                        We use cookies and similar tracking technologies to enhance your experience, analyze usage, 
                        and provide personalized content and advertisements.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  How We Use Your Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Service Delivery
                      </h3>
                      <p className="text-gray-600">
                        To provide, maintain, and improve our services, process transactions, and communicate with you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Customer Support
                      </h3>
                      <p className="text-gray-600">
                        To respond to your inquiries, provide technical support, and address any issues you may encounter.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Information Security
                </h2>
                
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">
                      We implement appropriate technical and organizational measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. We use industry-standard 
                      encryption and security protocols to safeguard your data.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Contact Us
                </h2>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
  );
}
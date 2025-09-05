import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Globe, FileText, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-16 w-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Privacy{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Policy
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Information We Collect
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment and billing information</li>
                    <li>Communications with us (support tickets, feedback)</li>
                    <li>Usage data and analytics</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    How We Use Your Information
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We use the information we collect to:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze usage and trends</li>
                    <li>Personalize and improve your experience</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Information Sharing
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information in the following circumstances:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who assist in our operations</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Data Security
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet or electronic storage is 100% secure.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Your Rights
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Cookies and Tracking
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    You can control cookie settings through your browser preferences.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Changes to This Policy
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    Contact Us
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> privacy@ziontechgroup.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
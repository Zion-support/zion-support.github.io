import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
      canonical="https://ziontechgroup.com/privacy"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 2025</p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us (emails, phone calls, chat messages)</li>
                  <li>Information about your use of our services</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Personalize and improve your experience</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Information Sharing
                </h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content. 
                  You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 mb-8">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                    <span className="text-gray-700">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

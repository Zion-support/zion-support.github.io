import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout 
      title="Privacy Policy | Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Your privacy is important to us. Learn how we protect your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> September 5, 2025
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-700 mb-6">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://ziontechgroup.com or use our services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company information and job title</li>
                  <li>Information provided in forms, surveys, or communications</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  We may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Process payments and transactions</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>With service providers who assist us in operating our website and services</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                <p className="text-gray-700 mb-6">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
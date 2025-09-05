import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, User, Mail, Phone } from 'lucide-react';
import Layout from './components/Layout';

export default function Privacy() {
  return (
    <Layout 
      title="Privacy Policy | Zion Tech Group"
      description="Our privacy policy explains how we collect, use, and protect your personal information when you use our services."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-blue-300">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              Information We Collect
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Create an account or profile</li>
                <li>Use our services or contact us</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
                <li>Communicate with us via email or phone</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
              <p className="text-gray-700 mb-4">
                When you use our services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-8 h-8 text-blue-600 mr-3" />
              How We Use Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions</li>
                  <li>• Send service-related communications</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Analytics</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Analyze usage patterns</li>
                  <li>• Improve our services</li>
                  <li>• Develop new features</li>
                  <li>• Conduct research and analytics</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 text-blue-600 mr-3" />
              Data Security
            </h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
                <li>Unauthorized alteration or corruption</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              Your Rights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Access & Control</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Delete your account and data</li>
                  <li>• Export your data</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Communication</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Opt-out of marketing emails</li>
                  <li>• Control cookie preferences</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="w-8 h-8 text-blue-600 mr-3" />
              Contact Us
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
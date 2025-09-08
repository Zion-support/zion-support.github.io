import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 27, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Zion Tech Group ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p>Zion Tech Group</p>
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-8">
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}

import React from "react";
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CookiesPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
      keywords="cookies, privacy, data protection, website analytics"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This page explains how we use cookies and similar technologies on our website 
              to enhance your experience and provide our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                enabling certain functionality.
              </p>
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <p className="text-blue-800">
                  <strong>Important:</strong> We only use cookies that are necessary for our website to function properly 
                  and to improve your experience. We do not sell your personal data to third parties.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Basic website functionality</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page views and navigation</li>
                    <li>• Time spent on pages</li>
                    <li>• Error tracking</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Preference Cookies
                  </h3>
                  <p className="text-gray-600 mb-2">
                    These cookies remember your choices and preferences.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Form data</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Browser Settings
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Most web browsers allow you to control cookies through their settings preferences.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
                    <li>• Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                    <li>• Safari: Preferences &gt; Privacy &gt; Cookies</li>
                    <li>• Edge: Settings &gt; Cookies and site permissions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Our Cookie Banner
                  </h3>
                  <p className="text-gray-600 mb-3">
                    When you first visit our website, you'll see a cookie banner where you can:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your preferences</li>
                    <li>• Learn more about our cookie usage</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-yellow-50 rounded-lg p-8 mb-8"
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-yellow-700">
                    If you choose to disable cookies, some features of our website may not function properly. 
                    Essential cookies cannot be disabled as they are necessary for the website to work.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
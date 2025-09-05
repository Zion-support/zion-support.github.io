import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, website cookies, user consent"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Cookie className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your browsing experience and provide better services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Settings className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
                      access to secure areas, and remembering your preferences.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Session management</li>
                        <li>• Security features</li>
                        <li>• Load balancing</li>
                        <li>• User interface preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <Eye className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page view tracking</li>
                        <li>• User behavior analysis</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg mr-4">
                        <Database className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering your language preferences and login status.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Login status</li>
                        <li>• Form data</li>
                        <li>• User preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-2 rounded-lg mr-4">
                        <Shield className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Social media integration</li>
                        <li>• Advertising networks</li>
                        <li>• Remarketing campaigns</li>
                        <li>• Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-gray-600 mb-6">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</p>
                      <p><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</p>
                      <p><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</p>
                      <p><strong>Edge:</strong> Settings &gt; Cookies and site permissions</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Consent</h3>
                    <p className="text-gray-600 mb-4">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>• Essential cookies (always enabled)</p>
                      <p>• Analytics cookies (optional)</p>
                      <p>• Functional cookies (optional)</p>
                      <p>• Marketing cookies (optional)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-600 mb-6">
                  Some cookies on our site are set by third-party services that appear on our pages. We don't control these cookies, 
                  and you should check the third-party websites for more information about their cookies and how to manage them.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Third-Party Services We Use</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Tag Manager</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• LinkedIn</li>
                        <li>• Twitter</li>
                        <li>• Facebook</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1-302-464-0950</p>
                      </div>
                    </div>
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
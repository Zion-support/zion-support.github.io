import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
      keywords="cookies, privacy, data protection, tracking, analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function properly. They enable basic 
                      functions like page navigation and access to secure areas of the website.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-600">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                    <p className="text-gray-600">
                      These cookies remember your choices and preferences to provide you with a more 
                      personalized experience.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                    <p className="text-gray-600">
                      These cookies are used to track visitors across websites to display relevant 
                      advertisements and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Managing Your Cookie Preferences</h3>
                <p className="text-gray-600 mb-4">
                  You can control and manage cookies in various ways. Please note that removing or 
                  blocking cookies can impact your user experience and parts of our website may not 
                  function properly.
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h4>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li>Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                    <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li>Edge: Settings &gt; Cookies and site permissions</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">+1 302 464 0950</span>
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
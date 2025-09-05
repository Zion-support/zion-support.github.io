import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    icon: Shield,
    examples: ["Session management", "Security features", "Load balancing"],
    necessary: true
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    icon: Eye,
    examples: ["Google Analytics", "Page views", "User behavior"],
    necessary: false
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization.",
    icon: Settings,
    examples: ["Language preferences", "User settings", "Customization"],
    necessary: false
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites for advertising purposes.",
    icon: Database,
    examples: ["Ad targeting", "Social media integration", "Remarketing"],
    necessary: false
  }
];
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, website analytics, privacy" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Cookie Policy
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Learn about how we use cookies and similar technologies on our website
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-600">
                  We use cookies and similar technologies to improve our website's functionality, 
                  analyze usage patterns, and provide personalized content and advertisements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <cookie.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900 mr-3">
                              {cookie.name}
                            </h3>
                            {cookie.necessary && (
                              <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded-full">
                                Necessary
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">
                            {cookie.description}
                          </p>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {cookie.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-600 mb-6">
                  You can control and manage cookies in various ways. Please note that removing or 
                  blocking cookies can impact your user experience and parts of our website may 
                  no longer be fully accessible.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Browser Settings
                    </h3>
                    <p className="text-gray-600">
                      Most browsers allow you to refuse cookies or delete them. You can usually 
                      find these settings in the options or preferences menu of your browser.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cookie Consent
                    </h3>
                    <p className="text-gray-600">
                      When you first visit our website, you'll see a cookie consent banner where 
                      you can choose which types of cookies to accept.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-600 mb-6">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Customer support tools for live chat functionality</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Mail className="text-cyan-600 mr-3" size={20} />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-cyan-600 mr-3" size={20} />
                    <span className="text-gray-600">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center md:col-span-2">
                    <MapPin className="text-cyan-600 mr-3" size={20} />
                    <span className="text-gray-600">364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
    </>

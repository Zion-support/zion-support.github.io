import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    icon: Settings,
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    examples: ['Authentication', 'Security', 'Load balancing', 'User preferences'],
    necessary: true
  },
  {
    icon: Database,
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    examples: ['Page views', 'User behavior', 'Performance metrics', 'Error tracking'],
    necessary: false
  },
  {
    icon: Eye,
    title: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
    examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Remarketing'],
    necessary: false
  },
  {
    icon: Shield,
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    examples: ['Language preferences', 'Theme settings', 'Customization', 'Third-party integrations'],
    necessary: false
  }
];

const cookieDetails = [
  {
    name: '_ga',
    purpose: 'Google Analytics - Distinguishes unique users',
    duration: '2 years',
    type: 'Analytics'
  },
  {
    name: '_gid',
    purpose: 'Google Analytics - Distinguishes unique users',
    duration: '24 hours',
    type: 'Analytics'
  },
  {
    name: '_gat',
    purpose: 'Google Analytics - Throttles request rate',
    duration: '1 minute',
    type: 'Analytics'
  },
  {
    name: 'session_id',
    purpose: 'Maintains user session state',
    duration: 'Session',
    type: 'Essential'
  },
  {
    name: 'user_preferences',
    purpose: 'Stores user interface preferences',
    duration: '1 year',
    type: 'Functional'
  }
];

export default function Cookies() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, Zion Tech Group, data collection" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-blue-100 mb-8">
                Learn about how we use cookies to enhance your experience and provide better services.
              </p>
              <div className="flex items-center justify-center text-blue-200">
                <Cookie className="w-6 h-6 mr-2" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies to provide you with the best possible experience on our website.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                      {type.necessary && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Necessary
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Specific Cookies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are the specific cookies we use on our website and their purposes.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cookie Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {cookie.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {cookie.purpose}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cookie.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              cookie.type === 'Essential' 
                                ? 'bg-green-100 text-green-800'
                                : cookie.type === 'Analytics'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have control over which cookies you accept. Learn how to manage your preferences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Block all cookies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Block third-party cookies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Delete existing cookies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Set up cookie notifications
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Cookie Banner</h3>
                <p className="text-gray-600 mb-4">
                  When you first visit our website, you'll see a cookie banner that allows you to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Accept all cookies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reject non-essential cookies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Customize your preferences
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Learn more about our cookies
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We may use third-party services that set their own cookies. Here are the main ones:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Helps us understand website usage and improve user experience.
                </p>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Google Privacy Policy →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Enables social sharing and integration with platforms like LinkedIn and Twitter.
                </p>
                <a 
                  href="https://www.linkedin.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  LinkedIn Privacy Policy →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Tools</h3>
                <p className="text-gray-600 mb-4">
                  Helps us deliver relevant content and measure campaign effectiveness.
                </p>
                <a 
                  href="https://mailchimp.com/legal/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Mailchimp Privacy Policy →
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                If you have any questions about our use of cookies, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Contact Us
                </a>
                <a 
                  href="/privacy" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-blue-600"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
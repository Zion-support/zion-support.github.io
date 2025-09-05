import React from "react";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import {
  Shield, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Cookie,
  Eye,
  Lock,
  Globe,
  Database,
  BarChart3,
  Users,
  Target
} from 'lucide-react';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    icon: Shield,
    required: true,
    examples: [
      "Authentication cookies",
      "Security cookies",
      "Load balancing cookies",
      "User interface customization"
    ]
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    icon: BarChart3,
    required: false,
    examples: [
      "Google Analytics",
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring"
    ]
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization.",
    icon: Settings,
    required: false,
    examples: [
      "Language preferences",
      "Theme settings",
      "Form data storage",
      "User preferences"
    ]
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites for advertising purposes.",
    icon: Target,
    required: false,
    examples: [
      "Advertising cookies",
      "Social media cookies",
      "Retargeting pixels",
      "Conversion tracking"
    ]
  }
];

const cookieDetails = [
  {
    name: "Google Analytics",
    purpose: "Website analytics and performance monitoring",
    provider: "Google LLC",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "Session ID",
    purpose: "Maintain user session and security",
    provider: "Zion Tech Group",
    duration: "Session",
    type: "Essential"
  },
  {
    name: "User Preferences",
    purpose: "Store user interface preferences",
    provider: "Zion Tech Group",
    duration: "1 year",
    type: "Functional"
  },
  {
    name: "Marketing Pixel",
    purpose: "Track conversions and advertising effectiveness",
    provider: "Facebook/Meta",
    duration: "90 days",
    type: "Marketing"
  }
];

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
      keywords="cookies, privacy, data protection, website analytics"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies on our website
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-lg text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Cookie className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Small Files</h3>
                  <p className="text-gray-600">
                    Cookies are small text files that contain information about your visit to our website.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Database className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stored Data</h3>
                  <p className="text-gray-600">
                    They are stored on your device and help us remember your preferences and improve your experience.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Website Function</h3>
                  <p className="text-gray-600">
                    Cookies help our website function properly and provide you with a better user experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience on our website.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  className="bg-gray-50 p-8 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <cookie.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                      {cookie.required && (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

        {/* Cookie Details Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed information about the specific cookies we use on our website.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.provider}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            cookie.type === 'Functional' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
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
        </section>

        {/* Cookie Management */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-lg text-gray-600">
                  You have control over which cookies you accept and can change your preferences at any time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 p-8 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Settings className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Block all cookies
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Block third-party cookies
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Delete existing cookies
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Get notifications before cookies are set
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-8 rounded-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Eye className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Consent</h3>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Accept all cookies
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Reject non-essential cookies
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Customize your preferences
                    </li>
                    <li className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Learn more about our cookie use
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                If you have any questions about our use of cookies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Privacy Policy
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
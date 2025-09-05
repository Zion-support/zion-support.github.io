import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Info,
  AlertCircle
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    purpose: "Authentication, security, and basic functionality",
    examples: ["Session management", "User authentication", "Security tokens"],
    necessary: true
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    purpose: "Website performance and user behavior analysis",
    examples: ["Google Analytics", "Page views", "User interactions"],
    necessary: false
  },
  {
    name: "Functional Cookies",
    description: "These cookies enable enhanced functionality and personalization, such as videos and live chat.",
    purpose: "Enhanced user experience and personalization",
    examples: ["Language preferences", "Chat widgets", "Video players"],
    necessary: false
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    purpose: "Targeted advertising and marketing campaigns",
    examples: ["Social media pixels", "Advertising networks", "Retargeting"],
    necessary: false
  }
];

const cookieDetails = [
  {
    name: "_ga",
    type: "Analytics",
    purpose: "Distinguishes unique users",
    duration: "2 years",
    provider: "Google Analytics"
  },
  {
    name: "_gid",
    type: "Analytics", 
    purpose: "Distinguishes unique users",
    duration: "24 hours",
    provider: "Google Analytics"
  },
  {
    name: "session_id",
    type: "Essential",
    purpose: "Maintains user session",
    duration: "Session",
    provider: "Zion Tech Group"
  },
  {
    name: "user_preferences",
    type: "Functional",
    purpose: "Stores user preferences",
    duration: "1 year",
    provider: "Zion Tech Group"
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Information about cookie types, purposes, and your choices."
      keywords="cookie policy, cookies, privacy, data collection, website tracking"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies on our website 
                to enhance your experience and provide our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/privacy" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600 mb-6">
                  Cookies allow us to recognize your device and remember information about your visit, such as your preferred 
                  language and other settings. This can make your next visit easier and the site more useful to you.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We use different types of cookies for various purposes to improve your experience on our website.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {type.name}
                    </h3>
                    {type.necessary ? (
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Necessary
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full flex items-center">
                        <Settings className="w-4 h-4 mr-1" />
                        Optional
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-sm text-gray-600">{type.purpose}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Specific Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Detailed information about the specific cookies used on our website.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-mono text-gray-900">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-700' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Your Choices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Cookie Choices
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <p className="text-gray-600">
                    However, if you choose to delete or refuse cookies, some features of our website may not function properly.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Consent</h3>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you will see a cookie consent banner. You can choose which types of 
                    cookies you want to accept or reject.
                  </p>
                  <p className="text-gray-600">
                    You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Opt-Out Links</h3>
                  <p className="text-gray-600 mb-4">
                    For third-party cookies, you can opt out directly through the respective service providers:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:underline">
                        Facebook Ad Preferences
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this cookie policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
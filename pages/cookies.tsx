import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  ArrowRight,
  Shield,
  Settings,
  CheckCircle,
  Info,
  AlertCircle,
  Eye,
  Lock,
  Globe
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    purpose: "Authentication, security, and basic functionality",
    examples: ["Session management", "User authentication", "Security tokens"],
    required: true,
    icon: Shield
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    purpose: "Website analytics and performance monitoring",
    examples: ["Google Analytics", "Page views", "User behavior tracking"],
    required: false,
    icon: Settings
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and marketing content.",
    purpose: "Targeted advertising and marketing campaigns",
    examples: ["Ad targeting", "Social media integration", "Marketing automation"],
    required: false,
    icon: Globe
  },
  {
    name: "Preference Cookies",
    description: "These cookies remember your preferences and settings for a better experience.",
    purpose: "Personalization and user preferences",
    examples: ["Language settings", "Theme preferences", "Display options"],
    required: false,
    icon: Settings
  }
];

const cookieDetails = [
  {
    name: "_ga",
    type: "Analytics",
    purpose: "Google Analytics - distinguishes users",
    duration: "2 years",
    provider: "Google"
  },
  {
    name: "_gid",
    type: "Analytics", 
    purpose: "Google Analytics - distinguishes users",
    duration: "24 hours",
    provider: "Google"
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
    type: "Preference",
    purpose: "Stores user preferences",
    duration: "1 year",
    provider: "Zion Tech Group"
  },
  {
    name: "_fbp",
    type: "Marketing",
    purpose: "Facebook Pixel - tracks conversions",
    duration: "3 months",
    provider: "Facebook"
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Information about cookie types, purposes, and your choices."
      keywords="cookie policy, cookies, privacy, data collection, website tracking, user preferences"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Learn about how we use cookies on our website and your choices regarding cookie settings. 
                We're committed to transparency about our data practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#cookie-types"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Learn About Cookies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-xl text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Understanding Cookies
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Cookies help us provide you with a better experience on our website by remembering your preferences, 
                      analyzing how you use our site, and personalizing content. They also help us understand which parts 
                      of our website are most useful to you.
                    </p>
                    <p className="text-gray-600">
                      Most web browsers automatically accept cookies, but you can usually modify your browser settings 
                      to decline cookies if you prefer. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section id="cookie-types" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. Here's what each type does and why we use them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {cookie.name}
                        </h3>
                        {cookie.required ? (
                          <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm font-medium">
                            Required
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm font-medium">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {cookie.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-gray-600 text-sm">
                      {cookie.purpose}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
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

        {/* Cookie Details Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specific Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed information about the specific cookies used on our website.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
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
                        <motion.tr
                          key={cookie.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {cookie.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              cookie.type === 'Essential' ? 'bg-red-100 text-red-600' :
                              cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-600' :
                              cookie.type === 'Marketing' ? 'bg-green-100 text-green-600' :
                              'bg-yellow-100 text-yellow-600'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {cookie.purpose}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {cookie.duration}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {cookie.provider}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Choices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Cookie Choices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have control over how cookies are used on our website. Here are your options.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Cookie Settings
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    You can manage your cookie preferences through our cookie settings panel. 
                    You can enable or disable different types of cookies based on your preferences.
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Manage Cookie Settings
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Browser Settings
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    You can also control cookies through your browser settings. Most browsers allow you to 
                    block or delete cookies, though this may affect website functionality.
                  </p>
                  <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                If you have any questions about our use of cookies or this cookie policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>Last updated: January 15, 2024</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
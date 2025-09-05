import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Settings, CheckCircle, ArrowRight, Info, AlertCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    purpose: "Authentication, security, and basic functionality",
    examples: ["Session management", "Login status", "Security tokens"],
    required: true,
    icon: Shield
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    purpose: "Website performance and user behavior analysis",
    examples: ["Page views", "User journeys", "Performance metrics"],
    required: false,
    icon: Settings
  },
  {
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    purpose: "Personalized advertising and marketing campaigns",
    examples: ["Ad targeting", "Campaign tracking", "Conversion tracking"],
    required: false,
    icon: Info
  },
  {
    name: "Preference Cookies",
    description: "These cookies enable the website to remember choices you make and provide enhanced, more personal features.",
    purpose: "User preferences and customization",
    examples: ["Language settings", "Theme preferences", "Location settings"],
    required: false,
    icon: CheckCircle
  }
];

const cookieTable = [
  {
    name: "_session_id",
    type: "Essential",
    purpose: "Maintains user session state",
    duration: "Session",
    domain: "ziontechgroup.com"
  },
  {
    name: "_ga",
    type: "Analytics",
    purpose: "Google Analytics tracking",
    duration: "2 years",
    domain: "ziontechgroup.com"
  },
  {
    name: "_gid",
    type: "Analytics",
    purpose: "Google Analytics user identification",
    duration: "24 hours",
    domain: "ziontechgroup.com"
  },
  {
    name: "_fbp",
    type: "Marketing",
    purpose: "Facebook pixel tracking",
    duration: "3 months",
    domain: "ziontechgroup.com"
  },
  {
    name: "preferences",
    type: "Preference",
    purpose: "User preference settings",
    duration: "1 year",
    domain: "ziontechgroup.com"
  }
];

export default function CookiesPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website and how you can manage your cookie preferences."
      keywords="cookie policy, cookies, privacy, data protection, tracking, analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies on our website and how you can manage 
                your cookie preferences to protect your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Manage Cookie Preferences
                </button>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
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
                What Are Cookies?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" 
                  (deleted when you close your browser). They can also be "first-party" (set by the website you're visiting) 
                  or "third-party" (set by other websites or services).
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <Info className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> You can control and manage cookies through your browser settings. 
                      However, disabling certain cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We use different types of cookies for various purposes to enhance your experience on our website.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:bg-indigo-50 transition-colors group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {type.name}
                        </h3>
                        {type.required && (
                          <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium mb-2">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
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
                            <CheckCircle className="w-3 h-3 text-indigo-500 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cookie Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cookies We Use
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Detailed information about the specific cookies used on our website.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cookie Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Domain
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cookieTable.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {cookie.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            cookie.type === 'Marketing' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {cookie.purpose}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {cookie.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {cookie.domain}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
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
                Managing Your Cookie Preferences
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  You have several options for managing cookies on our website:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Cookie Consent Banner</h3>
                    <p className="text-gray-600 mb-4">
                      When you first visit our website, you'll see a cookie consent banner where you can choose 
                      which types of cookies to accept or reject.
                    </p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Manage Cookie Preferences
                    </button>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>View and delete cookies</li>
                      <li>Block all cookies</li>
                      <li>Block third-party cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Opt-Out Links</h3>
                    <p className="text-gray-600 mb-4">
                      For specific third-party services, you can opt out directly:
                    </p>
                    <div className="space-y-2">
                      <a href="https://tools.google.com/dlpage/gaoptout" className="block text-indigo-600 hover:text-indigo-700">
                        Google Analytics Opt-out
                      </a>
                      <a href="https://www.facebook.com/settings?tab=ads" className="block text-indigo-600 hover:text-indigo-700">
                        Facebook Ad Preferences
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
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
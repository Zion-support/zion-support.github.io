import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, X, Settings, Shield, Eye, BarChart3, Target } from 'lucide-react';

const cookieTypes = [
  {
    name: 'Necessary Cookies',
    description: 'Essential for the website to function properly',
    icon: Shield,
    examples: ['Authentication', 'Security', 'Language preferences'],
    required: true
  },
  {
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website',
    icon: BarChart3,
    examples: ['Page views', 'User behavior', 'Performance metrics'],
    required: false
  },
  {
    name: 'Marketing Cookies',
    description: 'Used to track visitors across websites for advertising purposes',
    icon: Target,
    examples: ['Ad personalization', 'Campaign tracking', 'Social media integration'],
    required: false
  },
  {
    name: 'Functional Cookies',
    description: 'Enable enhanced functionality and personalization',
    icon: Settings,
    examples: ['User preferences', 'Customization', 'Third-party integrations'],
    required: false
  }
];

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const handleSavePreferences = () => {
    // Save cookie preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    // Show success message or redirect
  };

  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group | Privacy & Data Protection</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience on our website." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, GDPR, compliance" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Transparent information about our cookie usage and your privacy rights." />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about our cookie policy and how we use cookies to improve your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">📞</span>
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2">✉️</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">Your Privacy Matters</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><Shield className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><Eye className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies to enhance your experience and provide better services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => {
                const IconComponent = cookie.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                        <p className="text-gray-600">{cookie.description}</p>
                      </div>
                      {cookie.required && (
                        <span className="ml-auto px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                          Required
                        </span>
                      )}
                    </div>
                    
                    <div className="ml-9">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <ArrowRight className="w-3 h-3 text-gray-400 mr-2" />
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

        {/* Cookie Preferences */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Manage Your Cookie Preferences
                </h2>
                
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{cookie.name}</h3>
                        <p className="text-sm text-gray-600">{cookie.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        {cookie.required ? (
                          <span className="text-sm text-gray-500">Required</span>
                        ) : (
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={cookiePreferences[cookie.name.toLowerCase().replace(/\s+/g, '')]}
                              onChange={(e) => setCookiePreferences({
                                ...cookiePreferences,
                                [cookie.name.toLowerCase().replace(/\s+/g, '')]: e.target.checked
                              })}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">Enable</span>
                          </label>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setCookiePreferences({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                      functional: false
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setCookiePreferences({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                      functional: true
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us if you have any questions about our cookie policy or data protection practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    type: 'Essential Cookies',
    icon: Shield,
    description: 'These cookies are necessary for the website to function properly.',
    purpose: 'Authentication, security, and basic functionality',
    duration: 'Session',
    examples: ['Session ID', 'Security tokens', 'Load balancing']
  },
  {
    type: 'Analytics Cookies',
    icon: Eye,
    description: 'Help us understand how visitors interact with our website.',
    purpose: 'Website performance analysis and improvement',
    duration: '2 years',
    examples: ['Google Analytics', 'Page views', 'User behavior']
  },
  {
    type: 'Functional Cookies',
    icon: Settings,
    description: 'Enable enhanced functionality and personalization.',
    purpose: 'Remember user preferences and settings',
    duration: '1 year',
    examples: ['Language preferences', 'Theme settings', 'Form data']
  }
];

export default function CookiePolicy() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
      keywords="cookies, privacy, data collection, website tracking"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Cookie className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies on our website
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience by remembering your preferences 
                    and improving our services.
                  </p>
                  <p>
                    We use cookies to enhance functionality, analyze website traffic, and personalize content. 
                    This policy explains the types of cookies we use and how you can manage them.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <cookie.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{cookie.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-900">Purpose:</strong>
                      <p className="text-gray-600 text-sm">{cookie.purpose}</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Duration:</strong>
                      <p className="text-gray-600 text-sm">{cookie.duration}</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Examples:</strong>
                      <ul className="text-gray-600 text-sm mt-1">
                        {cookie.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    You can control and manage cookies in various ways. Please note that removing 
                    or blocking cookies can impact your user experience and parts of our website 
                    may no longer be fully accessible or functional.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings. 
                    You can usually find these options in the 'Settings' or 'Preferences' menu of your browser.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Popular Browsers:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Chrome: Settings → Privacy and security → Cookies</li>
                        <li>• Firefox: Options → Privacy & Security</li>
                        <li>• Safari: Preferences → Privacy</li>
                        <li>• Edge: Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Options Available:</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Block all cookies</li>
                        <li>• Block third-party cookies</li>
                        <li>• Delete existing cookies</li>
                        <li>• Set cookie preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    For more information about cookies and privacy, please review our Privacy Policy.
                  </p>
                  <Link
                    href="/privacy"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>Last updated: January 15, 2024</p>
              <p className="mt-2">
                If you have any questions about this Cookie Policy, please contact us at{' '}
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
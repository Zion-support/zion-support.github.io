import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Cookies: NextPage = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication', 'Security', 'Load balancing'],
      required: true
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language settings', 'User preferences', 'Customization'],
      required: false
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      required: false
    },
    {
      icon: Database,
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion tracking'],
      required: false
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services."
      keywords="cookie policy, cookies, tracking, privacy, data collection, website analytics"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            This policy explains how we use cookies and similar technologies 
            to enhance your experience on our website.
          </motion.p>
          <motion.div
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: January 15, 2025
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use different types of cookies to provide you with the best possible experience on our website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    type.required ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <type.icon className={`w-6 h-6 ${
                      type.required ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                      {type.required && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Examples:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What Are Cookies?</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600">
                  Cookies allow a website to recognize a user's device and remember information about their visit, 
                  such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">How We Use Cookies</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Zion Tech Group uses cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To ensure our website functions properly and securely</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used and improve its performance</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To integrate with social media platforms</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Managing Your Cookie Preferences</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  You have several options for managing cookies:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Use our cookie preference center to customize your settings</li>
                  <li>Configure your browser settings to block or delete cookies</li>
                  <li>Use browser extensions to manage cookies</li>
                  <li>Opt out of specific tracking services</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website 
                    and your user experience.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Third-Party Cookies</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Our website may contain cookies from third-party services, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Customer support tools for live chat functionality</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These third-party services have their own privacy policies and cookie practices. 
                  We recommend reviewing their policies for more information.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Cookie Retention</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
                  <li><strong>Essential cookies:</strong> Typically retained for the duration of your session</li>
                  <li><strong>Analytics cookies:</strong> Usually retained for up to 2 years</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Updates to This Policy</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">+1 302 464 0950</span>
                  </div>
                  <div className="text-gray-600">
                    <strong>Address:</strong><br />
                    Zion Tech Group<br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Customize your cookie settings to control how we use cookies on our website.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
              <Settings className="w-5 h-5 mr-2" />
              Cookie Settings
            </button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;
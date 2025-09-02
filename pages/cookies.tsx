import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Eye, Shield, Database, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Cookies: NextPage = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: [
        'Authentication and login status',
        'Shopping cart functionality',
        'Security and fraud prevention',
        'Load balancing and performance'
      ],
      required: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Page views and user behavior',
        'Traffic sources and referrals',
        'Popular content and features',
        'Performance metrics and errors'
      ],
      required: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language and region preferences',
        'Customized user interface',
        'Remembered settings and preferences',
        'Social media integration'
      ],
      required: false
    },
    {
      icon: Database,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: [
        'Ad targeting and personalization',
        'Campaign effectiveness measurement',
        'Cross-site tracking',
        'Social media advertising'
      ],
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cookie className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Learn about how we use cookies and similar technologies to enhance your 
              browsing experience and provide personalized services.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What Are Cookies?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences, 
                analyzing website traffic, and personalizing content.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
                on our website and how you can control them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Types of Cookies We Use</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <type.icon className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{type.title}</h3>
                      {type.required && (
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Examples include:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Managing Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                You have control over which cookies you accept. You can manage your cookie preferences 
                through your browser settings or by using our cookie consent tool.
              </p>

              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set preferences for specific websites</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Cookie Consent Tool</h3>
                <p className="text-gray-600 mb-6">
                  Use our cookie consent tool to customize your cookie preferences:
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Manage Cookie Preferences
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Third-Party Cookies</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We may use third-party services that set their own cookies. These services help us 
                provide better functionality and analyze website performance.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Google Analytics</h3>
                  <p className="text-gray-600 mb-3">
                    We use Google Analytics to understand how visitors use our website.
                  </p>
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700">
                    Google Privacy Policy →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Social Media</h3>
                  <p className="text-gray-600 mb-3">
                    Social media platforms may set cookies when you interact with our content.
                  </p>
                  <p className="text-sm text-gray-500">
                    Please check the privacy policies of these platforms for more information.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-yellow-50 border-l-4 border-yellow-400 p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700 mb-4">
                    Disabling certain cookies may affect the functionality of our website. 
                    Essential cookies are required for the website to function properly and cannot be disabled.
                  </p>
                  <p className="text-yellow-700">
                    By continuing to use our website, you consent to our use of cookies as described in this policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Questions About Cookies?</h2>
              <p className="text-xl mb-8 text-gray-300">
                If you have any questions about our use of cookies, please contact us.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Technology Drive, Innovation City, IC 12345</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;
import React from 'react';
import Layout from '../src/components/Layout';
import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, Lock, CheckCircle } from 'lucide-react';

const Cookies = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Authentication, security, and basic website functionality",
      retention: "Session or up to 2 years",
      examples: ["User login sessions", "Security tokens", "Language preferences"],
      required: true
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      purpose: "Website performance analysis and user behavior insights",
      retention: "Up to 2 years",
      examples: ["Google Analytics", "Page view tracking", "User journey analysis"],
      required: false
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as videos and live chat features.",
      purpose: "Enhanced user experience and personalization",
      retention: "Up to 1 year",
      examples: ["Video player preferences", "Chat widget settings", "Form data"],
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      purpose: "Targeted advertising and marketing campaigns",
      retention: "Up to 1 year",
      examples: ["Social media pixels", "Advertising networks", "Retargeting campaigns"],
      required: false
    }
  ];

  const cookieSettings = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      enabled: true,
      disabled: true
    },
    {
      icon: Eye,
      title: "Analytics Cookies",
      description: "Help us improve our website performance",
      enabled: false,
      disabled: false
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced features and personalization",
      enabled: false,
      disabled: false
    },
    {
      icon: Cookie,
      title: "Marketing Cookies",
      description: "Used for targeted advertising and marketing",
      enabled: false,
      disabled: false
    }
  ];

  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, website cookies, user consent"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Understanding how we use cookies and similar technologies to enhance your browsing experience
              </p>
              <p className="text-lg text-blue-200">
                Last updated: January 15, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What Are Cookies?</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="mb-6">
                  At Zion Tech Group, we use cookies and similar technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content. This Cookie Policy explains what cookies we use, 
                  why we use them, and how you can control them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {cookieTypes.map((cookie, index) => (
                  <motion.div
                    key={cookie.name}
                    className="bg-white rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                      {cookie.required && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-gray-900">Purpose:</strong>
                        <span className="text-gray-600 ml-2">{cookie.purpose}</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Retention:</strong>
                        <span className="text-gray-600 ml-2">{cookie.retention}</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Examples:</strong>
                        <ul className="text-gray-600 ml-2 mt-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manage Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                You can control which cookies you accept. Please note that disabling certain cookies may affect your experience on our website.
              </p>
              
              <div className="space-y-6">
                {cookieSettings.map((setting, index) => (
                  <motion.div
                    key={setting.title}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <setting.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{setting.title}</h3>
                          <p className="text-gray-600">{setting.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                            setting.enabled
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                          disabled={setting.disabled}
                        >
                          {setting.enabled ? 'Enabled' : 'Disabled'}
                        </button>
                        <button
                          className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                            setting.enabled ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                          disabled={setting.disabled}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                              setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Third-Party Cookies</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  We may also use third-party cookies from trusted partners to enhance our services and provide you with relevant content and advertisements.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Third-Party Partners</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <strong>Google Analytics:</strong> Website traffic analysis and user behavior insights
                      </div>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <strong>Google Tag Manager:</strong> Tag management and tracking implementation
                      </div>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <strong>Social Media Platforms:</strong> Social sharing and engagement tracking
                      </div>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <strong>Marketing Tools:</strong> Email marketing and customer relationship management
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights and Choices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <Lock className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete them.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
                    <li>• Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                    <li>• Safari: Preferences &gt; Privacy &gt; Cookies</li>
                    <li>• Edge: Settings &gt; Cookies and Site Permissions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Settings className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Opt-Out Options</h3>
                  <p className="text-gray-600 mb-4">
                    You can opt out of specific types of cookies while keeping essential ones for website functionality.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Analytics cookies can be disabled</li>
                    <li>• Marketing cookies can be opted out</li>
                    <li>• Functional cookies can be managed</li>
                    <li>• Essential cookies cannot be disabled</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Questions About Our Cookie Policy?</h2>
              <p className="text-xl text-blue-200 mb-8">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Email Us
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    icon: Shield,
    color: "green",
    examples: [
      "Authentication cookies",
      "Security cookies",
      "Load balancing cookies",
      "User interface customization"
    ],
    necessary: true
  },
  {
    title: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    icon: Settings,
    color: "blue",
    examples: [
      "Google Analytics",
      "Page view tracking",
      "User behavior analysis",
      "Performance monitoring"
    ],
    necessary: false
  },
  {
    title: "Marketing Cookies",
    description: "These cookies are used to deliver relevant advertisements and track campaign effectiveness.",
    icon: AlertCircle,
    color: "purple",
    examples: [
      "Advertising cookies",
      "Social media tracking",
      "Remarketing pixels",
      "Conversion tracking"
    ],
    necessary: false
  }
];

const cookieDetails = [
  {
    name: "_ga",
    purpose: "Google Analytics - distinguishes users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    purpose: "Google Analytics - distinguishes users",
    duration: "24 hours",
    type: "Analytics"
  },
  {
    name: "_gat",
    purpose: "Google Analytics - throttles request rate",
    duration: "1 minute",
    type: "Analytics"
  },
  {
    name: "session_id",
    purpose: "Maintains user session",
    duration: "Session",
    type: "Essential"
  },
  {
    name: "preferences",
    purpose: "Stores user preferences",
    duration: "1 year",
    type: "Essential"
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website. Understand what cookies we use, why we use them, and how you can manage your cookie preferences."
      keywords="cookie policy, cookies, privacy, data collection, website tracking, analytics"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies on our website and how you can manage your preferences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This Cookie Policy explains what cookies we use, why we use them, and how you can 
                  control your cookie preferences. By continuing to use our website, you consent to 
                  our use of cookies as described in this policy.
                </p>
              </motion.div>
            </div>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. Here's what each type does:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                const colorClasses = {
                  green: "from-green-500 to-green-600",
                  blue: "from-blue-500 to-blue-600",
                  purple: "from-purple-500 to-purple-600"
                };
                
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[type.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                        {type.necessary && (
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {type.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here are the specific cookies we use on our website and their purposes:
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {cookieDetails.map((cookie, index) => (
                        <motion.tr
                          key={index}
                          className="hover:bg-gray-50"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{cookie.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              cookie.type === 'Essential' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {cookie.type}
                            </span>
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

        {/* Managing Cookies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Block all cookies
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Block third-party cookies
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Delete existing cookies
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Set preferences for specific websites
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
                    <p className="text-gray-600 mb-4">
                      When you first visit our website, you'll see a cookie consent banner. You can:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Accept all cookies
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Customize your preferences
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Reject non-essential cookies
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h3>
                    <p className="text-gray-600">
                      Please note that disabling certain cookies may affect the functionality of our website. 
                      Essential cookies cannot be disabled as they are necessary for the website to function properly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Cookie Policy?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  If you have any questions about our use of cookies or this Cookie Policy, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-lg font-semibold text-gray-900 mb-2">Email:</p>
                  <p className="text-blue-600">kleber@ziontechgroup.com</p>
                  <p className="text-lg font-semibold text-gray-900 mb-2 mt-4">Phone:</p>
                  <p className="text-blue-600">+1 302 464 0950</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
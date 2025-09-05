import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Clock } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    examples: ['Authentication', 'Security', 'Load balancing', 'User preferences'],
    required: true
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500',
    examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics'],
    required: false
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    icon: Settings,
    color: 'from-green-500 to-emerald-500',
    examples: ['Language preferences', 'Theme settings', 'Customization', 'User interface'],
    required: false
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    icon: Database,
    color: 'from-purple-500 to-indigo-500',
    examples: ['Ad targeting', 'Social media', 'Remarketing', 'Campaign tracking'],
    required: false
  }
];

const cookieDetails = [
  {
    name: '_ga',
    purpose: 'Google Analytics - Used to distinguish users',
    duration: '2 years',
    type: 'Analytics'
  },
  {
    name: '_gid',
    purpose: 'Google Analytics - Used to distinguish users',
    duration: '24 hours',
    type: 'Analytics'
  },
  {
    name: '_gat',
    purpose: 'Google Analytics - Used to throttle request rate',
    duration: '1 minute',
    type: 'Analytics'
  },
  {
    name: 'session_id',
    purpose: 'Maintains user session state',
    duration: 'Session',
    type: 'Essential'
  },
  {
    name: 'user_preferences',
    purpose: 'Stores user interface preferences',
    duration: '1 year',
    type: 'Functional'
  },
  {
    name: 'marketing_consent',
    purpose: 'Tracks marketing consent status',
    duration: '1 year',
    type: 'Marketing'
  }
];

export default function CookiePolicyPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website. Information about cookie types, purposes, and how to manage your cookie preferences."
      keywords="cookie policy, cookies, privacy, data collection, website tracking, user preferences"
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Information about how we use cookies and similar technologies on our website
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
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600 mb-6">
                  This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies 
                  when you visit our website at https://ziontechgroup.com (the "Website").
                </p>
                <p className="text-gray-600 mb-8">
                  By using our Website, you consent to the use of cookies in accordance with this Cookie Policy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cookies</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mr-4`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                      {type.required && (
                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                          Required
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{type.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Details</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed information about the cookies we use
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
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
                          key={cookie.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{cookie.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              cookie.type === 'Essential' ? 'bg-red-100 text-red-600' :
                              cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-600' :
                              cookie.type === 'Functional' ? 'bg-green-100 text-green-600' :
                              'bg-purple-100 text-purple-600'
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

        {/* Cookie Management */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-6">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser 
                  to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, some features 
                  of our Website may not function properly.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
                <p className="text-gray-600 mb-6">
                  When you first visit our Website, you will see a cookie consent banner. You can choose to accept all cookies, 
                  reject non-essential cookies, or customize your preferences. You can change your cookie preferences at any time 
                  by clicking the "Cookie Settings" link in our website footer.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
                <p className="text-gray-600 mb-6">
                  Some cookies on our Website are set by third-party services. We have no control over these cookies and you 
                  should check the relevant third-party's website for more information about their cookies and how to manage them.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h3>
                <p className="text-gray-600 mb-8">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated 
                  revision date. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Database className="mr-2 w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
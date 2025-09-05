import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Shield, 
  Settings, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  Cookie
} from 'lucide-react';

const cookieTypes = [
  {
    title: 'Essential Cookies',
    icon: Shield,
    description: 'These cookies are necessary for the website to function properly',
    purpose: 'Essential for basic website functionality',
    examples: [
      'User authentication and login status',
      'Shopping cart and checkout process',
      'Security and fraud prevention',
      'Load balancing and performance'
    ],
    retention: 'Session or up to 1 year',
    canDisable: false
  },
  {
    title: 'Analytics Cookies',
    icon: Eye,
    description: 'These cookies help us understand how visitors interact with our website',
    purpose: 'Website performance and user behavior analysis',
    examples: [
      'Page views and visitor counts',
      'Time spent on pages',
      'Traffic sources and referrals',
      'Popular content and features'
    ],
    retention: 'Up to 2 years',
    canDisable: true
  },
  {
    title: 'Functional Cookies',
    icon: Settings,
    description: 'These cookies enable enhanced functionality and personalization',
    purpose: 'Improved user experience and preferences',
    examples: [
      'Language and region preferences',
      'User interface customizations',
      'Remembered form data',
      'Accessibility settings'
    ],
    retention: 'Up to 1 year',
    canDisable: true
  },
  {
    title: 'Marketing Cookies',
    icon: ArrowRight,
    description: 'These cookies are used to deliver relevant advertisements',
    purpose: 'Targeted advertising and marketing campaigns',
    examples: [
      'Ad personalization and targeting',
      'Campaign performance tracking',
      'Social media integration',
      'Retargeting and remarketing'
    ],
    retention: 'Up to 1 year',
    canDisable: true
  }
];

const cookieDetails = [
  {
    name: '_ga',
    type: 'Analytics',
    provider: 'Google Analytics',
    purpose: 'Distinguishes unique users',
    retention: '2 years',
    domain: '.ziontechgroup.com'
  },
  {
    name: '_gid',
    type: 'Analytics',
    provider: 'Google Analytics',
    purpose: 'Distinguishes unique users',
    retention: '24 hours',
    domain: '.ziontechgroup.com'
  },
  {
    name: '_gat',
    type: 'Analytics',
    provider: 'Google Analytics',
    purpose: 'Throttles request rate',
    retention: '1 minute',
    domain: '.ziontechgroup.com'
  },
  {
    name: 'session_id',
    type: 'Essential',
    provider: 'Zion Tech Group',
    purpose: 'Maintains user session',
    retention: 'Session',
    domain: '.ziontechgroup.com'
  },
  {
    name: 'user_preferences',
    type: 'Functional',
    provider: 'Zion Tech Group',
    purpose: 'Stores user preferences',
    retention: '1 year',
    domain: '.ziontechgroup.com'
  },
  {
    name: 'marketing_consent',
    type: 'Marketing',
    provider: 'Zion Tech Group',
    purpose: 'Tracks marketing consent',
    retention: '1 year',
    domain: '.ziontechgroup.com'
  }
];

export default function CookiesPage() {
  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group | How We Use Cookies"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use, why we use them, and how you can manage your preferences."
      keywords="cookie policy, cookies, website tracking, privacy, data collection, user preferences"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
                <span className="block text-blue-400">How We Use Cookies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                This policy explains how Zion Tech Group uses cookies and similar technologies 
                on our website to enhance your experience and provide better services.
              </p>
              <div className="text-sm text-blue-200">
                Last updated: January 15, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cookie className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Small Text Files</h3>
                <p className="text-gray-600">Cookies are small pieces of data stored on your device by websites you visit.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Experience</h3>
                <p className="text-gray-600">They help us remember your preferences and provide personalized content.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Website Analytics</h3>
                <p className="text-gray-600">They help us understand how visitors use our website to improve it.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. 
                You can control most of these through your browser settings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      <div className={`text-sm font-medium ${type.canDisable ? 'text-green-600' : 'text-red-600'}`}>
                        {type.canDisable ? 'Can be disabled' : 'Required'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <p className="text-sm text-gray-500 mb-4"><strong>Purpose:</strong> {type.purpose}</p>
                  <p className="text-sm text-gray-500 mb-6"><strong>Retention:</strong> {type.retention}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specific Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here are the specific cookies we use on our website and their purposes.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={cookie.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{cookie.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.provider}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.retention}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have control over cookies. Here's how you can manage your preferences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-6">
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Block third-party cookies only</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Delete existing cookies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Set up cookie notifications</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Cookie Banner</h3>
                <p className="text-gray-600 mb-6">
                  When you first visit our website, you'll see a cookie banner where you can:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Accept all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reject non-essential cookies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customize your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Change your mind later</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                If you have any questions about our use of cookies or this policy, 
                please don't hesitate to contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Email Us</div>
                  <div className="text-blue-100">privacy@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Call Us</div>
                  <div className="text-blue-100">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <div className="font-semibold mb-2">Response Time</div>
                  <div className="text-blue-100">Within 24 hours</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
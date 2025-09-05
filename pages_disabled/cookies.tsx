import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import Layout from '../components/Layout';

const cookieTypes = [
  {
    icon: Settings,
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    examples: ['Authentication', 'Security', 'Load balancing', 'User interface customization'],
    necessary: true
  },
  {
    icon: Cookie,
    title: 'Performance Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    examples: ['Google Analytics', 'Page load times', 'User behavior tracking', 'Error reporting'],
    necessary: false
  },
  {
    icon: Shield,
    title: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    examples: ['Language preferences', 'Region settings', 'User preferences', 'Chat widgets'],
    necessary: false
  },
  {
    icon: AlertCircle,
    title: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    examples: ['Social media integration', 'Advertising networks', 'Remarketing', 'Conversion tracking'],
    necessary: false
  }
];

const cookieDetails = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and performance monitoring',
    duration: '2 years',
    type: 'Performance'
  },
  {
    name: 'Session ID',
    purpose: 'Maintain user session and security',
    duration: 'Session',
    type: 'Essential'
  },
  {
    name: 'Language Preference',
    purpose: 'Remember user language selection',
    duration: '1 year',
    type: 'Functional'
  },
  {
    name: 'Facebook Pixel',
    purpose: 'Social media integration and advertising',
    duration: '90 days',
    type: 'Marketing'
  }
];

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content."
      keywords="cookie policy, cookies, privacy, data collection, website tracking"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Learn about how we use cookies to enhance your browsing experience 
                and provide personalized content on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What are Cookies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-lg mb-12"
              >
                <div className="flex items-center mb-6">
                  <Cookie className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    What Are Cookies?
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  Cookies are small text files that are placed on your computer or mobile device 
                  when you visit our website. They help us provide you with a better experience 
                  by remembering your preferences and enabling certain website functions.
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Info className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Important Note
                      </h3>
                      <p className="text-gray-700">
                        Cookies do not contain any information that personally identifies you, 
                        but personal information that we store about you may be linked to the 
                        information stored in and obtained from cookies.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Types of Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Types of Cookies We Use
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {cookieTypes.map((cookie, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-center mb-4">
                        <cookie.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {cookie.title}
                        </h3>
                        {cookie.necessary && (
                          <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {cookie.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Examples:
                        </h4>
                        <ul className="space-y-1">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cookie Details Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-lg mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Specific Cookies We Use
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieDetails.map((cookie, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-900">{cookie.name}</td>
                          <td className="py-3 px-4 text-gray-600">{cookie.purpose}</td>
                          <td className="py-3 px-4 text-gray-600">{cookie.duration}</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Managing Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Browser Settings
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Most web browsers allow you to control cookies through their settings preferences. 
                      However, limiting cookies may impact your experience on our website.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Chrome: Settings → Privacy and security → Cookies and other site data
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Firefox: Options → Privacy & Security → Cookies and Site Data
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Safari: Preferences → Privacy → Manage Website Data
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Edge: Settings → Cookies and site permissions → Cookies and site data
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Cookie Consent
                    </h3>
                    <p className="text-gray-600">
                      When you first visit our website, you'll see a cookie consent banner. 
                      You can choose to accept all cookies, reject non-essential cookies, 
                      or customize your preferences.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Questions About Our Cookie Policy?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, 
                  please contact us using the information below.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:privacy@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                      privacy@ziontechgroup.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-gray-600 mt-2">
                This Cookie Policy may be updated from time to time. We will notify you of any 
                changes by posting the new Cookie Policy on this page.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
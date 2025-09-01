import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  Info, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Cookie,
  Eye,
  Lock,
  Globe,
  Database,
  Users
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication', 'Security', 'Session management'],
      necessary: true,
      icon: Shield
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      necessary: false,
      icon: Database
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Customization'],
      necessary: false,
      icon: Settings
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion measurement'],
      necessary: false,
      icon: Globe
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
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
      purpose: 'Maintains user session across pages',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'user_preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Cookie className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Cookie Policy
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Learn how we use cookies and similar technologies to enhance your experience on our website 
                and how you can control them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-600">
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit and provide a better user experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Info className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Storage</h3>
                <p className="text-gray-600">
                  Cookies store information like your preferences, login status, and browsing behavior.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Functionality</h3>
                <p className="text-gray-600">
                  They enable features like shopping carts, user authentication, and personalized content.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience</h3>
                <p className="text-gray-600">
                  Cookies help us provide a better, more personalized experience for our visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600">
                We use different types of cookies for various purposes to improve your experience on our website.
              </p>
            </div>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        type.necessary ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <type.icon className={`w-6 h-6 ${
                          type.necessary ? 'text-green-600' : 'text-blue-600'
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                        {type.necessary && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{type.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Examples:</span>
                        {type.examples.map((example, i) => (
                          <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Specific Cookies We Use
              </h2>
              <p className="text-lg text-gray-600">
                Below is a detailed list of the specific cookies we use and their purposes.
              </p>
            </div>

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cookie Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={cookie.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {cookie.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {cookie.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          cookie.type === 'Essential' ? 'bg-green-100 text-green-800' :
                          cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                          cookie.type === 'Functional' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
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
      </section>

      {/* Cookie Management */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-lg text-gray-600">
                You have control over which cookies are stored on your device and can manage your preferences.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Browser Settings</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Allow cookies from specific sites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Delete existing cookies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Cookie Consent</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  When you first visit our website, you'll see a cookie consent banner that allows you to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accept all cookies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customize preferences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Reject non-essential cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Disabling Cookies */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Impact of Disabling Cookies
              </h2>
              <p className="text-lg text-gray-600">
                While you can disable cookies, doing so may affect your experience on our website.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-yellow-200 rounded-lg p-6 bg-yellow-50">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Limited Functionality</h3>
                </div>
                <p className="text-gray-700">
                  Some features may not work properly, including user authentication, shopping carts, 
                  and personalized content.
                </p>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <div className="flex items-center space-x-3 mb-4">
                  <Info className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Reduced Experience</h3>
                </div>
                <p className="text-gray-700">
                  You may need to re-enter information on each visit, and we won't be able to 
                  provide personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Contact */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Privacy Policy <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Policy Updates</h3>
              <p className="text-gray-600 text-sm">
                This Cookie Policy was last updated on January 15, 2024. We may update this policy 
                from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
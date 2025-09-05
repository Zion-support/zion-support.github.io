import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    examples: ['Session management', 'Security features', 'Load balancing'],
    necessary: true
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    examples: ['Google Analytics', 'Page views', 'User behavior'],
    necessary: false
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    examples: ['Language preferences', 'User settings', 'Customization'],
    necessary: false
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and marketing campaigns.',
    examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
    necessary: false
  }
];

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group | Privacy & Cookies"
      description="Learn about our cookie policy and how we use cookies to improve your experience on our website."
      keywords="cookie policy, privacy, cookies, data protection, website analytics"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Cookie <span className="text-blue-400">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Learn about our cookie policy and how we use cookies to improve your experience
            </motion.p>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We use different types of cookies to enhance your experience on our website
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Cookie className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{cookie.name}</h3>
                      {cookie.necessary && (
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Necessary
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{cookie.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cookie.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
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

        {/* Cookie Management Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-lg text-gray-700">
                  You have control over how cookies are used on our website
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p className="text-gray-600">
                    You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Opt-Out Options</h3>
                  <p className="text-gray-600">
                    You can opt out of certain types of cookies, such as analytics and marketing cookies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We are transparent about our cookie usage and provide clear information about what we collect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy & Data Protection</h2>
                <p className="text-lg text-gray-700">
                  We are committed to protecting your privacy and personal data
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data We Collect</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Website usage data
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Device and browser information
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      IP address and location data
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Contact information (when provided)
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Data</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Improve website functionality
                    </li>
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Analyze user behavior and preferences
                    </li>
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Provide personalized content
                    </li>
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Ensure website security
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions About Our Cookie Policy?</h2>
              <p className="text-lg text-gray-700 mb-8">
                If you have any questions about our cookie policy or how we handle your data, please contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-blue-600">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-600">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
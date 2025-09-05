import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Settings, 
  BarChart3, 
  Target, 
  CheckCircle, 
  X, 
  Info,
  Cookie,
  Lock,
  Eye,
  Zap
} from 'lucide-react';

const cookieTypes = [
  {
    id: 'necessary',
    title: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly.',
    icon: Lock,
    required: true,
    examples: ['Authentication', 'Security', 'Basic functionality']
  },
  {
    id: 'analytics',
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    icon: BarChart3,
    required: false,
    examples: ['Google Analytics', 'Page views', 'User behavior']
  },
  {
    id: 'marketing',
    title: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements.',
    icon: Target,
    required: false,
    examples: ['Ad targeting', 'Social media', 'Remarketing']
  },
  {
    id: 'functional',
    title: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    icon: Settings,
    required: false,
    examples: ['Language preferences', 'User settings', 'Customization']
  }
];

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const [showPreferences, setShowPreferences] = useState(false);

  const handleSavePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowPreferences(false);
    // Show success message
    alert('Cookie preferences saved successfully!');
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    handleSavePreferences();
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    handleSavePreferences();
  };

  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group | Privacy & Data Protection</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience on our website." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, GDPR" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Understand how we use cookies and manage your privacy preferences." />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
        <meta property="og:type" content="website" />
      </Head>
      
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
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and manage your privacy preferences to ensure a better experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies to enhance your experience and provide better services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => {
                const IconComponent = cookie.icon;
                return (
                  <motion.div
                    key={cookie.id}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="text-blue-600 mr-4">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{cookie.title}</h3>
                          {cookie.required && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {!cookie.required && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Enable this cookie type</span>
                        <button
                          onClick={() => setCookiePreferences(prev => ({
                            ...prev,
                            [cookie.id]: !prev[cookie.id]
                          }))}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[cookie.id] ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[cookie.id] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cookie Management Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manage Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You have control over which cookies you accept. Manage your preferences below.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon;
                  return (
                    <div key={cookie.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="text-blue-600 mr-4">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{cookie.title}</h3>
                          <p className="text-sm text-gray-600">{cookie.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {cookie.required ? (
                          <span className="text-sm text-gray-500">Always Active</span>
                        ) : (
                          <button
                            onClick={() => setCookiePreferences(prev => ({
                              ...prev,
                              [cookie.id]: !prev[cookie.id]
                            }))}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              cookiePreferences[cookie.id] ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                cookiePreferences[cookie.id] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Information</h2>
                <p className="text-lg text-gray-600">
                  Learn more about our privacy practices and how we protect your data.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Policy</h3>
                  <p className="text-gray-600 mb-4">
                    Read our comprehensive privacy policy to understand how we collect, use, and protect your personal information.
                  </p>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read Privacy Policy
                    <Eye className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions about our cookie policy? Contact our privacy team for more information.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Contact Privacy Team
                    <Zap className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  Shield,
  Settings,
  Info,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Cookie
} from 'lucide-react';

const CookiePolicy = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      examples: ['Session management', 'Security', 'Load balancing'],
      icon: Shield,
      color: 'red'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      icon: Settings,
      color: 'blue'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      required: false,
      examples: ['Advertising', 'Social media', 'Remarketing'],
      icon: Info,
      color: 'green'
    }
  ];

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
    // Here you would typically set a cookie or localStorage value
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website cookies"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn about how we use cookies to enhance your experience on our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAcceptCookies}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Accept All Cookies
                </button>
                <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  <Settings className="mr-2 w-5 h-5" />
                  Manage Preferences
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-xl text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience and understand how you use our site.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Analyze website traffic and usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Improve website performance and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Provide personalized content and recommendations</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Control</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>You can control cookie settings in your browser</span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Delete cookies at any time</span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Block certain types of cookies</span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Opt out of non-essential cookies</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                <p className="text-xl text-gray-600">
                  We use different types of cookies for various purposes. Here's what each type does:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {cookieTypes.map((cookie, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        cookie.color === 'red' ? 'bg-red-100' : 
                        cookie.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        <cookie.icon className={`w-6 h-6 ${
                          cookie.color === 'red' ? 'text-red-600' : 
                          cookie.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                        }`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{cookie.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        cookie.required 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {cookie.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Cookie Policy?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  If you have any questions about our use of cookies, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="/privacy"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CookiePolicy;
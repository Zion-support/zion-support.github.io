<<<<<<< HEAD
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
  XCircle,
  AlertTriangle
} from 'lucide-react';

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential cookies required for the website to function properly',
      required: true,
      examples: ['Session management', 'Security', 'Load balancing']
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      required: false,
      examples: ['Google Analytics', 'Page views', 'User behavior']
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes',
      required: false,
      examples: ['Ad targeting', 'Social media', 'Remarketing']
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      required: false,
      examples: ['Language preferences', 'User settings', 'Chat widgets']
    }
  ];

  const handleCookieToggle = (cookieId: string) => {
    if (cookieId === 'necessary') return; // Can't disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieId]: !prev[cookieId]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie settings
    alert('Cookie preferences saved!');
  };

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website. Understand what cookies we use and how you can manage your preferences."
      keywords="cookie policy, cookies, privacy, data protection, website cookies"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies to enhance your experience on our website 
                and how you can manage your cookie preferences.
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';

const CookiesPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, website cookies, tracking"
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding how we use cookies to improve your experience on our website.
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Cookie Management */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                You can control which cookies we use on our website. 
                Some cookies are necessary for the website to function properly.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <motion.div
                      key={cookie.id}
                      className="border border-gray-200 rounded-lg p-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {cookie.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {cookie.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {cookie.required ? (
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              Required
                            </span>
                          ) : (
                            <button
                              onClick={() => handleCookieToggle(cookie.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                cookiePreferences[cookie.id as keyof typeof cookiePreferences]
                                  ? 'bg-indigo-600'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  cookiePreferences[cookie.id as keyof typeof cookiePreferences]
                                    ? 'translate-x-6'
                                    : 'translate-x-1'
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-9">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <ArrowRight className="w-3 h-3 text-gray-400 mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setCookiePreferences({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                      functional: false
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setCookiePreferences({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                      functional: true
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Info className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">How We Use Cookies</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Remember your preferences and settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Analyze website traffic and usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Improve website performance and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                      <span>Provide personalized content and recommendations</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Managing Cookies</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                      <span>Use our cookie preference center above</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                      <span>Configure your browser settings</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                      <span>Opt out of third-party tracking</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1" />
                      <span>Clear cookies from your device</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                If you have any questions about our use of cookies or this policy, 
                please don't hesitate to contact us.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                    <span className="text-lg font-semibold text-gray-900">Privacy Team</span>
                  </div>
                  <p className="text-gray-600">
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text-indigo-600 hover:text-indigo-700">privacy@ziontechgroup.com</a>
                  </p>
                  <p className="text-gray-600">
                    Phone: <a href="tel:+13024640950" className="text-indigo-600 hover:text-indigo-700">+1 302 464 0950</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
=======
        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience by remembering your preferences 
                    and enabling certain website functionality.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                  <p className="text-gray-600 mb-6">
                    We use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Essential website functionality</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalization and user preferences</li>
                    <li>Security and fraud prevention</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies are necessary for the website to function properly. They cannot be disabled 
                      and are usually set in response to actions you take, such as setting privacy preferences.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Functional Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and settings.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-600 mb-6">
                    You can control and manage cookies in various ways. Most web browsers allow you to 
                    refuse cookies or delete them. However, please note that disabling cookies may affect 
                    the functionality of our website.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center md:col-span-2">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>  );
}
=======
    </MainLayout>
  );
};

export default CookiesPage;
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34

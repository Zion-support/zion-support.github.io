<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
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
              </p>
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cookie, 
  Settings, 
  Shield, 
  Eye,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, website analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cookie
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies on our website to enhance your experience.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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
=======
        {/* Cookie Policy Content */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Cookie className="h-6 w-6 text-blue-400 mr-3" />
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Settings className="h-6 w-6 text-blue-400 mr-3" />
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies are necessary for the website to function properly. They enable basic 
                        functions like page navigation and access to secure areas of the website.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Session management</li>
                        <li>Security features</li>
                        <li>Load balancing</li>
                        <li>User authentication</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies help us understand how visitors interact with our website by collecting 
                        and reporting information anonymously.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Page views and visits</li>
                        <li>Time spent on pages</li>
                        <li>Traffic sources</li>
                        <li>User behavior patterns</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Functional Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies enable enhanced functionality and personalization, such as remembering 
                        your preferences and settings.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Language preferences</li>
                        <li>Theme settings</li>
                        <li>Form data</li>
                        <li>User preferences</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
                      <p className="text-gray-300 mb-3">
                        These cookies are used to track visitors across websites to display relevant and 
                        engaging advertisements.
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        <li>Ad targeting</li>
                        <li>Campaign tracking</li>
                        <li>Conversion tracking</li>
                        <li>Social media integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-blue-400 mr-3" />
                    Third-Party Cookies
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We may use third-party services that set their own cookies. These include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                    <li><strong>Marketing Tools:</strong> For advertising and campaign tracking</li>
                    <li><strong>Customer Support:</strong> For live chat and support functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-400 mr-3" />
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text-gray-300 mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                    <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                    <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                    <li><strong>Contact Us:</strong> Reach out to us for assistance with cookie management</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookie Retention</h2>
                  <p className="text-gray-300 mb-4">
                    Different cookies have different retention periods:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (usually 30 days to 2 years)</li>
                    <li><strong>Essential Cookies:</strong> Retained for the duration of your session</li>
                    <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                  <p className="text-gray-300 mb-4">
                    We may update this cookie policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any 
                    material changes by posting the updated policy on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our use of cookies or this policy, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">123 Tech Street, San Francisco, CA 94105</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're here to help clarify any questions you may have about our cookie usage.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/cookies" className="text-white font-semibold">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
=======
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-c17d
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}
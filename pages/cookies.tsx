<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { 
  Cookie, 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  CheckCircle, 
  X,
  Info,
  AlertCircle
} from 'lucide-react';

const cookieTypes = [
  {
    id: 'necessary',
    name: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly. They cannot be disabled.',
    icon: Shield,
    required: true,
    examples: ['Authentication', 'Security', 'Load balancing']
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information.',
    icon: BarChart3,
    required: false,
    examples: ['Google Analytics', 'Page views', 'User behavior']
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
    icon: Target,
    required: false,
    examples: ['Ad targeting', 'Social media', 'Retargeting']
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as language preferences.',
    icon: Settings,
    required: false,
    examples: ['Language settings', 'Theme preferences', 'User preferences']
  }
];

export default function CookiesPage() {
=======
<<<<<<<< HEAD:pages/cookies.tsx.backup
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Cookie, Shield, Settings, BarChart3, CheckCircle } from 'lucide-react';

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    icon: Shield,
    purpose: "Website functionality, security, and basic features",
    examples: ["Session management", "Authentication", "Security tokens"]
  },
  {
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website.",
    icon: BarChart3,
    purpose: "Website analytics and performance monitoring",
    examples: ["Page views", "User behavior", "Traffic sources"]
  },
  {
    name: "Preference Cookies",
    description: "These cookies remember your preferences and settings.",
    icon: Settings,
    purpose: "Personalization and user experience",
    examples: ["Language settings", "Theme preferences", "Location data"]
  }
];
========
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
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

<<<<<<< HEAD
  const [showBanner, setShowBanner] = useState(true);

  const handleSavePreferences = () => {
    // Save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
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
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how we use cookies and manage your cookie preferences." />
        <meta name="keywords" content="cookies, privacy, data, preferences, tracking" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
=======
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
>>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8:pages/cookies.tsx

export default function CookiesPage() {
  return (
<<<<<<<< HEAD:pages/cookies.tsx.backup
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, website cookies, user preferences"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
========
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
>>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8:pages/cookies.tsx
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and manage your preferences. 
                We respect your privacy and give you control over your data.
=======
              className="max-w-4xl mx-auto text-center"
            >
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Learn about how we use cookies and similar technologies to enhance your browsing experience and improve our services.
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Cookie Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies to enhance your experience and provide our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <type.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {type.name}
                        </h3>
                        {type.required && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cookie Preferences */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-600">
                You can control which cookies we use. Note that disabling some cookies may affect website functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={type.id} className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{type.name}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {type.required ? (
                        <span className="text-sm text-gray-500">Always Active</span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                            onChange={(e) => setCookiePreferences(prev => ({
                              ...prev,
                              [type.id]: e.target.checked
                            }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Banner */}
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 shadow-lg z-50"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-start mb-4 sm:mb-0">
                <Cookie className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">We use cookies</h3>
                  <p className="text-sm text-gray-600">
                    We use cookies to enhance your experience and analyze our traffic. 
                    You can manage your preferences or learn more in our cookie policy.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
=======
        {/* What Are Cookies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Cookies</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Improve website functionality
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Analyze website traffic
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Remember your preferences
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Enhance security
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Control</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Manage cookie preferences
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Delete cookies anytime
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Opt-out of non-essential cookies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Update preferences anytime
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use different types of cookies for various purposes. Here's a breakdown of each type and how we use them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <p className="text-sm text-gray-600">{type.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
<<<<<<<< HEAD:pages/cookies.tsx.backup
                    </div>
                  </motion.div>
                );
              })}
========
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
>>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8:pages/cookies.tsx
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-lg text-gray-600 mb-6">
                  You have full control over the cookies we use. You can manage your preferences at any time through your browser settings or our cookie management tool.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-600 mb-4">
                      Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Block all cookies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Allow only first-party cookies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Delete existing cookies
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Set cookie preferences
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Cookie Tool</h3>
                    <p className="text-gray-600 mb-4">
                      Use our cookie management tool to customize your preferences:
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Manage Cookie Preferences
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
              </div>
<<<<<<<< HEAD:pages/cookies.tsx.backup
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
========
            </div>
          </div>
        </section>
      </div>
    </MainLayout>  );
>>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8:pages/cookies.tsx
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
}
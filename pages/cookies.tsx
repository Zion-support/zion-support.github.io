import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout';
import {
  Shield,
  Settings,
  Eye,
  Lock,
  CheckCircle,
  AlertCircle,
  Cookie,
  Database,
  Globe,
  BarChart3} from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout
        title="Cookie Policy"
        description="Learn about how we use cookies and similar technologies"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cookie</span> Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about how we use cookies and similar technologies to enhance your browsing experience
            </p>
            <div className="flex items-center justify-center text-gray-300">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and enabling certain website functions.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Important:</strong> Cookies do not contain viruses or malware and cannot access your personal files or data stored on your device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Cookies We Use</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Page views and sessions</li>
                    <li>• User behavior analysis</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Settings className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    These cookies remember your choices and preferences to provide you with a more personalized experience.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Customized content</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <Globe className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ad targeting</li>
                    <li>• Campaign tracking</li>
                    <li>• Conversion measurement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                You have control over cookies and can manage your preferences in several ways:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can choose to accept all cookies, reject all cookies, or be notified when a cookie is set.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                    </div>
                    <div>
                      <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                    </div>
                    <div>
                      <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                    </div>
                    <div>
                      <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent Banner</h3>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Third-Party Services</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                We use third-party services that may set their own cookies. Here are the main services we use:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Analytics</h3>
                  <p className="text-gray-600 mb-2">
                    We use Google Analytics to understand how visitors use our website. This service may set cookies to track your interactions.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Platforms</h3>
                  <p className="text-gray-600 mb-2">
                    Our website may include social media buttons and widgets that can set cookies from platforms like LinkedIn, Twitter, and Facebook.
                  </p>
                  <p className="text-sm text-gray-500">
                    These platforms have their own privacy policies and cookie practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Cookie Policy?</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )}
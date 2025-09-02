import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Eye, Shield, Database, AlertCircle } from 'lucide-react';

const Cookies: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services."
      keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group, website analytics"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Cookie className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Learn how we use cookies to improve your experience on our website.
            </p>
            <div className="text-sm text-gray-300">
              Last updated: January 27, 2025
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Cookie className="w-8 h-8 mr-3 text-blue-600" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
                  on our website ziontechgroup.com.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 mr-3 text-blue-600" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the website to function properly. They cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Session management</li>
                      <li>Security features</li>
                      <li>Load balancing</li>
                      <li>User authentication</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Page views and user behavior</li>
                      <li>Traffic sources</li>
                      <li>Performance metrics</li>
                      <li>User journey analysis</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies enhance your experience by remembering your preferences.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Language preferences</li>
                      <li>Theme settings</li>
                      <li>Form data</li>
                      <li>User preferences</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies are used to deliver relevant advertisements and track campaign performance.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Ad targeting</li>
                      <li>Campaign tracking</li>
                      <li>Conversion measurement</li>
                      <li>Retargeting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                    <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
                    <li><strong>Social Media Platforms:</strong> Social sharing and engagement tracking</li>
                    <li><strong>Customer Support:</strong> Live chat and support functionality</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Management */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-blue-600" />
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Browser Settings</h3>
                    <p className="text-gray-700 mb-3">
                      Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set preferences for specific websites</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookie Consent</h3>
                    <p className="text-gray-700 mb-3">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Accept all cookies</li>
                      <li>Reject non-essential cookies</li>
                      <li>Customize your preferences</li>
                      <li>Learn more about each cookie type</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Impact of Disabling Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 mr-3 text-blue-600" />
                  Impact of Disabling Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>You may need to re-enter information repeatedly</li>
                  <li>Personalized content and recommendations may not be available</li>
                  <li>Some interactive features may not work</li>
                  <li>We may not be able to remember your preferences</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-600" />
                  Cookie Retention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Different cookies have different lifespans:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
                  <li><strong>Analytics Cookies:</strong> Usually retained for 24-26 months</li>
                  <li><strong>Marketing Cookies:</strong> Typically retained for 30-90 days</li>
                </ul>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  material changes by posting the updated policy on our website.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Cookies;
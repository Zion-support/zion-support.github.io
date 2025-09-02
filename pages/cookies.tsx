import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Cookie, Settings, Eye, Shield, Database, AlertCircle } from 'lucide-react';
=======
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3

const Cookies: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
    >
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cookie Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
          <div className="text-sm text-gray-300">
            Last updated: January 27, 2024
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Cookie className="w-8 h-8 text-blue-600 mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                a website. They are widely used to make websites work more efficiently and to provide information 
                to website owners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how Zion Tech Group ("we," "our," or "us") uses cookies and similar 
                technologies when you visit our website https://ziontechgroup.com.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                Types of Cookies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation and access to secure areas of the website.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                    <li>User authentication</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Page views and visits</li>
                    <li>User behavior patterns</li>
                    <li>Performance metrics</li>
                    <li>Error tracking</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Functional Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and settings.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form data</li>
                    <li>User preferences</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marketing Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are used to track visitors across websites to display relevant and engaging 
                    advertisements.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
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
              <p className="text-gray-600 leading-relaxed mb-4">
                We may also use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Google Tag Manager:</strong> For managing tracking codes and tags</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Customer Support Tools:</strong> For providing customer service and support</li>
                <li><strong>Marketing Platforms:</strong> For email marketing and campaign tracking</li>
              </ul>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                Cookie Duration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies can be either "session" cookies or "persistent" cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cookie Consent</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Change your settings at any time</li>
              </ul>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                Impact of Disabling Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>You may need to re-enter information more frequently</li>
                <li>Some personalized features may not work</li>
                <li>We may not be able to remember your preferences</li>
                <li>Some forms and interactive features may not function</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Zion Tech Group</strong></p>
                <p className="text-gray-700 mb-2">364 E Main St STE 1008</p>
                <p className="text-gray-700 mb-2">Middletown, DE 19709</p>
                <p className="text-gray-700 mb-2">Phone: +1 302 464 0950</p>
                <p className="text-gray-700 mb-2">Email: privacy@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
=======
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience by remembering your 
                preferences and enabling certain functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Google Analytics</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies remember your choices and preferences.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Form data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                Some cookies on our website are set by third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media:</strong> Integration with social media platforms</li>
                <li><strong>Advertising Networks:</strong> Targeted advertising and remarketing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
    </MainLayout>
  );
};

export default Cookies;
import React from 'react';
import Layout from '../components/Layout';
import { Cookie, Settings, Eye, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website."
      keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-blue-600" />
                  What Are Cookies?
                </h2>
                
                <p className="mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  enabling certain functionality.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Settings className="w-6 h-6 mr-3 text-blue-600" />
                  Types of Cookies We Use
                </h2>

                <h3 className="text-xl font-semibold mb-4">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Session management</li>
                  <li>Security and authentication</li>
                  <li>Load balancing</li>
                  <li>User interface preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Google Analytics</li>
                  <li>Page views and user behavior</li>
                  <li>Traffic sources and demographics</li>
                  <li>Performance metrics</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Functional Cookies</h3>
                <p className="mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and choices.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Language preferences</li>
                  <li>Theme and display settings</li>
                  <li>Form data and user inputs</li>
                  <li>Customization options</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Marketing Cookies</h3>
                <p className="mb-4">
                  These cookies are used to track visitors across websites to display relevant and 
                  engaging advertisements.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Advertising networks</li>
                  <li>Social media integration</li>
                  <li>Retargeting campaigns</li>
                  <li>Conversion tracking</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Cookies
                </h2>

                <p className="mb-6">
                  We use cookies for the following purposes:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>To ensure our website works properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used</li>
                  <li>To improve our services and user experience</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To measure the effectiveness of our marketing campaigns</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Third-Party Cookies
                </h2>

                <p className="mb-6">
                  Some cookies on our website are set by third-party services. We have no control 
                  over these cookies and recommend you check their privacy policies:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Web analytics service</li>
                  <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising</li>
                  <li><strong>LinkedIn Insight:</strong> Professional network tracking</li>
                  <li><strong>HubSpot:</strong> Marketing automation</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Settings className="w-6 h-6 mr-3 text-blue-600" />
                  Managing Your Cookie Preferences
                </h2>

                <p className="mb-6">
                  You can control and manage cookies in several ways:
                </p>

                <h3 className="text-xl font-semibold mb-4">Browser Settings</h3>
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set up notifications when cookies are set</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Cookie Consent</h3>
                <p className="mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences</li>
                  <li>Learn more about each cookie category</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Impact of Disabling Cookies
                </h2>

                <p className="mb-6">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Personalized content and recommendations</li>
                  <li>Remembered preferences and settings</li>
                  <li>Form data and user inputs</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Social media integration</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Updates to This Policy
                </h2>

                <p className="mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons.
                </p>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Contact Us
                </h2>

                <p className="mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
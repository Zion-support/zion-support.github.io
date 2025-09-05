import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Lock } from 'lucide-react';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, cookies, tracking"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100">
                Learn about how we use cookies and similar technologies to enhance your experience.
              </p>
              <p className="text-sm text-blue-200 mt-4">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-600 mb-6">
                  <strong>Last updated: </strong> January 15, 2024
                </p>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                    <p className="text-gray-600 mb-2">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
                      and access to secure areas of the website.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      <li>Session management</li>
                      <li>Security features</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-600 mb-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      <li>Google Analytics</li>
                      <li>Page views and user behavior</li>
                      <li>Performance metrics</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-600 mb-2">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      <li>Social media integration</li>
                      <li>Advertising networks</li>
                      <li>Remarketing campaigns</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Remembering your preferences and settings</li>
                    <li>Analyzing website traffic and usage patterns</li>
                    <li>Improving website performance and functionality</li>
                    <li>Personalizing content and advertisements</li>
                    <li>Ensuring website security</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
                  <p className="text-gray-600 mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                    <li>Cookie consent banner: Use our cookie banner to manage preferences</li>
                    <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    Some cookies on our website are set by third-party services that appear on our pages. These include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Google Analytics</li>
                    <li>Social media platforms</li>
                    <li>Advertising networks</li>
                    <li>Customer support tools</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> kleber@ziontechgroup.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Phone:</strong> +1 302 464 0950
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
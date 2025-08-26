import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CookiePolicy() {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's cookie policy and how we use cookies." />
      </Head>

      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12 text-center">
          <p className="text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files stored on your device when you visit our website. 
              They help us remember your preferences and improve your experience.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Functions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Maintain your session</li>
                  <li>Remember your preferences</li>
                  <li>Ensure website security</li>
                  <li>Process form submissions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Analyze website traffic</li>
                  <li>Monitor performance</li>
                  <li>Improve user experience</li>
                  <li>Fix technical issues</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete cookies when closing browser</li>
              <li>Set cookie preferences</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about our Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}
import React from 'react'
import { Helmet } from 'react-helmet-async'

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              Last updated: January 1, 2024
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our website</li>
              <li>Improve our website's performance and functionality</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p className="text-gray-300 mb-6">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Use your browser settings to block or delete cookies</li>
              <li>Use our cookie consent banner to choose which cookies to accept</li>
              <li>Contact us if you have questions about our cookie usage</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-6">
              We may also use third-party cookies from services like Google Analytics, social media platforms, and advertising networks. These cookies are subject to the respective third parties' privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Cookie Policy, please contact us at privacy@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiesPage
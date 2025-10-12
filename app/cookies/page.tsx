import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cookie, Settings, Shield, Eye, Database, Users, Mail, Phone, MapPin } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, website analytics" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Cookie Policy</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
              What Are Cookies?
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-6 h-6 text-purple-400 mr-3" />
              Types of Cookies We Use
            </h2>
            <div className="text-gray-300 space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                  <p>These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p>These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-green-400 mr-3" />
              How We Use Cookies
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We use cookies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance and functionality</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure website security and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 text-yellow-400 mr-3" />
              Managing Your Cookie Preferences
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our cookie consent banner to choose which cookies to accept</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookies</li>
                <li>Contact us to update your preferences</li>
              </ul>
              <p className="mt-4">Please note that disabling certain cookies may affect the functionality of our website.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Database className="w-6 h-6 text-red-400 mr-3" />
              Third-Party Cookies
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We may use third-party services that set their own cookies, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Customer support tools for live chat</li>
              </ul>
              <p className="mt-4">These third parties have their own privacy policies and cookie practices.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span>privacy@ziontechgroup.com</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
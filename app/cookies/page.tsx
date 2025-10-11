'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Settings, Shield, CheckCircle, AlertTriangle } from 'lucide-react'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Authentication, security, and basic functionality',
      icon: Shield
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance and user behavior analysis',
      icon: Settings
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      purpose: 'Personalized advertising and content delivery',
      icon: Cookie
    }
  ]

  const cookieDetails = [
    {
      name: '_ga',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '2 years',
      essential: false
    },
    {
      name: '_gid',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '24 hours',
      essential: false
    },
    {
      name: 'session_id',
      type: 'Essential',
      purpose: 'Maintains user session',
      duration: 'Session',
      essential: true
    },
    {
      name: 'preferences',
      type: 'Functional',
      purpose: 'Stores user preferences',
      duration: '1 year',
      essential: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, website cookies, privacy, data collection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies on our website and how you can manage your preferences.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-gray-300 text-lg mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Cookies do not contain any information that personally identifies you, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <cookie.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{cookie.name}</h3>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{cookie.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white font-semibold p-6">Cookie Name</th>
                    <th className="text-left text-white font-semibold p-6">Type</th>
                    <th className="text-left text-white font-semibold p-6">Purpose</th>
                    <th className="text-left text-white font-semibold p-6">Duration</th>
                    <th className="text-left text-white font-semibold p-6">Essential</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="p-6 text-white font-mono">{cookie.name}</td>
                      <td className="p-6 text-gray-300">{cookie.type}</td>
                      <td className="p-6 text-gray-300">{cookie.purpose}</td>
                      <td className="p-6 text-gray-300">{cookie.duration}</td>
                      <td className="p-6">
                        {cookie.essential ? (
                          <span className="inline-flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm">Yes</span>
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Accept all cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Reject all cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Notify you when a cookie is set</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Delete cookies when you close your browser</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject.
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Update Preferences
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CookiesPage
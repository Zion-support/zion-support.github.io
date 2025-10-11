'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Shield, Settings, CheckCircle } from 'lucide-react'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Authentication, security, and basic functionality',
      icon: Shield
    },
    {
      type: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance, user behavior, and improvement insights',
      icon: Settings
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      purpose: 'Personalized ads, campaign tracking, and marketing optimization',
      icon: Cookie
    }
  ]

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - distinguishes users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - distinguishes users',
      duration: '24 hours',
      type: 'Analytics'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences',
      duration: '1 year',
      type: 'Essential'
    }
  ]

  return (
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
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            <p className="text-gray-300">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period of time).
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use different types of cookies for various purposes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{type.type}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{type.description}</p>
                <p className="text-sm text-cyan-400 font-medium">{type.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specific Cookies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are the specific cookies we use and their purposes.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white font-semibold py-4 px-4">Cookie Name</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Purpose</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Duration</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="text-cyan-400 font-mono py-4 px-4">{cookie.name}</td>
                    <td className="text-gray-300 py-4 px-4">{cookie.purpose}</td>
                    <td className="text-gray-300 py-4 px-4">{cookie.duration}</td>
                    <td className="text-gray-300 py-4 px-4">{cookie.type}</td>
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <p className="text-gray-300 mb-6">
              You have control over cookies. You can choose to accept or decline cookies when you first visit our website, and you can change your preferences at any time.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">How to Manage Cookies:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Use our cookie preference center (available in the footer)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Configure your browser settings to block or delete cookies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Use browser extensions to manage cookies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Contact us directly to discuss your preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="space-y-4">
            <p className="text-cyan-100">
              <strong>Email:</strong> privacy@ziontechgroup.com
            </p>
            <p className="text-cyan-100">
              <strong>Phone:</strong> +1 (302) 464-0950
            </p>
            <p className="text-cyan-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiesPage
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Shield, Eye, Settings, Database } from 'lucide-react'
import Layout from '../layout'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      purpose: 'Authentication, security, and basic functionality',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance and user behavior analysis',
      icon: <Eye className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'User preferences and enhanced features',
      icon: <Settings className="w-6 h-6 text-purple-500" />
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      purpose: 'Targeted advertising and marketing campaigns',
      icon: <Database className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies on our website and how you can manage your cookie preferences."
      keywords="cookie policy, privacy, data protection, website cookies"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 mt-8">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      {cookie.icon}
                      <h3 className="text-lg font-semibold text-white ml-3">{cookie.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-3">{cookie.description}</p>
                    <p className="text-sm text-gray-400">
                      <strong>Purpose:</strong> {cookie.purpose}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in several ways. Please note that removing or blocking 
                cookies can impact your user experience and parts of our website may no longer function properly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                    <p className="text-gray-300">
                      Most web browsers allow you to control cookies through their settings preferences. 
                      You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent Banner</h3>
                    <p className="text-gray-300">
                      When you first visit our website, you'll see a cookie consent banner where you can 
                      choose which types of cookies you want to allow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Links</h3>
                    <p className="text-gray-300">
                      For third-party cookies, you can often opt out directly through the service provider's website.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6">
                We may use third-party services that set their own cookies. These include:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Google Analytics for website analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Social media platforms for sharing features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Marketing and advertising platforms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Customer support and chat services
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Cookie Policy from time to time. We will notify you of any changes 
                by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +1 (302) 464-0950
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default CookiesPage
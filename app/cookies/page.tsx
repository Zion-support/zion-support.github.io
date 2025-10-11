'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies on our website." />
        <meta name="keywords" content="cookie policy, cookies, privacy, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Cookie Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn about our cookie policy and how we use cookies on our website.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 mb-6">
                  We use cookies to improve your experience on our website, analyze site usage, and personalize content.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-6">
                  You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our Cookie Policy, please contact us at{' '}
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CookiesPage

import React from 'react'

import Layout from '../layout'

const CookiePolicyPage: React.FC = () => {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
      keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• View which cookies are stored on your device</li>
                <li>• Delete cookies individually or all at once</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block third-party cookies</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="text-gray-300">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CookiePolicyPage
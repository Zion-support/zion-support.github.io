import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cookie, Settings, Shield, Eye, Database } from 'lucide-react'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Enable basic website functionality, security, and accessibility features.',
      examples: ['Session management', 'Security tokens', 'User preferences'],
      required: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Collect anonymous information about website usage to improve user experience.',
      examples: ['Page views', 'Time spent on site', 'Traffic sources'],
      required: false
    },
    {
      icon: Database,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'Remember your preferences and provide personalized content.',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      required: false
    },
    {
      icon: Shield,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      purpose: 'Show you relevant ads and measure the effectiveness of our marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      required: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cookies Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Information about cookie types, purposes, and your choices." />
        <meta name="keywords" content="cookies policy, cookie consent, website cookies, privacy, data collection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies to enhance your experience on our website
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>Last updated: December 2024</span>
              <span>•</span>
              <span>Effective immediately</span>
            </div>
          </div>
        </div>

        {/* What Are Cookies Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site. Cookies can be either "session" cookies (which are 
                deleted when you close your browser) or "persistent" cookies (which remain on your device 
                for a set period of time).
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{cookie.title}</h3>
                        {cookie.required && (
                          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{cookie.description}</p>
                      <p className="text-sm text-gray-400 mb-3"><strong>Purpose:</strong> {cookie.purpose}</p>
                      <div>
                        <p className="text-sm text-gray-400 mb-2"><strong>Examples:</strong></p>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {cookie.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cookie Management */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You can control and manage cookies in several ways. Please note that removing or blocking 
                  cookies may impact your user experience and parts of our website may no longer be fully 
                  accessible or functional.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                  <p>
                    When you first visit our website, you'll see a cookie consent banner where you can 
                    choose which types of cookies you want to accept.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              If you have any questions about our use of cookies, please contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Update Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiesPage
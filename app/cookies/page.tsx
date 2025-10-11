import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cookie, Settings, Shield, CheckCircle, AlertTriangle, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Authentication, security, and basic functionality',
      duration: 'Session',
      required: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website analytics and performance monitoring',
      duration: '2 years',
      required: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'User preferences and enhanced features',
      duration: '1 year',
      required: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      purpose: 'Advertising and marketing optimization',
      duration: '1 year',
      required: false
    }
  ]

  const cookieDetails = [
    {
      name: '_ga',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: 'session_id',
      type: 'Essential',
      purpose: 'Maintains user session',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'user_preferences',
      type: 'Functional',
      purpose: 'Stores user preferences',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ]

  const rights = [
    'Accept or reject non-essential cookies',
    'Withdraw consent at any time',
    'Access information about cookies we use',
    'Request deletion of cookie data',
    'Opt-out of marketing cookies'
  ]

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how we use cookies on our website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, data collection, privacy, website tracking" />
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
                Learn about how we use cookies on our website and how you can manage your cookie preferences.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    <strong>Note:</strong> You can control and manage cookies through your browser settings. 
                    However, disabling certain cookies may affect the functionality of our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      cookie.required 
                        ? 'bg-gradient-to-r from-red-400 to-pink-500' 
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                    }`}>
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{cookie.name}</h3>
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cookie.required 
                            ? 'bg-red-500/20 text-red-400' 
                            : 'bg-cyan-500/20 text-cyan-400'
                        }`}>
                          {cookie.required ? 'Required' : 'Optional'}
                        </span>
                        <span className="ml-3 text-sm text-gray-400">Duration: {cookie.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <p className="text-sm text-gray-400"><strong>Purpose:</strong> {cookie.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Specific Cookies We Use
              </h2>
              <p className="text-xl text-gray-300">
                Detailed information about the cookies on our website
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Type</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Purpose</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Duration</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="py-4 px-6 text-cyan-400 font-mono">{cookie.name}</td>
                      <td className="py-4 px-6 text-gray-300">{cookie.type}</td>
                      <td className="py-4 px-6 text-gray-300">{cookie.purpose}</td>
                      <td className="py-4 px-6 text-gray-300">{cookie.duration}</td>
                      <td className="py-4 px-6 text-gray-300">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Cookie Rights
              </h2>
              <p className="text-xl text-gray-300">
                You have control over cookies and your data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Your Rights</h3>
                </div>
                <ul className="space-y-4">
                  {rights.map((right, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      {right}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Settings className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Manage Cookies</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    You can manage your cookie preferences through our cookie banner or your browser settings.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Manage Cookie Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CookiesPage
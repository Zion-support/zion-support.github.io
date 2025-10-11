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
      purpose: 'Website performance, user behavior, and improvements',
      icon: Settings
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      purpose: 'Personalized ads, campaign tracking, and social media integration',
      icon: Cookie
    }
  ]

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Distinguishes unique users',
      duration: '2 years',
      type: 'Analytics'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Distinguishes unique users',
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
            <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <cookie.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cookie.type}</h3>
                <p className="text-gray-300 mb-4">{cookie.description}</p>
                <div className="bg-cyan-500/20 rounded-lg p-4">
                  <p className="text-cyan-300 text-sm font-semibold">Purpose: {cookie.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cookie Details</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left text-white font-semibold py-4 px-4">Cookie Name</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Purpose</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Duration</th>
                  <th className="text-left text-white font-semibold py-4 px-4">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="text-cyan-400 font-mono py-4 px-4">{cookie.name}</td>
                    <td className="text-gray-300 py-4 px-4">{cookie.purpose}</td>
                    <td className="text-gray-300 py-4 px-4">{cookie.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        cookie.type === 'Essential' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {cookie.type}
                      </span>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Managing Your Cookie Preferences</h2>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 mb-4">
                You can control and delete cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Block all cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Block third-party cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Delete existing cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Set preferences for specific websites
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Accept all cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Customize your preferences
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  Reject non-essential cookies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Cookies?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: privacy@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CookiesPage
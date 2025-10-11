import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cookie, Settings, Shield, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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
      purpose: 'Website performance and user behavior analysis',
      icon: Settings
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      purpose: 'Personalized advertising and content delivery',
      icon: Cookie
    }
  ]

  const cookieList = [
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
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Information about cookie types, purposes, and how to manage your preferences." />
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
                This policy explains how we use cookies and similar technologies on our website 
                to enhance your browsing experience and provide personalized content.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and enabling various website features.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent cookies 
                (which remain on your device for a set period of time).
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
              <p className="text-xl text-gray-300">
                We use different types of cookies for various purposes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <cookie.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{cookie.type}</h3>
                  <p className="text-gray-300 mb-4">{cookie.description}</p>
                  <div className="text-cyan-400 font-semibold">{cookie.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-white font-semibold py-3">Cookie Name</th>
                      <th className="text-white font-semibold py-3">Purpose</th>
                      <th className="text-white font-semibold py-3">Duration</th>
                      <th className="text-white font-semibold py-3">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieList.map((cookie, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="text-cyan-400 font-mono py-3">{cookie.name}</td>
                        <td className="text-gray-300 py-3">{cookie.purpose}</td>
                        <td className="text-gray-300 py-3">{cookie.duration}</td>
                        <td className="text-gray-300 py-3">{cookie.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Cookie Banner:</strong> When you first visit our website, you'll see a cookie banner 
                    where you can choose which types of cookies to accept.
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Opt-out Tools:</strong> You can use industry opt-out tools to manage advertising cookies 
                    from third-party services.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
              <p className="text-gray-300 mb-8">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-4">
                <div className="text-cyan-400 font-semibold">Email: kleber@ziontechgroup.com</div>
                <div className="text-cyan-400 font-semibold">Phone: (302) 464-0950</div>
                <div className="text-gray-300">
                  Address: 364 E Main St STE 1008, Middletown, DE 19709
                </div>
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
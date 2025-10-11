'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cookie, Settings, Shield, CheckCircle, ArrowRight, Info } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly',
      icon: Shield,
      examples: ['Authentication', 'Security', 'Load balancing'],
      required: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website',
      icon: Settings,
      examples: ['Google Analytics', 'Page views', 'User behavior'],
      required: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for advertising',
      icon: Cookie,
      examples: ['Ad targeting', 'Social media', 'Remarketing'],
      required: false
    }
  ]

  const cookieSettings = [
    {
      category: 'Essential Cookies',
      description: 'Required for basic website functionality',
      enabled: true,
      canDisable: false
    },
    {
      category: 'Analytics Cookies',
      description: 'Help us improve our website performance',
      enabled: true,
      canDisable: true
    },
    {
      category: 'Marketing Cookies',
      description: 'Used for personalized advertising',
      enabled: false,
      canDisable: true
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage and Management</title>
        <meta name="description" content="Learn about how we use cookies on our website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, website cookies, cookie management, privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This page explains how we use cookies on our website and how you can manage your cookie preferences. 
              We respect your privacy and give you control over your data.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{type.name}</h3>
                      {type.required && (
                        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300">
                You can control which cookies you accept
              </p>
            </div>

            <div className="space-y-4">
              {cookieSettings.map((setting, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{setting.category}</h3>
                      <p className="text-gray-300 text-sm">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-6 rounded-full ${setting.enabled ? 'bg-cyan-500' : 'bg-gray-600'} relative transition-colors`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                      </div>
                      {!setting.canDisable && (
                        <span className="text-xs text-gray-400">Required</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Save Preferences
              </button>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Google Analytics for website analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Social media platforms for sharing features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Advertising networks for targeted ads
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our cookie policy or how we use cookies, 
              please contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                <ArrowRight className="w-5 h-5 mr-2 inline" />
                Contact Us
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
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
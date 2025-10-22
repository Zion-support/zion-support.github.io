'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'

  const cookieTypes = [
    {
      title: 'Essential',
      description: 'Required for the website to function properly',
      icon: Shield,
      necessary: true
    },
    {
      title: 'Analytics',
      description: 'Help us understand how visitors interact with our website',
      icon: Database,
      necessary: false
    },
    {
      title: 'Functional',
      description: 'Enable enhanced functionality and personalization',
      icon: Settings,
      necessary: false
    },
    {
      title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye,
      necessary: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how we use cookies on our website and your options for managing them." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">What are cookies?</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">How we use cookies</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <cookie.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{cookie.title}</h3>
                      {cookie.necessary && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">
                          Necessary
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{cookie.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Managing cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                can impact your user experience and parts of our website may no longer be fully accessible.
              </p>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-cyan-400" />
                  Cookie Settings
                </h3>
                <p className="text-gray-300 mb-4">
                  You can manage your cookie preferences using our cookie settings panel below:
                </p>
                <div className="space-y-4">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <cookie.icon className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">{cookie.title}</div>
                          <div className="text-gray-400 text-sm">{cookie.description}</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={cookie.necessary}
                          disabled={cookie.necessary}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Third-party cookies</h2>
              <p className="text-gray-300 mb-6">
                We may also use third-party cookies from trusted partners to help us analyze website usage, 
                provide social media features, and deliver relevant advertisements.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default CookiesPage
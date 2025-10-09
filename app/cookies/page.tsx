import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Clock, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session state across page requests',
          duration: 'Session',
          type: 'HTTP'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          type: 'HTTP'
        },
        {
          name: 'preferences',
          purpose: 'Stores your basic website preferences',
          duration: '1 year',
          type: 'HTTP'
        }
      ]
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '2 years',
          type: 'HTTP'
        },
        {
          name: '_ga_*',
          purpose: 'Google Analytics - stores session state',
          duration: '2 years',
          type: 'HTTP'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '24 hours',
          type: 'HTTP'
        }
      ]
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      required: false,
      cookies: [
        {
          name: 'language',
          purpose: 'Remembers your language preference',
          duration: '1 year',
          type: 'HTTP'
        },
        {
          name: 'theme',
          purpose: 'Stores your theme preference (light/dark)',
          duration: '1 year',
          type: 'HTTP'
        },
        {
          name: 'notifications',
          purpose: 'Tracks which notifications you have dismissed',
          duration: '30 days',
          type: 'HTTP'
        }
      ]
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for advertising purposes.',
      required: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions and retargeting',
          duration: '3 months',
          type: 'HTTP'
        },
        {
          name: '_gcl_au',
          purpose: 'Google Ads - conversion tracking',
          duration: '3 months',
          type: 'HTTP'
        },
        {
          name: 'li_sugr',
          purpose: 'LinkedIn - tracks user behavior for advertising',
          duration: '3 months',
          type: 'HTTP'
        }
      ]
    }
  ];

  const cookieSettings = {
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Cookie className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience 
              and provide personalized services on our website.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 20, 2024
            </div>
          </section>

          {/* What Are Cookies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">What Are Cookies?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                enabling various website functions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Data Storage</h3>
                  <p className="text-gray-300 text-sm">
                    Small pieces of data stored on your device
                  </p>
                </div>
                <div className="text-center">
                  <Settings className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Preferences</h3>
                  <p className="text-gray-300 text-sm">
                    Remember your settings and choices
                  </p>
                </div>
                <div className="text-center">
                  <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
                  <p className="text-gray-300 text-sm">
                    Help us understand website usage
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Types of Cookies We Use</h2>
            <div className="space-y-8">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {category.required ? (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          Required
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Optional
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-white">Cookie Name</th>
                          <th className="text-left py-3 px-4 text-white">Purpose</th>
                          <th className="text-left py-3 px-4 text-white">Duration</th>
                          <th className="text-left py-3 px-4 text-white">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.cookies.map((cookie, cookieIndex) => (
                          <tr key={cookieIndex} className="border-b border-white/10">
                            <td className="py-3 px-4">
                              <code className="text-cyan-400">{cookie.name}</code>
                            </td>
                            <td className="py-3 px-4 text-gray-300">{cookie.purpose}</td>
                            <td className="py-3 px-4 text-gray-300">{cookie.duration}</td>
                            <td className="py-3 px-4 text-gray-300">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cookie Settings */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Manage Your Cookie Preferences</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6">
                You can control which cookies we use by adjusting your preferences below. 
                Note that disabling certain cookies may affect the functionality of our website.
              </p>
              
              <div className="space-y-6">
                {cookieCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
                      <p className="text-gray-300 text-sm">{category.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      {category.required ? (
                        <span className="text-gray-400 text-sm">Required</span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={cookieSettings[category.name.toLowerCase().replace(' ', '_') as keyof typeof cookieSettings]}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Save Preferences
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200">
                  Accept All
                </button>
                <button className="border border-gray-400 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-200">
                  Reject All
                </button>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Third-Party Cookies</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6">
                We also use third-party services that may set their own cookies. These include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Services</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Google Analytics - Website traffic analysis</li>
                    <li>• Google Tag Manager - Tag management</li>
                    <li>• Hotjar - User behavior analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Marketing Services</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Facebook Pixel - Social media advertising</li>
                    <li>• LinkedIn Insight Tag - Professional networking</li>
                    <li>• Google Ads - Search advertising</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Control Your Data</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You have the right to control how your data is collected and used through cookies.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Accept or reject non-essential cookies</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• Request data deletion</li>
                  <li>• Access your personal data</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Settings className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You can also control cookies through your browser settings.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Block all cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set cookie preferences</li>
                  <li>• Enable/disable third-party cookies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this cookie policy, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="/privacy"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cookie, Settings, Shield, BarChart, Target, Eye } from 'lucide-react'

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, website analytics" />
      </Helmet>
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cookie className="w-12 h-12 text-cyan-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8">
              
              {/* What Are Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  enabling various website functions.
                </p>
              </section>

              {/* Types of Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-cyan-400 mr-3" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Shield className="w-5 h-5 text-green-400 mr-2" />
                      Essential Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Session management and security</li>
                      <li>Load balancing and performance</li>
                      <li>User authentication</li>
                      <li>Form submission and validation</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <BarChart className="w-5 h-5 text-blue-400 mr-2" />
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Google Analytics for traffic analysis</li>
                      <li>Page views and user behavior tracking</li>
                      <li>Performance monitoring</li>
                      <li>Error tracking and debugging</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-purple-400 mr-2" />
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies are used to deliver relevant advertisements and track campaign performance.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Ad targeting and personalization</li>
                      <li>Conversion tracking</li>
                      <li>Social media integration</li>
                      <li>Remarketing campaigns</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Eye className="w-5 h-5 text-yellow-400 mr-2" />
                      Preference Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies remember your choices and preferences to personalize your experience.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Language and region settings</li>
                      <li>Theme and display preferences</li>
                      <li>Accessibility settings</li>
                      <li>User interface customizations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-300">Website traffic and user behavior analysis</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Google Tag Manager</h4>
                    <p className="text-sm text-gray-300">Tag management and tracking implementation</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Social Media Widgets</h4>
                    <p className="text-sm text-gray-300">Social sharing and engagement features</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">CDN Services</h4>
                    <p className="text-sm text-gray-300">Content delivery and performance optimization</p>
                  </div>
                </div>
              </section>

              {/* Cookie Management */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                    <p className="text-gray-300 mb-3">
                      Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Block all cookies</li>
                      <li>Allow only first-party cookies</li>
                      <li>Delete existing cookies</li>
                      <li>Set up notifications for new cookies</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Banner</h3>
                    <p className="text-gray-300 mb-3">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Accept all cookies</li>
                      <li>Reject non-essential cookies</li>
                      <li>Customize your preferences</li>
                      <li>Learn more about each cookie type</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Opt-Out Tools</h3>
                    <p className="text-gray-300 mb-3">
                      You can use these tools to opt out of specific tracking:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Google Analytics Opt-out Browser Add-on</li>
                      <li>Digital Advertising Alliance Opt-out Page</li>
                      <li>Network Advertising Initiative Opt-out Tool</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Impact of Disabling Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Impact of Disabling Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>You may need to re-enter information on each visit</li>
                  <li>Personalized content and recommendations may not be available</li>
                  <li>Some interactive features may not work correctly</li>
                  <li>We may not be able to remember your preferences</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookie Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  Different cookies have different lifespans:
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-white font-medium">Session Cookies</span>
                    <span className="text-gray-300">Deleted when you close your browser</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-white font-medium">Persistent Cookies</span>
                    <span className="text-gray-300">Remain for 30 days to 2 years</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-white font-medium">Analytics Cookies</span>
                    <span className="text-gray-300">Typically 2 years</span>
                  </div>
                </div>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on this page.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-white font-semibold mb-2">Zion Tech Group</p>
                  <p className="text-gray-300">Email: privacy@ziontechgroup.com</p>
                  <p className="text-gray-300">Phone: (302) 464-0950</p>
                  <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CookiesPage
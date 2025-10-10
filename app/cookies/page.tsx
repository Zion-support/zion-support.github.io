'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              {/* What Are Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-cyan-400" />
                  What Are Cookies?
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p>
                    Cookies allow websites to recognize your device and remember information about your visit, such as your preferred language and other settings. This can make your next visit easier and the site more useful to you.
                  </p>
                </div>
              </section>

              {/* Types of Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-purple-400" />
                  Types of Cookies We Use
                </h2>
                <div className="space-y-8">
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Essential Cookies
                    </h3>
                    <p className="text-gray-300 mb-4">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Authentication cookies</li>
                      <li>Security cookies</li>
                      <li>Load balancing cookies</li>
                      <li>User interface customization cookies</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                      <Settings className="w-5 h-5 text-blue-400" />
                      Functional Cookies
                    </h3>
                    <p className="text-gray-300 mb-4">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Language preference cookies</li>
                      <li>Region selection cookies</li>
                      <li>User preference cookies</li>
                      <li>Social media integration cookies</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                      <Eye className="w-5 h-5 text-yellow-400" />
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-300 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Google Analytics cookies</li>
                      <li>Page view tracking cookies</li>
                      <li>User behavior analysis cookies</li>
                      <li>Performance monitoring cookies</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-red-400" />
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-300 mb-4">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to limit the number of times you see an advertisement.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Advertising targeting cookies</li>
                      <li>Social media advertising cookies</li>
                      <li>Remarketing cookies</li>
                      <li>Conversion tracking cookies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-green-400" />
                  How We Use Cookies
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We use cookies for various purposes, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ensuring our website functions properly and securely</li>
                    <li>Remembering your preferences and settings</li>
                    <li>Analyzing how our website is used to improve performance</li>
                    <li>Providing personalized content and advertisements</li>
                    <li>Measuring the effectiveness of our marketing campaigns</li>
                    <li>Integrating with third-party services and social media platforms</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Info className="w-6 h-6 text-orange-400" />
                  Third-Party Cookies
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies and you should check the relevant third-party website for more information about their cookies.
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Third-Party Services We Use:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                      <li><strong>Google Tag Manager:</strong> Tag management and tracking</li>
                      <li><strong>Social Media Platforms:</strong> Social sharing and integration features</li>
                      <li><strong>Marketing Tools:</strong> Email marketing and customer relationship management</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Managing Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-cyan-400" />
                  Managing Your Cookie Preferences
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    You have several options for managing cookies on our website:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                      <p className="mb-4">Most web browsers allow you to control cookies through their settings preferences. You can:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete existing cookies</li>
                        <li>Set up notifications when cookies are set</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Tool</h3>
                      <p className="mb-4">We provide a cookie consent tool that allows you to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Accept or reject different categories of cookies</li>
                        <li>View detailed information about each cookie</li>
                        <li>Change your preferences at any time</li>
                        <li>Withdraw consent for non-essential cookies</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Opt-Out Links</h3>
                      <p className="mb-4">For specific third-party services, you can opt out directly:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-cyan-400 hover:text-cyan-300">Google Analytics Opt-out</a></li>
                        <li>Google Ads: <a href="https://adssettings.google.com/" className="text-cyan-400 hover:text-cyan-300">Google Ads Settings</a></li>
                        <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-cyan-400 hover:text-cyan-300">Facebook Ad Preferences</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Impact of Disabling Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Impact of Disabling Cookies
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you choose to disable cookies, some features of our website may not function properly. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Inability to remember your preferences and settings</li>
                    <li>Reduced functionality of interactive features</li>
                    <li>Less personalized content and recommendations</li>
                    <li>Difficulty accessing certain areas of the website</li>
                    <li>Inability to track your progress through multi-step processes</li>
                  </ul>
                </div>
              </section>

              {/* Updates to Cookie Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-pink-400" />
                  Updates to This Cookie Policy
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    We will notify you of any material changes by posting the updated Cookie Policy on this page and updating the "Last updated" date. We encourage you to review this Cookie Policy periodically.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Contact Us
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-cyan-400" />
                      <span>Email: privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-cyan-400" />
                      <span>Phone: (302) 464-0950</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-cyan-400 mt-1" />
                      <div>
                        <div>Address:</div>
                        <div>364 E Main St STE 1008</div>
                        <div>Middletown, DE 19709</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized content." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, website analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn about how we use cookies and similar technologies to improve your experience.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-600">
                  This Cookie Policy explains how Zion Tech Group ("we," "us," or "our") uses cookies and similar technologies on our website https://ziontechgroup.com.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Essential Cookies</h3>
                  <p className="text-blue-800 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <ul className="list-disc list-inside text-blue-800 space-y-2">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                    <li>User authentication</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-green-900 mb-4">Analytics Cookies</h3>
                  <p className="text-green-800 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc list-inside text-green-800 space-y-2">
                    <li>Page views and visits</li>
                    <li>Time spent on pages</li>
                    <li>Traffic sources</li>
                    <li>User behavior patterns</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">Functional Cookies</h3>
                  <p className="text-purple-800 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="list-disc list-inside text-purple-800 space-y-2">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form data retention</li>
                    <li>User preferences</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-orange-900 mb-4">Marketing Cookies</h3>
                  <p className="text-orange-800 mb-4">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <ul className="list-disc list-inside text-orange-800 space-y-2">
                    <li>Ad targeting</li>
                    <li>Campaign tracking</li>
                    <li>Conversion measurement</li>
                    <li>Remarketing</li>
                  </ul>
                </div>
              </div>

              {/* Specific Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specific Cookies We Use</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_ga</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                        <td className="px-6 py-4 text-sm text-gray-600">2 years</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Analytics</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_gid</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                        <td className="px-6 py-4 text-sm text-gray-600">24 hours</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Analytics</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">session_id</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Maintains user session</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Session</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Essential</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">preferences</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Stores user preferences</td>
                        <td className="px-6 py-4 text-sm text-gray-600">1 year</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-600 mb-4">
                  We may also use third-party services that set cookies on our behalf. These include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Tag Manager:</strong> For managing tracking codes and tags</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Marketing Tools:</strong> For advertising and marketing campaign tracking</li>
                </ul>
                <p className="text-gray-600">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
                </p>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                <p className="text-gray-600 mb-4">
                  You have several options for managing cookies:
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set up notifications when cookies are set</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Consent</h3>
                <p className="text-gray-600 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences</li>
                  <li>Change your settings at any time</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Opt-Out Links</h3>
                <p className="text-gray-600 mb-4">
                  For specific third-party services, you can opt out directly:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Google Ads Settings</a></li>
                  <li><a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
                </ul>
              </div>

              {/* Impact of Disabling Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                <p className="text-gray-600 mb-4">
                  If you choose to disable cookies, please note that:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Some features of our website may not function properly</li>
                  <li>We may not be able to remember your preferences</li>
                  <li>Your experience may be less personalized</li>
                  <li>We may not be able to provide certain services</li>
                </ul>
              </div>

              {/* Updates to Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Cookie Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-600">
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
                  <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;
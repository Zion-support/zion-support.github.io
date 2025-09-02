import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, ToggleLeft } from 'lucide-react';

const Cookies: NextPage = () => {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
      keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website to improve your experience.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* What Are Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-blue-600" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us 
                  provide you with a better experience by remembering your preferences and enabling various website 
                  functionalities. Cookies can be either "session cookies" (temporary) or "persistent cookies" (stored 
                  for a longer period).
                </p>
              </section>

              {/* Types of Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic functions like 
                      page navigation, access to secure areas, and remembering your preferences. The website cannot 
                      function properly without these cookies.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Always Active
                      </span>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting 
                      information anonymously. This helps us improve our website's performance and user experience.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Optional
                      </span>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies enable enhanced functionality and personalization, such as remembering your language 
                      preferences, login status, and other customizations.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        Optional
                      </span>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements. 
                      They may also be used to measure the effectiveness of advertising campaigns.
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Optional
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Specific Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Specific Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_ga</td>
                        <td className="border border-gray-300 px-4 py-2">Google Analytics - Distinguishes users</td>
                        <td className="border border-gray-300 px-4 py-2">2 years</td>
                        <td className="border border-gray-300 px-4 py-2">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_gid</td>
                        <td className="border border-gray-300 px-4 py-2">Google Analytics - Distinguishes users</td>
                        <td className="border border-gray-300 px-4 py-2">24 hours</td>
                        <td className="border border-gray-300 px-4 py-2">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">session_id</td>
                        <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                        <td className="border border-gray-300 px-4 py-2">Session</td>
                        <td className="border border-gray-300 px-4 py-2">Essential</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-mono text-sm">preferences</td>
                        <td className="border border-gray-300 px-4 py-2">Stores user preferences</td>
                        <td className="border border-gray-300 px-4 py-2">1 year</td>
                        <td className="border border-gray-300 px-4 py-2">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Cookie Management */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-blue-600" />
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Browser Settings</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Most web browsers allow you to control cookies through their settings. You can set your browser 
                      to refuse cookies or delete certain cookies. However, disabling cookies may affect the functionality 
                      of our website.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookie Consent Banner</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you first visit our website, you'll see a cookie consent banner where you can choose which 
                      types of cookies to accept or reject.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Opt-Out</h3>
                    <p className="text-gray-700 leading-relaxed">
                      For analytics and advertising cookies, you can opt out through the respective third-party services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li>Google Ads: <a href="https://adssettings.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain third-party cookies from services we use, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Customer Support Tools:</strong> For providing customer service functionality</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Data Protection and Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and personal data. Our use of cookies is governed by our 
                  <a href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a>. We only use cookies 
                  for legitimate business purposes and in accordance with applicable data protection laws, including GDPR 
                  and CCPA where applicable.
                </p>
              </section>

              {/* Updates to Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                  updated policy on our website and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    Email: <a href="mailto:privacy@ziontechgroup.com" className="text-blue-600 hover:underline">privacy@ziontechgroup.com</a><br />
                    Phone: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a><br />
                    Address: 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cookies;
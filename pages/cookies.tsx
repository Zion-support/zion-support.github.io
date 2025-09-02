import React from 'react';
import Head from 'next/head';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Cookies() {
  return (
    <PageTransition>
      <Head>
        <title>Cookie Policy — Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Cookie className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Cookie Policy</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Use Cookies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This cookie policy explains how Zion Tech Group uses cookies and similar technologies 
              when you visit our website and how you can control them.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Cookie className="h-5 w-5 mr-2 text-blue-600" />
                What Are Cookies?
              </h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                a website. They are widely used to make websites work more efficiently and to provide information 
                to website owners about how users interact with their sites.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-green-600" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies enable the website to provide enhanced functionality and personalization, 
                    such as remembering your preferences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    These cookies are used to track visitors across websites to display relevant and engaging 
                    advertisements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-purple-600" />
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-700">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can 
                  set your browser to refuse cookies or delete certain cookies. Here are links to cookie 
                  settings for the most popular browsers:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li>• <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li>• <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                  <li>• <a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some cookies on our website are set by third-party services. We use services like Google Analytics 
                  to help us understand how our website is used. These third parties may also use cookies to collect 
                  information about your activities across different websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  When you first visit our website, you may see a cookie consent banner. By continuing to use our 
                  website after seeing this banner, you consent to our use of cookies as described in this policy. 
                  You can change your cookie preferences at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this cookie policy from time to time to reflect changes in our practices or for 
                  other operational, legal, or regulatory reasons. We will notify you of any material changes by 
                  posting the updated policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our use of cookies or this cookie policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (302) 464-0950<br />
                    <strong>Address:</strong> San Francisco, CA, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
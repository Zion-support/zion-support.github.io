import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cookie, Settings, Shield, Mail, Phone } from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Cookie Policy - Learn about how we use cookies and similar technologies on our website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Cookie className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies 
                to enhance your experience on our website.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and to provide 
                information to website owners.
              </p>

              <h2>How We Use Cookies</h2>
              <p>We use cookies for several purposes:</p>
              <ul>
                <li>To remember your preferences and settings</li>
                <li>To analyze how our website is used</li>
                <li>To improve our website's performance</li>
                <li>To provide personalized content and advertisements</li>
                <li>To ensure website security</li>
              </ul>

              <h2>Types of Cookies We Use</h2>
              
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation, access to secure areas, and remembering your preferences. The website 
                cannot function properly without these cookies.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and 
                reporting information anonymously. This helps us improve our website's performance and user experience.
              </p>

              <h3>Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites. The intention is to display ads 
                that are relevant and engaging for individual users and thereby more valuable for publishers 
                and third-party advertisers.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>

              <h2>Third-Party Cookies</h2>
              <p>
                We may also use third-party cookies from trusted partners to help us analyze website usage, 
                provide social media features, and deliver relevant advertisements. These third parties may 
                include:
              </p>
              <ul>
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing features</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Customer support tools for live chat functionality</li>
              </ul>

              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You have several options for managing cookies:
              </p>
              
              <h3>Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can set your 
                browser to refuse cookies or delete certain cookies. However, please note that if you 
                delete or refuse cookies, some features of our website may not function properly.
              </p>

              <h3>Cookie Consent Banner</h3>
              <p>
                When you first visit our website, you'll see a cookie consent banner that allows you to 
                choose which types of cookies you want to accept. You can change your preferences at any 
                time by clicking the cookie settings link in our website footer.
              </p>

              <h3>Opt-Out Links</h3>
              <p>
                For third-party cookies, you can often opt out directly through the third-party's website. 
                For example:
              </p>
              <ul>
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
              </ul>

              <h2>Cookie Retention</h2>
              <p>
                Different cookies have different retention periods:
              </p>
              <ul>
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
                <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
                <li><strong>Marketing cookies:</strong> Typically retained for 1 year</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2">privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-2">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Cookie Settings:</span>
                  <span className="ml-2">Available in website footer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Manage Your Cookie Preferences
                </h2>
                <p className="text-gray-600">
                  You can customize your cookie preferences at any time. Choose which types of cookies 
                  you want to allow on our website.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                    <p className="text-sm text-gray-600">Required for basic website functionality</p>
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 w-12 h-6">
                    <div className="bg-gray-400 rounded-full w-4 h-4"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600">Help us understand website usage</p>
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 w-12 h-6">
                    <div className="bg-gray-400 rounded-full w-4 h-4"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600">Used for targeted advertising</p>
                  </div>
                  <div className="bg-gray-200 rounded-full p-1 w-12 h-6">
                    <div className="bg-gray-400 rounded-full w-4 h-4"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
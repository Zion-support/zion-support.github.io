import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Eye, Shield, Mail, Phone } from 'lucide-react';

const Cookies: NextPage = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to improve your experience on our website.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Cookie className="w-8 h-8 text-blue-600 mr-3" />
                What Are Cookies?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-700">
                  Cookies allow a website to recognize a user's device and remember information about their visit, 
                  such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                How We Use Cookies
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Zion Tech Group uses cookies for several purposes to enhance your experience on our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used and improve its performance</li>
                  <li>To provide personalized content and recommendations</li>
                  <li>To enable certain website functionality</li>
                  <li>To track the effectiveness of our marketing campaigns</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
                    access to secure areas, and remembering your preferences. The website cannot function properly without these cookies.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                    This helps us improve our website's performance and user experience.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Google Analytics, performance monitoring, usage statistics
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Functional Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your language preference 
                    or region. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Language preferences, region settings, user interface customization
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
                    and engaging for individual users and thereby more valuable for publishers and third-party advertisers.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Examples:</strong> Advertising networks, social media integration, remarketing
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                Third-Party Cookies
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Some cookies on our website are set by third-party services. These may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Advertising Networks:</strong> To deliver relevant advertisements</li>
                  <li><strong>Customer Support Tools:</strong> To provide live chat and support functionality</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies 
                  to understand how they use cookies and your data.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Duration</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Session Cookies</h4>
                    <p className="text-gray-700">These are temporary cookies that expire when you close your browser.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Persistent Cookies</h4>
                    <p className="text-gray-700">These cookies remain on your device for a set period or until you delete them.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">First-Party Cookies</h4>
                    <p className="text-gray-700">Set directly by our website and can only be read by our domain.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Third-Party Cookies</h4>
                    <p className="text-gray-700">Set by domains other than ours, typically by third-party services we use.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Managing Your Cookie Preferences
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  You have several options for managing cookies:
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                  <li>Ask for permission before setting cookies</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-2">Cookie Consent</h4>
                <p className="text-gray-700 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept 
                  or reject. You can change your preferences at any time by clicking the cookie settings link in our footer.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Opt-Out Links</h4>
                <p className="text-gray-700">
                  For third-party cookies, you can often opt out directly through the third-party's website. 
                  For example, you can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>You may need to re-enter information more frequently</li>
                  <li>Some personalized features may not work</li>
                  <li>We may not be able to remember your preferences</li>
                  <li>Some interactive features may be limited</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Essential cookies are necessary for the website to function and cannot be disabled.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
                  and updating the "Last updated" date.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                Contact Us
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="mt-4">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '2 years',
      type: 'Analytics' }, {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics' }, {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      type: 'Analytics' }, {
      name: 'session_id',
      purpose: 'Maintains user session state',
      duration: 'Session',
      type: 'Essential' }, {
      name: 'user_preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      type: 'Functional' }, {
      name: 'language',
      purpose: 'Stores user language preference',
      duration: '1 year',
      type: 'Functional' } ];


export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>

          </div>

        {/* What Are Cookies Section */}
        <section className="py-16 bg-white">

                </div>
              </div>
            </div>
          </div>

        {/* Types of Cookies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-gray-600">
                We use different types of cookies for various purposes
              </p>
            </div>

                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <p className="text-gray-600 mb-4">{cookie.purpose}</p>
                  <div>

                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                      Retention Period:
                    </h4>
                    <p style={{ color: '#666' }}>
                      {cookie.retention}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Managing Your Cookie Preferences
            </h2>
            <div style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: 30,
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: 20 }}>
                You have the right to choose whether to accept or reject cookies. You can exercise your cookie rights by 
                setting your preferences in our cookie banner or by adjusting your browser settings.
              </p>
              
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                  Browser Settings:
                </h3>
                <p style={{ color: '#666', lineHeight: 1.5 }}>
                  Most web browsers allow you to control cookies through their settings preferences. You can set your 
                  browser to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, 
                  some features of our website may not function properly.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: 10, color: '#374151' }}>
                  Cookie Banner:
                </h3>
                <p style={{ color: '#666', lineHeight: 1.5 }}>
                  When you first visit our website, you will see a cookie banner that allows you to accept or reject 
                  non-essential cookies. You can change your preferences at any time by clicking the cookie settings 
                  link in our website footer.
                </p>
              </div>
            </div>
          </div>


            </div>
          </div>



export default Page;
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are stored on your device when you visit our website.
                  They help us provide you with a better experience by remembering your preferences and
                  enabling certain functionality.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Essential Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are necessary for the website to function properly. They enable basic
                        functionality like page navigation and access to secure areas.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analytics Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies help us understand how visitors interact with our website by collecting
                        and reporting information anonymously.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Functional Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies enable enhanced functionality and personalization, such as remembering
                        your preferences and settings.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Language preferences, theme settings, form data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Marketing Cookies
                      </h3>
                      <p className="text-gray-600 mb-2">
                        These cookies are used to track visitors across websites to display relevant and
                        engaging advertisements.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Examples:</strong> Advertising cookies, social media cookies, remarketing pixels
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Cookies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Website Functionality
                    </h3>
                    <p className="text-gray-600">
                      To ensure our website works properly and provide you with a seamless experience.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Performance Analysis
                    </h3>
                    <p className="text-gray-600">
                      To understand how our website is used and identify areas for improvement.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalization
                    </h3>
                    <p className="text-gray-600">
                      To remember your preferences and provide customized content and features.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Security
                    </h3>
                    <p className="text-gray-600">
                      To protect against fraud and ensure the security of our website and users.
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    We may use third-party services that set their own cookies. These include:
                  </p>

                </div>
              </div>
            </Card>


              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights and Choices
              </h2>"
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. The Cookie Consent
                Manager allows you to select which categories of cookies you
                accept or reject.
              </p>"
              <p className="text-gray-600 mb-4">
                Essential cookies cannot be rejected as they are strictly
                necessary to provide you with services.
              </p>"
              <p className="text-gray-600">
                If you choose to reject cookies, you may still use our website
                though your access to some functionality and areas of our
                website may be restricted.
              </p>
            </Card>

            {/* Contact */}"
            <Card className="p-6">"
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>"
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other"
                technologies, please contact us at:{' '}
              </p>'
              <div className="bg-gray-100 p-4 rounded-lg">"
                <p className="text-gray-800">
                  <strong>Email: </strong> kleber@ziontechgroup.com
                  <br />
                  <strong>Phon,
    e:</strong> +1 302 464 0950
                  <br />
                  <strong>Addres,
    s:</strong> 364 E Main St STE 1008, Middletown
                  DE 19709
                </p>

              </div>
            </Card>
          </div>

    </>


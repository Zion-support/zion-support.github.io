import React from 'react';
<<<<<<< HEAD
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

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
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                    <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                    <li><strong>Customer Support:</strong> For providing chat and support functionality</li>
                  </ul>
                  <p className="text-gray-600">
                    These third parties have their own privacy policies and cookie practices. We recommend
                    reviewing their policies for more information.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    You have several options for managing cookies:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Browser Settings
                      </h3>
                      <p className="text-gray-600">
                        Most browsers allow you to control cookies through their settings. You can block or
                        delete cookies, or set preferences for specific websites.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Cookie Consent Banner
                      </h3>
                      <p className="text-gray-600">
                        When you first visit our website, you'll see a cookie consent banner where you can
                        choose which types of cookies to accept.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Opt-Out Tools
                      </h3>
                      <p className="text-gray-600">
                        You can use industry opt-out tools to manage advertising cookies and tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact of Disabling Cookies
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Please note that disabling certain cookies may impact your experience on our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Some features may not work properly</li>
                    <li>You may need to re-enter information more frequently</li>
                    <li>Personalized content may not be available</li>
                    <li>We may not be able to remember your preferences</li>
                  </ul>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Updates to This Policy
                </h2>
                <p className="text-gray-600 mb-8">
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for other operational, legal, or regulatory reasons. We will notify you of any material
                  changes by posting the updated policy on our website.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import Layout from './components/Layout';

export default function CookiesPage() {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website."
      keywords="cookie policy, cookies, tracking, website analytics, privacy"
      canonical="https://ziontechgroup.com/cookies"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn about how we use cookies and similar technologies to enhance your experience.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 2025</p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Cookie className="w-6 h-6 mr-3 text-green-600" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 mb-8">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-green-600" />
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 mb-6">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used</li>
                  <li>To improve our website's performance and functionality</li>
                  <li>To provide personalized content and advertisements</li>
                  <li>To ensure website security</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-green-600" />
                  Types of Cookies We Use
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
                    and access to secure areas of the website. The website cannot function properly without these cookies.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information 
                    anonymously. This helps us improve our website's performance and user experience.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
                    and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-green-600" />
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 mb-6">
                  We may also use third-party cookies from trusted partners such as:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Customer support tools for live chat functionality</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-600" />
                  Managing Cookies
                </h2>
                <p className="text-gray-700 mb-6">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Through your browser settings to block or delete cookies</li>
                  <li>By using our cookie consent banner when you first visit our website</li>
                  <li>By contacting us to update your cookie preferences</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Browser Settings</h3>
                  <p className="text-blue-800 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    However, limiting cookies may impact your experience on our website.
                  </p>
                  <p className="text-sm text-blue-700">
                    For more information about managing cookies in specific browsers, visit:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-blue-700 mt-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" className="underline">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="underline">Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="underline">Internet Explorer</a></li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-700 mb-8">
                  We may update this cookie policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 mr-3 text-green-600" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-green-600 mt-1" />
                    <span className="text-gray-700">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
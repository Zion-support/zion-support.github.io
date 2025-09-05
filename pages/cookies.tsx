import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Database, Mail, Phone } from 'lucide-react';
import Layout from './components/Layout';

export default function Cookies() {
  return (
    <Layout 
      title="Cookie Policy | Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
      keywords="cookie policy, cookies, tracking, privacy, website analytics"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-teal-200 mb-8">
              Understanding how we use cookies to improve your experience on our website.
            </p>
            <p className="text-sm text-teal-300">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Cookie className="w-8 h-8 text-green-600 mr-3" />
              What Are Cookies?
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-700">
                Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Settings className="w-8 h-8 text-green-600 mr-3" />
              How We Use Cookies
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Authentication and security</li>
                  <li>Load balancing and performance</li>
                  <li>User interface customization</li>
                  <li>Shopping cart functionality</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Google Analytics</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-3">
                  These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Social media integration</li>
                  <li>Advertising personalization</li>
                  <li>Remarketing campaigns</li>
                  <li>Conversion tracking</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="w-8 h-8 text-green-600 mr-3" />
              Cookie Management
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Browsers:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Chrome: Settings &gt; Privacy &gt; Cookies</li>
                    <li>• Firefox: Options &gt; Privacy &amp; Security</li>
                    <li>• Safari: Preferences &gt; Privacy</li>
                    <li>• Edge: Settings &gt; Cookies and site permissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cookie Preferences:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize cookie settings</li>
                    <li>• Manage cookie categories</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-8 h-8 text-green-600 mr-3" />
              Third-Party Cookies
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Some cookies on our site are set by third-party services that appear on our pages. We have no control over these cookies and they are subject to the privacy policies of the respective third parties.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Services:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Google Analytics</li>
                    <li>• Google Tag Manager</li>
                    <li>• Facebook Pixel</li>
                    <li>• LinkedIn Insight Tag</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Facebook</li>
                    <li>• Twitter</li>
                    <li>• LinkedIn</li>
                    <li>• Instagram</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              Your Rights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Consent</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Right to be informed about cookie use</li>
                  <li>• Right to consent to non-essential cookies</li>
                  <li>• Right to withdraw consent at any time</li>
                  <li>• Right to access cookie information</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Right to data portability</li>
                  <li>• Right to erasure</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-8 h-8 text-green-600 mr-3" />
              Contact Us
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Updates to This Policy</h3>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
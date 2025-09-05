import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, BarChart3, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

export default function CookiePolicy() {
  return (
    <Layout 
      title="Cookie Policy | Zion Tech Group"
      description="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website."
      keywords="cookie policy, cookies, tracking, website analytics, privacy"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Learn about how we use cookies to improve your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> September 5, 2025
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how visitors use their sites.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Zion Tech Group uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. We use both first-party cookies (set by our website) and third-party cookies (set by other services we use).
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your preferences. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>User interface customization cookies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Google Analytics cookies</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Performance monitoring</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to limit the number of times you see an advertisement.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Advertising network cookies</li>
                  <li>Social media cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Conversion tracking cookies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Preference Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable the website to remember information that changes the way the website behaves or looks, such as your preferred language or region.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Location-based cookies</li>
                  <li>User preference cookies</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that set cookies on our website. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Advertising Networks:</strong> For targeted advertising and marketing</li>
                  <li><strong>Customer Support Tools:</strong> For live chat and support functionality</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies</li>
                  <li><strong>Cookie Preferences:</strong> Use our cookie preference center (if available)</li>
                  <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                  <li><strong>Delete Cookies:</strong> You can delete cookies that are already on your device</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Browser-Specific Instructions</h2>
                <p className="text-gray-700 mb-4">
                  Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                <p className="text-gray-700 mb-6">
                  If you choose to disable cookies, some features of our website may not function properly. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Inability to remember your preferences</li>
                  <li>Reduced website functionality</li>
                  <li>Loss of personalized content</li>
                  <li>Difficulty accessing certain features</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Retention</h2>
                <p className="text-gray-700 mb-6">
                  Cookies have different lifespans:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                  <li><strong>First-Party Cookies:</strong> Typically retained for 1-2 years</li>
                  <li><strong>Third-Party Cookies:</strong> Retention varies by provider</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
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
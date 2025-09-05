import { motion } from 'framer-motion';
import Head from 'next/head';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-blue-100">
                Learn about how we use cookies and similar technologies to enhance your experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-3xl font-bold mb-6">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization and user preferences</li>
                <li>Security and fraud prevention</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Eye className="w-6 h-6 mr-2 text-green-600" />
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Settings className="w-6 h-6 mr-2 text-purple-600" />
                    Preference Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies remember your preferences and settings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Database className="w-6 h-6 mr-2 text-orange-600" />
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600">
                    These cookies are used to deliver relevant advertisements.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-6">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Browser settings to block or delete cookies</li>
                <li>Opt-out of specific cookie categories</li>
                <li>Use our cookie preference center</li>
                <li>Contact us for assistance</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-2">+1 302 464 0950</span>
                </div>
                <div className="flex items-start">
                  <Database className="w-5 h-5 mr-2 text-blue-600 mt-1" />
                  <span className="font-semibold">Address:</span>
                  <span className="ml-2">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
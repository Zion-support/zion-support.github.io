import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';

const CookiesPage = () => {
  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website to enhance your browsing experience."
      keywords="cookie policy, privacy, data protection, website cookies, tracking"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding how we use cookies to improve your experience on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience by remembering your preferences 
                    and enabling certain website functionality.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                  <p className="text-gray-600 mb-6">
                    We use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Essential website functionality</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalization and user preferences</li>
                    <li>Security and fraud prevention</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies are necessary for the website to function properly. They cannot be disabled 
                      and are usually set in response to actions you take, such as setting privacy preferences.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Functional Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering 
                      your preferences and settings.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-600 mb-6">
                    You can control and manage cookies in various ways. Most web browsers allow you to 
                    refuse cookies or delete them. However, please note that disabling cookies may affect 
                    the functionality of our website.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center md:col-span-2">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CookiesPage;
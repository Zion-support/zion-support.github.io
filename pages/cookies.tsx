<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';

export default function CookiesPage() {
  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies to enhance your browsing experience and protect your privacy."
      keywords="cookies, privacy, data protection, website analytics, user preferences"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                We use cookies to enhance your browsing experience and provide personalized content. 
                Learn more about our cookie practices and manage your preferences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-xl text-gray-600">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience.
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cookie Policy
                </h1>
                <p className="text-xl text-blue-100">
                  Learn about how we use cookies and similar technologies to enhance your experience.
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
                </p>
              </div>

<<<<<<< HEAD
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Protection</h3>
                  <p className="text-gray-600">
                    We respect your privacy and only use cookies to improve your experience. 
                    You can control which cookies you accept.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Management</h3>
                  <p className="text-gray-600">
                    You can easily manage your cookie preferences at any time. 
                    Change your settings whenever you want.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
=======
          {/* Content Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>

                <h2 className="text-3xl font-bold mb-6">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>

                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our cookie policy, please contact us:
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
}
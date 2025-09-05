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
                </p>
              </div>

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
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group. We're here to help with your technology needs and answer any questions you may have."
      keywords="contact, support, help, technology, AI, IT services, micro SaaS"
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
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge technology? 
                Let's start a conversation about your needs.
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-800">
                  +1 302 464 0950
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-800">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-4">Visit our office</p>
                <p className="text-purple-600 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
import React from 'react';'
import { motion } from 'framer-motion';'
import MainLayout from '../components/layout/MainLayout';'

export default function ContactPage() {
}
return (;
    <MainLayout,
title="Contact - Zion Tech Group""
      description="Get in touch with Zion Tech Group for all your technology needs""
    >
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>"
          <p className="text-xl text-gray-600 mb-8">We'd love to hear from you!</p>'
          <div className="bg-white rounded-lg shadow-lg p-8">"
            <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>"
                <p className="text-gray-600">+1 302 464 0950</p>"
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>"
                <p className="text-gray-600">kleber@ziontechgroup.com</p>"
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>"
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>"
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */};
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div;
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch;
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to start your project? Contact us today for a free consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div;
                className="text-center"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.1 }};
                viewport={{ once: true }};
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </motion.div>

              <motion.div;
                className="text-center"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.2 }};
                viewport={{ once: true }};
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div;
                className="text-center"
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: 0.3 }};
                viewport={{ once: true }};
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );

import Head from 'next/head';'

export default function Contact() {
}
return (;
    <>
      <Head>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT needs" />"
      </Head>
      <main className="min-h-screen bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-16">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>"
            <p className="text-xl text-gray-600">Ready to start your AI transformation journey?</p>"
          </div>
          
          <div className="grid "lg":grid-cols-2 gap-12">"
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>"
              <div className="space-y-6">"
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>"
                  <p className="text-gray-600">contact@ziontechgroup.com</p>"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>"
                  <p className="text-gray-600">+1 (555) 123-4567</p>"
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>"
                  <p className="text-gray-600">"
                    123 Tech Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">"
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>"
              <form className="space-y-6">"
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>"
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg "focus":ring-2 "focus":ring-emerald-500 "focus":border-transparent" />"
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>"
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg "focus":ring-2 "focus":ring-emerald-500 "focus":border-transparent" />"
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>"
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg "focus":ring-2 "focus":ring-emerald-500 "focus":border-transparent"></textarea>"
                </div>
                <button type="submit" className="w-full bg-emerald-500 "hover":bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">"
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );

import React from "react";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, Send, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our expert team for technology solutions and consulting."
      keywords="contact, technology consulting, AI services, cloud solutions, support"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get in touch with our expert team for technology solutions and consulting
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 mb-2">364 E Main St STE 1008</p>
                  <p className="text-sm text-gray-500">Middletown, DE 19709</p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>AI Services</option>
                        <option>IT Services</option>
                        <option>Micro SaaS</option>
                        <option>Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project or requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Expert team with 10+ years of experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Cutting-edge technology solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">24/7 support and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Competitive pricing and flexible terms</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="text-gray-900">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                    <p className="text-gray-600 mb-4">
                      For urgent technical issues, our emergency support team is available 24/7.
                    </p>
                    <div className="flex items-center text-blue-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="font-semibold">+1 302 464 0950</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help transform your business with technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Schedule a Call
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'hello@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: 'Mon-Fri: 9AM-6PM EST'
};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI services, IT solutions, and technology consulting. We're here to help transform your business." />
        <meta name="keywords" content="contact, get in touch, AI services, IT solutions, technology consulting" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Ready to transform your business? Contact us today for expert technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Ready to transform your business? Contact us today for expert technology solutions, 
                consultations, or to discuss your project requirements.
=======
        <meta name="description" content="Get in touch with Zion Tech Group for all your technology needs. We're here to help you succeed." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Ready to transform your business? Get in touch with our team of experts.
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to reach us for your convenience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly</p>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
                  +1 (302) 464-0950
                </a>
=======
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI solutions, cloud services, and technology consulting." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Call Us
              </Link>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Email Us
              </a>
=======
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 9AM-6PM<br />24/7 Support Available</p>
              </motion.div>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-medium">
                  kleber@ziontechgroup.com
                </a>
=======
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 mb-4">Visit our office</p>
                <p className="text-purple-600 font-medium">
                  Delaware, USA
                </p>
=======
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600 mb-4">Business hours</p>
                <p className="text-orange-600 font-medium">
                  Mon - Fri: 9AM - 6PM
                </p>
=======
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              </motion.div>
            </div>
=======
        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
=======
        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Don't wait - let's discuss your project and see how we can help transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Call Now
                  <Phone className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Email Us
                  <Mail className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
=======
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-600">
                Have a project in mind? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </Layout>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    </>
  );
}
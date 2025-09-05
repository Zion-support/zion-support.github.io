import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
=======
import Layout from '../components/Layout';
>>>>>>> cursor/website-audit-and-update-with-deployment-090e

export default function ContactPage() {
  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our expert team for technology solutions and consulting."
      keywords="contact, technology consulting, AI services, cloud solutions, support"
    >
=======

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />
        <meta name="keywords" content="contact, technology consulting, AI services, cloud solutions, IT support" />
      </Head>

>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
<<<<<<< HEAD
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
<<<<<<< HEAD
          </div>
=======
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
            </div>
          </div>
          
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Get in{' '}
=======
                Get In{' '}
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
                Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed.
=======
                Ready to transform your business? Contact our expert team for a free consultation and discover how we can help you achieve your technology goals.
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
=======
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="text-center p-8 rounded-lg hover:bg-gray-50 transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
=======
                <h3 className="text-xl font-bold mb-2">Phone</h3>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                <p className="text-gray-600">+1 302 464 0950</p>
              </motion.div>

              <motion.div
<<<<<<< HEAD
                className="bg-white rounded-lg shadow-lg p-6 text-center"
=======
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                    +1 302 464 0950
                  </a>
                </p>
                <p className="text-sm text-gray-500">24/7 Support Available</p>
              </motion.div>

              <motion.div
                className="text-center p-8 rounded-lg hover:bg-gray-50 transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
=======
                <h3 className="text-xl font-bold mb-2">Email</h3>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
<<<<<<< HEAD
                className="bg-white rounded-lg shadow-lg p-6 text-center"
=======
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-800">
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </motion.div>

              <motion.div
                className="text-center p-8 rounded-lg hover:bg-gray-50 transition-colors"
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
=======
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
                <form className="space-y-6">
<<<<<<< HEAD
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
=======
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-600 hover:text-purple-800">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </a>
                </p>
                <p className="text-sm text-gray-500">Schedule a meeting</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Have a project in mind? Let's discuss how we can help bring your vision to life.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                    
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                  
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SaaS</option>
<<<<<<< HEAD
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
<<<<<<< HEAD
=======
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                  
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
<<<<<<< HEAD
<<<<<<< HEAD
                      rows={5}
=======
                      rows={6}
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                      rows={6}
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                      required
                    ></textarea>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Why Choose Zion Tech Group?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Round-the-clock technical support and assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                      <p className="text-gray-600 text-sm">Free consultation with our technology experts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rapid Response</h3>
                      <p className="text-gray-600 text-sm">Quick response time and fast project delivery</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-gray-600 text-sm">Sunday: Emergency support only</p>
                </div>
              </motion.div>
=======
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </motion.div>
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </form>
              </motion.div>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
=======
        {/* Business Hours */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how our technology solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Email Us
                </a>
=======
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Emergency support available 24/7 for critical issues
                </p>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </MainLayout>
=======
    </Layout>
>>>>>>> cursor/website-audit-and-update-with-deployment-090e
=======
    </>
>>>>>>> e26c98559061d7c7825ec15309661c1e278a39e3
  );
}
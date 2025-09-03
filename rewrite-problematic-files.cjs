#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class FileRewriter {
  constructor() {
    this.projectRoot = process.cwd()}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  rewriteNotFoundPage() {
    const filePath = path.join(this.projectRoot, 'pages/NotFound.tsx');

    const content = `import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, Home, ArrowLeft } from 'lucide-react';
import { Layout } from '../components/Layout';

export default function NotFound() {
  return (
    <Layout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance."
    >
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, our team of experts can help you find what you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )}`;

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Rewrote NotFound.tsx');
    return true}

  rewriteContactPage() {
    const filePath = path.join(this.projectRoot, 'pages/contact.tsx');

    const content = `import React { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Layout } from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true)};

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    }, {
      icon: Mail,
      title: 'Email',
      details: 'info@ziontechgroup.com',
      description: 'Send us an email anytime'
    }, {
      icon: MapPin,
      title: 'Office',
      details: '123 Tech Street, Innovation City',
      description: 'Visit our headquarters'
    }, {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri 9AM-6PM EST',
      description: 'We\'re here to help'
    }
  ];

  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group for expert technology solutions. We're here to help transform your business."
    >
      <Head>
        <title>Contact Us - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our team of experts is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to reach us. We're always ready to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <method.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {method.title}
                  </h3>
                </div>
                <a
                  href={method.title === 'Phone' ? 'tel:+15551234567' : 
                        method.title === 'Email' ? 'mailto:info@ziontechgroup.com' : '#'}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {method.details}
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-development">AI Development</option>
                        <option value="cloud-services">Cloud Services</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="blockchain-solutions">Blockchain Solutions</option>
                        <option value="iot-platforms">IoT Platforms</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Zion Tech Group?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Certified professionals with years of experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600">Round-the-clock assistance for your projects</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results</h4>
                      <p className="text-gray-600">Track record of successful project deliveries</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss your requirements and create a custom solution that drives your business forward.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )}`;

    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Rewrote contact.tsx');
    return true}

  async rewriteAllProblematicFiles() {
    this.log('🔧 Rewriting problematic files...');

    const rewrites = [
      () => this.rewriteNotFoundPage(),
      () => this.rewriteContactPage() ];

    let rewrittenCount = 0;
    for (const rewrite of rewrites) {
      if (rewrite()) {
        rewrittenCount++}
    }

    this.log(`🎉 Rewrote ${rewrittenCount} problematic files!`);
    return rewrittenCount > 0}
}

// Run the rewriter
const rewriter = new FileRewriter();
rewriter
  .rewriteAllProblematicFiles()
  .then(success => {
    if (success) {
      console.log('✅ Problematic files rewritten successfully!');
      process.exit(0)} else {
      console.log('❌ No files were rewritten.');
      process.exit(0)}
  })
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});

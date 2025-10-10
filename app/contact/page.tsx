'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get expert consultation and support for your business needs." />
        <meta name="keywords" content="contact, consultation, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts for a consultation.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    Ready to start your AI and IT transformation? Contact our team of experts for a personalized consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300">contact@ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p className="text-gray-300">San Francisco, CA</p>
                      <p className="text-gray-400 text-sm">Schedule an in-person meeting</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Expert AI and IT professionals
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Proven track record of success
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Customized solutions for your business
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      24/7 support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;

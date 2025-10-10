'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact, AI consulting, IT support, technology consultation" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Get in touch with our experts today.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-800/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">info@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-300">Global Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Why choose us?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Expert AI and IT professionals</li>
                    <li>• Proven track record of success</li>
                    <li>• 24/7 support and maintenance</li>
                    <li>• Custom solutions for your needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

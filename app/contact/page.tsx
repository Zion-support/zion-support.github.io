'use client'

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Contact Us - ZionTechGroup"
        description="Get in touch with ZionTechGroup for AI solutions, consultations, and support. We're here to help transform your business."
        keywords={['contact us', 'AI consultation', 'support', 'get in touch']}
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with AI? Get in touch with our expert team today.
              </p>
            </section>

            {/* Contact Info */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card p-6 text-center">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                  <p className="text-gray-300">(302) 464-0950</p>
                </div>
                <div className="cyber-card p-6 text-center">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="cyber-card p-6 text-center">
                  <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-16">
              <div className="cyber-card p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="cyber-button px-8 py-4 text-lg inline-flex items-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;

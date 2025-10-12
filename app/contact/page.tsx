'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud infrastructure, and cybersecurity services. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="cyber-card bg-gray-800 rounded-xl p-8 scan-line">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Business Hours</p>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card bg-gray-800 rounded-xl p-8 scan-line">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="futuristic-btn w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow-purple"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

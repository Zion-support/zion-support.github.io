'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your technology needs. Contact our expert team today." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">contact@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">123 Tech Street, Innovation City, IC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Expert technology team
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Proven track record
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      24/7 support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Custom solutions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

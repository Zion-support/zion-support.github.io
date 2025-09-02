import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and technology consulting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to transform your business with cutting-edge technology? Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact Info Cards */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                </div>
                <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500 font-medium">
                  +1 302 464 0950
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-gray-600 mb-2">Send us a message anytime</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-500 font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                </div>
                <p className="text-gray-600 mb-2">Visit our headquarters</p>
                <div className="text-purple-600 font-medium">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="it-services">IT Services</option>
                        <option value="micro-saas">Micro SaaS</option>
                        <option value="emerging-tech">Emerging Tech</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project or how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Business Hours</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Emergency support available 24/7 for existing clients
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}
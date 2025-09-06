import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, Micro SaaS, and Enterprise IT solutions. We are here to help you transform your business.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're here to answer your questions and help you start your next big project.
          </p>
          <Link
            href="#contact-form"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
          >
            Send us a Message
            <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Contact Details & Form */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Contact Information</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out to us through any of the following channels. We aim to respond within one business day.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-600">info@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                    <p className="text-gray-600">
                      123 Technology Drive<br />
                      Innovation City, IC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="your@example.com"
                    required
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Project Inquiry, Support, etc."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Tell us about your project or question..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center text-gray-500 text-xl">
              [Google Maps Embed Placeholder]
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your goals.
            </p>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              Explore Our Solutions
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
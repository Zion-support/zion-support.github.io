'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us today." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Ready to transform your business with AI and IT solutions? 
                  Contact us today to discuss your needs.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Address</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
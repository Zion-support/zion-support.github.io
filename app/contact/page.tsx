import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
// import { Metadata } from 'next'; // Removed for Vite

// Metadata removed for Vite compatibility
>>>>>>> origin/main

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss your AI and IT needs. We're here to help transform your business.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">(302) 464-0950</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-400 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
=======
        </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get In Touch
              </h2>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Address
                  </h3>
                  <p className='text-gray-600'>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
>>>>>>> origin/main
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Phone
                  </h3>
                  <p className='text-gray-600'>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                      +1 (302) 464-0950
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Email
                  </h3>
                  <p className='text-gray-600'>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
=======

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
>>>>>>> origin/main
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
  );
};

export default ContactPage;

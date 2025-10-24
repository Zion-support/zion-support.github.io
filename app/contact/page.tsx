'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className = "min-h-screen bg-gradient-to-br from-blue-5 0 to-indigo-10 0">
      <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8 py-1 2">
        <div className="text-center mb-1 6">
          <h 1 className="text-4xl md:text-6xl font-bold text-gray-90 0 mb-6">
            Contact Us
          </h 1>
          <p className="text-xl text-gray-60 0 mb-8 max-w-3xl mx-auto">
            Get in touch with Zion Tech Group for your AI and IT solution needs. We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 2">
          <div>
            <h 2 className="text-2xl font-bold text-gray-90 0 mb-6">Get in Touch</h 2>
            <div className="space-y-4">
              <div>
                <h 3 className="text-lg font-semibold text-gray-90 0">Email</h 3>
                <p className="text-gray-60 0">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h 3 className="text-lg font-semibold text-gray-90 0">Phone</h 3>
                <p className="text-gray-60 0">+1-30 2-46 4-095 0</p>
              </div>
              <div>
                <h 3 className="text-lg font-semibold text-gray-90 0">Address</h 3>
                <p className="text-gray-60 0">36 4 E Main St STE 100 8<br />Middletown', DE 1970 9</p>
              </div>
            </div>
          </div>
          
          <div>
            <h 2 className="text-2xl font-bold text-gray-90 0 mb-6">Send us a Message</h 2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-70 0 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-30 0 rounded-lg focus: ''ring-2 focus:ring-blue-50 0 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-70 0 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-30 0 rounded-lg focus:ring-2 focus:ring-blue-50 0 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-70 0 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4'}
                  className="w-full px-4 py-3 border border-gray-30 0 rounded-lg focus: ''ring-2 focus:ring-blue-50 0 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-60 0 text-white py-3 px-6 rounded-lg hover:bg-blue-70 0 transition-colors duration-20 0 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
  );''
}

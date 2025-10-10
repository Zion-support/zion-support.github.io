'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Ready to transform your business with AI and IT solutions? Contact us today.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> info@ziontechgroup.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solutions needs." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team for your AI and IT solutions needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Ready to transform your business with AI? Contact us today.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">Email: contact@ziontechgroup.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600">Address: 123 Tech Street, Innovation City</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
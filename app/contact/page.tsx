import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solutions needs" />
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
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Contact information and form will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
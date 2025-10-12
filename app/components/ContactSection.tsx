import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how our AI and IT solutions can transform your business.
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
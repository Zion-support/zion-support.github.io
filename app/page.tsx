'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Advanced artificial intelligence solutions to automate and optimize your business processes.
            </p>
            <Link href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation.
            </p>
            <Link href="/it-services" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-6">
              Dedicated support and maintenance services to keep your systems running smoothly.
            </p>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Leading technology solutions provider specializing in AI, web development, 
            mobile applications, cloud services, and digital transformation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Web Development</h2>
            <p className="text-gray-600">
              Modern, responsive web applications built with the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Services</h2>
            <p className="text-gray-600">
              Scalable cloud infrastructure solutions to support your growing business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
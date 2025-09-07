import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI solutions, 
            micro SaaS development, and enterprise IT services.
          </p>
          <div className="space-x-4">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

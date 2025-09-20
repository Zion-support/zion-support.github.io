import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of AI and technology solutions. We deliver innovative 
            solutions that transform businesses and drive digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence solutions to automate and optimize your business processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Technology Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge technology solutions that keep you ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">
                Tailored software solutions designed specifically for your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
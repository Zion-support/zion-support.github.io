import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced AI and IT solutions for the future of business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
            <Link href="/ai-services" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">5G Technology</h3>
            <p className="text-gray-300 mb-4">
              Experience ultra-fast connectivity with our cutting-edge 5G solutions.
            </p>
            <Link href="/5g-solutions" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Scalable and secure cloud solutions for modern businesses.
            </p>
            <Link href="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
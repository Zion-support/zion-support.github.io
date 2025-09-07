'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Zion Tech Group
      </h1>
      <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
        AI, Micro SaaS, and IT Services
      </p>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Leading technology solutions in AI, cybersecurity, cloud infrastructure, and digital transformation.
        Empowering businesses with cutting-edge technology and innovative solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          href="/contact" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Get Started
        </Link>
        <Link 
          href="/about" 
          className="bg-transparent text-blue-300 font-semibold py-4 px-8 rounded-lg border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Learn More
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
          <p className="text-gray-300">Advanced artificial intelligence and machine learning solutions to automate and optimize your business processes.</p>
        </div>

        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">☁️</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
          <p className="text-gray-300">Scalable cloud infrastructure and migration services to modernize your IT environment.</p>
        </div>

        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
          <p className="text-gray-300">Comprehensive security solutions to protect your digital assets and ensure compliance.</p>
        </div>
      </div>
    </div>
  );
}
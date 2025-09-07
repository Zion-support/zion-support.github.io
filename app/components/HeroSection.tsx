<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="text-center mb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
          Zion Tech Group
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-8">
          Innovative Micro SaaS, AI Services & IT Solutions
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your business with our cutting-edge technology solutions. 
          From AI-powered automation to cloud infrastructure, we deliver 
          enterprise-grade solutions that drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get Started Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link 
            href="/services" 
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore Services
          </Link>
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
      </div>
    </div>
  );
}
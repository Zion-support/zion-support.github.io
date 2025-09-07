import React from 'react';
import Link from 'next/link';

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
        </div>
      </div>
    </div>
  );
}
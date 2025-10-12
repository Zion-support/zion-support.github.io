'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function OptimizedImagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Optimized Image | Zion Tech Group</title>
        <meta name="description" content="Professional image optimization services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="image optimization, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Optimized Image
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced image optimization solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our image optimization solutions stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-white">🖼️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Smart Compression
              </h3>
              <p className="text-gray-300">
                Advanced algorithms to reduce file size while maintaining quality
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-white">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Processing
              </h3>
              <p className="text-gray-300">
                Lightning-fast image processing with real-time optimization
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-white">🎯</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Format Optimization
              </h3>
              <p className="text-gray-300">
                Automatic format selection for optimal performance and quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our image optimization solutions and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
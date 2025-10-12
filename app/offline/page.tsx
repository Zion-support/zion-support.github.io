'use client';

import React from 'react';

export default function Offline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Offline
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <p className="text-white text-lg mb-6">
            This page is under development. Please check back later for more information about our offline services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Expert Consultation</h3>
              <p className="text-gray-300">Get personalized advice from our team of experts.</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored solutions designed for your specific needs.</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support for all your requirements.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

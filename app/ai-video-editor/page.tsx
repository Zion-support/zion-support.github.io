<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
'use client';
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352

import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Video Editor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ai video editor services and solutions for modern businesses
            </p>
=======
    <>
      <SEOHead
        title=" - Zion Tech Group"
        description="Professional  services by Zion Tech Group"
        keywords=", technology, solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional  services and solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get Started
            </Link>
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Ai Video Editor Services
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We provide comprehensive ai video editor solutions tailored to your business needs.
                Our expert team delivers cutting-edge technology and innovative approaches to help you succeed.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From strategy development to implementation and ongoing support, we're your trusted partner
                in digital transformation and technology excellence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Expert team with proven experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Scalable and future-proof solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
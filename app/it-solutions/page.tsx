import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              It Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional it solutions services and solutions for modern businesses
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our It Solutions Services
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We provide comprehensive it solutions solutions tailored to your business needs.
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

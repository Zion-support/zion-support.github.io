<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern businesses
            </p>
=======
'use client';

import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';

export default function Page() {
  return (
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
      
      {/* Services Grid */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services to keep your business running smoothly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
              <p className="text-gray-300">
                Custom websites and web applications built with modern technologies.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Development</h3>
              <p className="text-gray-300">
                iOS and Android applications for your business needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
              <p className="text-gray-300">
                Seamless migration to cloud platforms for better scalability.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your digital assets.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">IT Support</h3>
              <p className="text-gray-300">
                24/7 technical support and maintenance services.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">DevOps</h3>
              <p className="text-gray-300">
                Streamlined development and deployment processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
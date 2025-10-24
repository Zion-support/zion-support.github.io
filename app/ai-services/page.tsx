<<<<<<< HEAD
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business
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
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">AI Analytics & BI</h3>
              <p className="text-gray-300">
                Advanced business intelligence powered by artificial intelligence for data-driven decisions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">AI Automation</h3>
              <p className="text-gray-300">
                Streamline your processes with intelligent automation solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">AI Chatbots & NLP</h3>
              <p className="text-gray-300">
                Conversational AI solutions for enhanced customer experience.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">AI Content Generation</h3>
              <p className="text-gray-300">
                Automated content creation using advanced AI models.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">AI Cybersecurity</h3>
              <p className="text-gray-300">
                AI-powered security solutions to protect your digital assets.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300">
                Image recognition and visual intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
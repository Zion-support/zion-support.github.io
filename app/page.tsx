"use client"
import React from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Professional AI and technology services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI & Technology Solutions" />
        <meta property="og:description" content="Professional AI and technology services and solutions for modern businesses." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional AI and technology services and solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Services Preview */}
        <div className="py-24 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI and machine learning solutions to transform your business.
                </p>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Services</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud infrastructure and migration services.
                </p>
                <Link href="/cloud-services" className="text-purple-400 hover:text-purple-300">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your business.
                </p>
                <Link href="/cybersecurity" className="text-purple-400 hover:text-purple-300">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
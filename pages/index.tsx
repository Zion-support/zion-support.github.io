import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Index() {

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center group">
                  <Rocket className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Zion Tech Group</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Services</Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">About</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Contact</Link>
                <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">Get Started</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI, cybersecurity, and cloud solutions that transform businesses and drive innovation forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive technology solutions designed to accelerate your digital transformation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">Cutting-edge artificial intelligence solutions that transform your business operations and drive intelligent automation.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
                <p className="text-gray-600 mb-6">Scalable cloud infrastructure and automated deployment solutions for modern business needs.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">Comprehensive security solutions with zero-trust architecture and advanced threat detection systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">Join hundreds of companies that have revolutionized their operations with our cutting-edge technology solutions.</p>
            </div>
            <div className="text-center">
              <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-10 w-10 text-blue-400" />
              <span className="ml-3 text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Revolutionary Technology Solutions for Modern Businesses. We specialize in AI, cybersecurity, cloud computing, and digital transformation.
            </p>
            <p className="text-gray-400 text-sm">© 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
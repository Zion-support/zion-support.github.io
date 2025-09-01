import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Rocket, Users, Shield, Cloud, ArrowRight, Phone, Mail, MapPin, CheckCircle, Star, Target } from 'lucide-react';

export default function Index() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading technology solutions provider specializing in AI, Cloud, and Cybersecurity. Transform your business with our innovative services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading technology solutions provider specializing in AI, Cloud, and Cybersecurity. Transform your business with our innovative services." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com/" />
        <meta property="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="twitter:description" content="Leading technology solutions provider specializing in AI, Cloud, and Cybersecurity. Transform your business with our innovative services." />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="AI, Machine Learning, Cloud Computing, Cybersecurity, Technology Solutions, Digital Transformation" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading technology solutions provider specializing in AI, Cloud, and Cybersecurity",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-TECH-GROUP",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <Rocket className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Services
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
                <Link 
                  href="#contact" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, Cloud, and Cybersecurity solutions. 
              We deliver innovation that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Advanced AI solutions including intelligent automation, predictive analytics, and custom ML models.
                </p>
                <Link href="#contact" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Scalable cloud infrastructure, migration services, and DevOps automation for modern businesses.
                </p>
                <Link href="#contact" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance.
                </p>
                <Link href="#contact" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how we can help accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (555) TECH-GROUP</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">contact@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Serving clients worldwide</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionary Technology Solutions for Modern Businesses
              </p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}